'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { questions, totalQuestions, type Question } from '@/lib/questions';
import {
  clearAnswers,
  loadAnswers,
  type AnswerMap,
} from '@/lib/quiz-storage';
import { fireBigConfetti, fireConfetti } from '@/lib/confetti';

type Row = {
  question: Question;
  picked: 'a' | 'b' | 'c' | 'd' | undefined;
  isCorrect: boolean;
  skipped: boolean;
};

function buildRows(answers: AnswerMap): Row[] {
  return questions.map((q) => {
    const picked = answers[q.id];
    return {
      question: q,
      picked,
      isCorrect: picked === q.correct,
      skipped: !picked,
    };
  });
}

function pickMessage(
  answered: number,
  correct: number,
  total: number,
): { title: string; body: string; tone: 'great' | 'good' | 'mid' | 'low' | 'empty' } {
  if (answered === 0) {
    return {
      title: 'No answers yet',
      body: 'You haven’t submitted anything. Try at least one question to see how you’re doing.',
      tone: 'empty',
    };
  }
  const ratio = correct / answered;
  if (correct === total) {
    return {
      title: 'Flawless run!',
      body: `You got every single question right (${correct}/${total}). Honestly, are you cheating? Because this is suspicious.`,
      tone: 'great',
    };
  }
  if (ratio >= 0.9) {
    return {
      title: 'Capital-brain energy!',
      body: `${correct}/${answered} correct — you’re cruising. The few you missed are a quick study away from a perfect score.`,
      tone: 'great',
    };
  }
  if (ratio >= 0.7) {
    return {
      title: 'Solid work!',
      body: `${correct}/${answered} correct. You know your way around the world map. Polish the few you missed and you’ll be unstoppable.`,
      tone: 'good',
    };
  }
  if (ratio >= 0.4) {
    return {
      title: 'Halfway there',
      body: `${correct}/${answered} correct. You’ve got the basics, but a few regions are sneaking past you. Read the explanations and try again.`,
      tone: 'mid',
    };
  }
  return {
    title: 'Geography needs you',
    body: `Only ${correct}/${answered} correct — that’s a lot of room to grow. The good news: the explanations stick with you, so the next round will be better.`,
    tone: 'low',
  };
}

function useCountUp(target: number, duration = 1200): number {
  const [value, setValue] = useState(0);
  const startedRef = useRef<number | null>(null);
  useEffect(() => {
    startedRef.current = null;
    let raf = 0;
    const step = (t: number) => {
      if (startedRef.current === null) startedRef.current = t;
      const elapsed = t - startedRef.current;
      const ratio = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setValue(Math.round(target * eased));
      if (ratio < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export function ResultClient() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [hydrated, setHydrated] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const celebrationFiredRef = useRef(false);

  useEffect(() => {
    const loaded = loadAnswers();
    setAnswers(loaded);
    setHydrated(true);
  }, []);

  const rows = useMemo(() => buildRows(answers), [answers]);
  const answered = rows.filter((r) => !r.skipped).length;
  const correct = rows.filter((r) => r.isCorrect).length;
  const wrong = answered - correct;
  const skipped = totalQuestions - answered;

  const message = useMemo(
    () => pickMessage(answered, correct, totalQuestions),
    [answered, correct],
  );

  const displayScore = useCountUp(hydrated ? correct : 0);

  useEffect(() => {
    if (!hydrated) return;
    if (celebrationFiredRef.current) return;
    celebrationFiredRef.current = true;
    if (message.tone === 'great') {
      fireBigConfetti();
    } else if (message.tone === 'good' && answered > 0) {
      setTimeout(() => fireConfetti(), 350);
    }
  }, [hydrated, message.tone, answered]);

  const handleReset = () => {
    clearAnswers();
    setAnswers({});
    celebrationFiredRef.current = true;
  };

  const visibleRows = showAll ? rows : rows.filter((r) => !r.skipped);

  return (
    <div className="jc-quiz" data-jc-navigation-mode="path">
      <div className={`jc-card jc-result jc-result-tone-${message.tone}`}>
        <p className="jc-kicker">Your Quiz Result</p>
        <div
          className="jc-result-score"
          data-result-score
          data-tone={message.tone}
        >
          {displayScore}
          <span className="jc-result-score-total">/ {totalQuestions}</span>
        </div>
        <p className="jc-result-label">
          {hydrated
            ? answered === 0
              ? 'No questions answered yet'
              : `${correct} correct · ${wrong} wrong · ${skipped} skipped`
            : 'Loading…'}
        </p>

        <h3 className="jc-result-title">{message.title}</h3>
        <p className="jc-result-message" data-result-message>
          {message.body}
        </p>

        <AdSlot id="div-gpt-ad-1779350405067-0" />

        <div className="jc-result-actions">
          <Link href="/question/q001/" className="jc-btn jc-btn-primary">
            Continue the quiz
          </Link>
          <button
            type="button"
            className="jc-btn jc-btn-secondary"
            onClick={handleReset}
          >
            Start over
          </button>
          <Link href="/" className="jc-btn jc-btn-ghost">
            Back to start
          </Link>
        </div>

        <AdSlot id="result-2" />

        {hydrated && answered > 0 && (
          <section
            className="jc-result-breakdown"
            aria-label="Your answer breakdown"
          >
            <header className="jc-result-breakdown-head">
              <h4>Your answers</h4>
              {skipped > 0 && (
                <button
                  type="button"
                  className="jc-btn jc-btn-ghost jc-btn-small"
                  onClick={() => setShowAll((v) => !v)}
                >
                  {showAll ? 'Hide skipped' : `Show ${skipped} skipped`}
                </button>
              )}
            </header>
            <ol className="jc-result-list">
              {visibleRows.map((row, i) => {
                const picked = row.picked
                  ? row.question.answers.find((a) => a.id === row.picked)
                  : undefined;
                const correct = row.question.answers.find(
                  (a) => a.id === row.question.correct,
                );
                let status = 'skipped';
                if (!row.skipped) status = row.isCorrect ? 'correct' : 'wrong';
                return (
                  <li
                    key={row.question.id}
                    className={`jc-result-item jc-result-item-${status}`}
                  >
                    <div className="jc-result-item-head">
                      <span className="jc-result-item-num">{i + 1}</span>
                      <span className="jc-result-item-prompt">
                        {row.question.prompt}
                      </span>
                      <span className={`jc-result-pill jc-pill-${status}`}>
                        {status === 'correct'
                          ? '✓ Correct'
                          : status === 'wrong'
                            ? '✗ Wrong'
                            : '— Skipped'}
                      </span>
                    </div>
                    <div className="jc-result-item-body">
                      {row.skipped ? (
                        <span className="jc-result-item-note">
                          You skipped this one. Correct answer:{' '}
                          <strong>{correct?.text}</strong>
                        </span>
                      ) : row.isCorrect ? (
                        <span className="jc-result-item-note">
                          You picked <strong>{picked?.text}</strong>.
                        </span>
                      ) : (
                        <span className="jc-result-item-note">
                          You picked <strong>{picked?.text}</strong>. The
                          correct answer is <strong>{correct?.text}</strong>.
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        <section className="jc-qpc" aria-label="How scoring works">
          <h4>How scoring works</h4>
          <p>
            You can submit every question independently, so you can stop
            whenever you like and still see a score for what you’ve answered.
            The explanations after each question are written to help you
            understand the reasoning, not just the fact.
          </p>
        </section>
      </div>
    </div>
  );
}
