import type { Metadata } from 'next';
import { ResultClient } from './ResultClient';

export const metadata: Metadata = {
  title: 'World Capitals Quiz Result',
  description:
    'See how you did on the World Capitals quiz. A short summary of your performance and a way to retake the quiz.',
};

export default function ResultPage() {
  return <ResultClient />;
}
