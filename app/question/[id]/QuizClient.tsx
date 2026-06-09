'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { questions, totalQuestions, type Question } from '@/lib/questions';
import {
  loadAnswers,
  saveAnswers,
  type AnswerId,
  type AnswerMap,
} from '@/lib/quiz-storage';
import { fireConfetti, fireMiniConfetti } from '@/lib/confetti';

type Props = {
  question: Question;
  prevId: string | null;
  nextId: string | null;
  index: number;
};

const correctMessages = [
  '太聪明了！',
  '答对了！你真棒！',
  '完全正确，厉害！',
  '天才般的判断！',
  '漂亮，稳！',
  '行家啊！',
  '脑回路稳准狠！',
  '这都能答对，绝了！',
];

const wrongMessages = [
  '差一点就对了，再想想？',
  '没关系，记住这个答案吧。',
  '这题有点 tricky，加油！',
  '别灰心，下一题会更好。',
  '差一点点，看完解释再试一次？',
];

const perfectMessages = [
  '你这是开了挂吧？',
  '这都能全对？离谱！',
  '地理之神就是你！',
  '人类已经无法阻止你了。',
];

function pickRandom<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

function shuffleSeed(seed: number): number {
  return (seed * 9301 + 49297) % 233280;
}

function computeStats(answers: AnswerMap): {
  answered: number;
  correct: number;
  total: number;
} {
  let answered = 0;
  let correct = 0;
  for (const q of questions) {
    const a = answers[q.id];
    if (a) {
      answered += 1;
      if (a === q.correct) correct += 1;
    }
  }
  return { answered, correct, total: questions.length };
}

