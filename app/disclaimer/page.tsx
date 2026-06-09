import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { disclaimer } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Disclaimer',
};

export default function DisclaimerPage() {
  return <LegalLayout title="Disclaimer" blocks={disclaimer} />;
}
