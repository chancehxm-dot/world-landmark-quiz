import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { questions } from '@/lib/questions';
import { QuizClient } from './QuizClient';

type Params = { id: string };

export function generateStaticParams() {
  return questions.map((q) => ({ id: q.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const q = questions.find((x) => x.id === id);
  if (!q) {
    return { title: 'Question not found' };
  }
  return {
    title: q.prompt,
    description: q.context,
  };
}

function neighbors(id: string): { prev: string | null; next: string | null; index: number } {
  const idx = questions.findIndex((q) => q.id === id);
  if (idx === -1) return { prev: null, next: null, index: -1 };
  return {
    prev: idx > 0 ? questions[idx - 1].id : null,
    next: idx < questions.length - 1 ? questions[idx + 1].id : null,
    index: idx,
  };
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const q = questions.find((x) => x.id === id);
  if (!q) {
    notFound();
  }

  const { prev, next, index } = neighbors(q.id);

  return (
    <QuizClient
      question={q}
      prevId={prev}
      nextId={next}
      index={index}
    />
  );
}

export const dynamicParams = false;