export function QuizClient({ question, prevId, nextId, index }: Props) {
  const [selected, setSelected] = useState<AnswerId | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [hydrated, setHydrated] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const loaded = loadAnswers();
    setAnswers(loaded);
    setHydrated(true);
    const existing = loaded[question.id];
    if (existing) {
      setSelected(existing);
      setSubmitted(true);
      setShowAnswer(true);
    }
  }, [question.id]);

  const stats = useMemo(() => computeStats(answers), [answers]);
  const isCorrect = submitted && selected === question.correct;
  const correctAnswer = question.answers.find((a) => a.id === question.correct);
  const selectedAnswer = question.answers.find((a) => a.id === selected);

  const encouragement = useMemo(() => {
    const seed = shuffleSeed(index * 7 + 13);
    if (isCorrect) {
      if (stats.correct === totalQuestions) {
        return pickRandom(perfectMessages, seed);
      }
      return pickRandom(correctMessages, seed);
    }
    return pickRandom(wrongMessages, seed);
  }, [isCorrect, index, stats.correct]);

  const handleSelect = (id: AnswerId) => {
    if (submitted) return;
    setSelected(id);
    setPopKey((k) => k + 1);
  };

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    setShowAnswer(true);
    const next: AnswerMap = { ...answers, [question.id]: selected };
    setAnswers(next);
    saveAnswers(next);
    if (selected === question.correct) {
      const rect = submitBtnRef.current?.getBoundingClientRect();
      if (rect) {
        fireMiniConfetti(rect.left + rect.width / 2, rect.top);
      } else {
        fireConfetti();
      }
    }
  };

  const handleTryAgain = () => {
    setSubmitted(false);
    setSelected(null);
    setShowAnswer(false);
    const next: AnswerMap = { ...answers };
    delete next[question.id];
    setAnswers(next);
    saveAnswers(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && !submitted) {
      e.preventDefault();
    }
  };

  const submitDisabled = !selected || submitted;

  return (
    <div className="jc-quiz" data-jc-navigation-mode="path">
      <div className="jc-card jc-question-card">
        <div className="jc-progress" aria-label="Quiz progress">
          <div className="jc-progress-track">
            <div
              className="jc-progress-fill"
              style={{
                width: `${Math.round((stats.answered / totalQuestions) * 100)}%`,
              }}
            />
          </div>
          <div className="jc-progress-stats">
            <span>
              <strong>{stats.answered}</strong> / {totalQuestions} answered
            </span>
            <span className="jc-progress-correct">
              <strong>{stats.correct}</strong> correct
            </span>
          </div>
        </div>

        <div className="jc-question-block">
          <p className="jc-kicker">
            {question.category} · Question {index + 1} of {totalQuestions}
          </p>
          <h3 className="jc-question">{question.prompt}</h3>
          <p className="jc-question-context">{question.context}</p>
        </div>

        <AdSlot id={`${question.id}-1`} />

        <form
          className="jc-answer-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="jc-answer-list" key={popKey}>
            {question.answers.map((a) => {
              const isThisSelected = selected === a.id;
              const isThisCorrect = a.id === question.correct;
              let className = 'jc-answer';
              if (submitted) {
                if (isThisCorrect) className += ' jc-answer-correct';
                else if (isThisSelected) className += ' jc-answer-wrong';
                else className += ' jc-answer-dim';
              } else if (isThisSelected) {
                className += ' jc-answer-selected';
              }
              return (
                <label className={className} key={a.id}>
                  <input
                    type="radio"
                    name={`jc_answer_${question.id}`}
                    value={a.id}
                    checked={isThisSelected}
                    onChange={() => handleSelect(a.id)}
                    onKeyDown={handleKeyDown}
                    disabled={submitted}
                  />
                  <span className="jc-answer-marker">{a.id.toUpperCase()}</span>
                  <span className="jc-answer-text">{a.text}</span>
                  {submitted && isThisCorrect && (
                    <span className="jc-answer-badge jc-badge-correct">
                      ✓ Correct
                    </span>
                  )}
                  {submitted && isThisSelected && !isThisCorrect && (
                    <span className="jc-answer-badge jc-badge-wrong">
                      ✗ Your pick
                    </span>
                  )}
                </label>
              );
            })}
          </div>

          <div className="jc-question-submit">
            {!submitted ? (
              <button
                ref={submitBtnRef}
                type="submit"
                className="jc-btn jc-btn-primary jc-btn-pulse"
                disabled={submitDisabled}
                aria-disabled={submitDisabled ? 'true' : 'false'}
              >
                {selected ? 'Submit Answer' : 'Pick an answer to submit'}
              </button>
            ) : (
              <div className="jc-question-next-row">
                {nextId ? (
                  <Link
                    className="jc-btn jc-btn-primary"
                    href={`/question/${nextId}/`}
                  >
                    Next question →
                  </Link>
                ) : (
                  <Link className="jc-btn jc-btn-primary" href="/result/">
                    See your result →
                  </Link>
                )}
                <Link
                  className="jc-btn jc-btn-secondary"
                  href="/result/"
                >
                  View score
                </Link>
                <button
                  type="button"
                  className="jc-btn jc-btn-ghost"
                  onClick={handleTryAgain}
                >
                  Try again
                </button>
              </div>
            )}
          </div>
        </form>

        {submitted && (
          <div
            className={`jc-feedback ${
              isCorrect ? 'jc-feedback-correct' : 'jc-feedback-wrong'
            } jc-feedback-animated`}
            role="status"
            aria-live="polite"
          >
            <div className="jc-feedback-emoji" aria-hidden="true">
              {isCorrect ? '🎉' : '💡'}
            </div>
            <div className="jc-feedback-body">
              <h4 className="jc-feedback-title">{encouragement}</h4>
              <p>
                {isCorrect ? (
                  <>
                    You picked <strong>{selectedAnswer?.text}</strong> — that's
                    right!
                  </>
                ) : (
                  <>
                    You picked <strong>{selectedAnswer?.text}</strong>. The
                    correct answer is <strong>{correctAnswer?.text}</strong>.
                  </>
                )}
              </p>
              <p className="jc-feedback-why">
                <strong>Why:</strong> {question.explanation}
              </p>
            </div>
          </div>
        )}

        {!submitted && (
          <div className="jc-show-answer-row">
            <button
              type="button"
              className="jc-btn jc-btn-ghost jc-btn-small"
              onClick={() => setShowAnswer((s) => !s)}
              aria-expanded={showAnswer}
            >
              {showAnswer ? '🙈 Hide answer' : '👀 Show answer'}
            </button>
            <span className="jc-show-answer-hint">
              Stuck? Take a peek.
            </span>
          </div>
        )}

        {showAnswer && !submitted && (
          <div className="jc-answer-reveal jc-feedback-animated">
            <h4 className="jc-feedback-title">
              Answer: <strong>{correctAnswer?.text}</strong>
            </h4>
            <p>{question.explanation}</p>
          </div>
        )}

        <AdSlot id={`${question.id}-2`} />

        <section className="jc-qpc" aria-label="Quiz quick note">
          <h4>{question.beforeTitle}</h4>
          <p>{question.beforeText}</p>
        </section>

        <AdSlot id={`${question.id}-3`} />

        <div className="jc-nav-row">
          <div className="jc-nav-info">
            <span>
              <strong>{index + 1}</strong> / {totalQuestions}
            </span>
            {hydrated && stats.answered > 0 && (
              <span className="jc-nav-stat">
                Progress: {stats.answered} answered · {stats.correct} correct
              </span>
            )}
          </div>
          <div className="jc-nav-links">
            {prevId && (
              <Link className="jc-nav-link" href={`/question/${prevId}/`}>
                ← Previous
              </Link>
            )}
            {nextId ? (
              <Link className="jc-nav-link" href={`/question/${nextId}/`}>
                Next question →
              </Link>
            ) : (
              <Link className="jc-nav-link" href="/result/">
                See your result →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
