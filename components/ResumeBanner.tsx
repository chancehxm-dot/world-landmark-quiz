'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadAnswers, type AnswerMap } from '@/lib/quiz-storage';
import { questions, totalQuestions } from '@/lib/questions';

function firstUnanswered(answers: AnswerMap): string | null {
  for (const q of questions) {
    if (!answers[q.id]) return q.id;
  }
  return null;
}

function statsFor(answers: AnswerMap) {
  let answered = 0;
  let correct = 0;
  for (const q of questions) {
    const a = answers[q.id];
    if (a) {
      answered += 1;
      if (a === q.correct) correct += 1;
    }
  }
  return { answered, correct };
}

export function ResumeBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [nextId, setNextId] = useState<string | null>(null);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    const loaded = loadAnswers();
    const s = statsFor(loaded);
    const next = firstUnanswered(loaded);
    setAnswered(s.answered);
    setCorrect(s.correct);
    setNextId(next);
    setAllDone(s.answered === totalQuestions);
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div className="jc-resume jc-resume-empty" aria-hidden="true">
        <span className="jc-resume-label">Loading your progress…</span>
      </div>
    );
  }

  if (answered === 0) {
    return (
      <div className="jc-resume jc-resume-empty">
        <span className="jc-resume-label">
          You haven’t started yet. Pick an answer to begin tracking progress.
        </span>
      </div>
    );
  }

  if (allDone) {
    return (
      <div className="jc-resume jc-resume-done">
        <div className="jc-resume-text">
          <strong>Quiz complete!</strong> You finished all {totalQuestions}{' '}
          questions with <strong>{correct}</strong> correct.
        </div>
        <div className="jc-resume-actions">
          <Link className="jc-btn jc-btn-primary jc-btn-small" href="/result/">
            See final result
          </Link>
          <Link
            className="jc-btn jc-btn-ghost jc-btn-small"
            href="/question/q001/"
          >
            Review answers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jc-resume">
      <div className="jc-resume-text">
        <strong>Welcome back.</strong> You’ve answered{' '}
        <strong>{answered}</strong> of {totalQuestions} ({correct} correct).{' '}
        {nextId && <>Next up: question #{questions.findIndex((q) => q.id === nextId) + 1}.</>}
      </div>
      <div className="jc-resume-actions">
        {nextId && (
          <Link
            className="jc-btn jc-btn-primary jc-btn-small"
            href={`/question/${nextId}/`}
          >
            Resume where you left off
          </Link>
        )}
        <Link className="jc-btn jc-btn-ghost jc-btn-small" href="/result/">
          See current score
        </Link>
      </div>
    </div>
  );
}
