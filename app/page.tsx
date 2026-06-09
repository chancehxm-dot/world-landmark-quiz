import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { questions, totalQuestions } from '@/lib/questions';
import { ResumeBanner } from '@/components/ResumeBanner';

export default function HomePage() {
  return (
    <div className="jc-quiz" data-jc-navigation-mode="path">
      <div className="jc-card jc-start" data-jc-start-layout="default">
        <AdSlot id="top" />

        <div className="jc-start-header">
          <p className="jc-kicker">A World Capitals Quiz</p>
          <h1 className="jc-title">World Capitals: A Quick Quiz</h1>
        </div>

        <div className="jc-meta-row">
          <span className="jc-pill jc-pill-accent">{totalQuestions} questions</span>
          <span className="jc-pill">Submit anytime</span>
          <span className="jc-pill">Save your progress</span>
        </div>

        <AdSlot id="div-gpt-ad-1779350318706-0" />

        <div className="jc-start-actions">
          <Link href="/question/q001/" className="jc-btn jc-btn-primary">
            Start the World Capitals Quiz
          </Link>
        </div>

        <ResumeBanner />

        <AdSlot id="start-2" />

        <p className="jc-intro">
          This World Capitals quiz is built as a careful learning quiz rather than
          a quick guessing game. Each question mixes accessible capital facts with
          clue-based reasoning: official capitals, regional centres, historic
          seats, and famous cities that are sometimes mistaken for capitals. The
          wording avoids partisan framing, stereotypes, and claims that reduce a
          country to one city. The goal is to help readers build stronger
          geography knowledge through fair clues, short explanations, and clear
          comparisons between similar countries.
        </p>

        <p className="jc-start-preview-summary">
          A 40-question quiz about world capitals covering European, Asian,
          African, and American capitals. You can answer one question and submit
          to see your score, or work your way through all of them — your
          progress is saved as you go.
        </p>

        <AdSlot id="start-3" />

        <section className="jc-start-preview" aria-label="Quiz question previews">
          <ol className="jc-start-preview-list">
            {questions.map((q) => (
              <li className="jc-start-preview-item" key={q.id}>
                <Link className="jc-start-preview-link" href={`/question/${q.id}/`}>
                  <div className="jc-start-preview-question">
                    {q.id}: {q.prompt}
                  </div>
                </Link>
                <p className="jc-start-preview-explanation">{q.explanation}</p>
              </li>
            ))}
          </ol>
        </section>

        <AdSlot id="bottom" />
      </div>
    </div>
  );
}
