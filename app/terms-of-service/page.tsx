import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { termsOfService } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsOfServicePage() {
  return <LegalLayout title="Terms of Service" blocks={termsOfService} />;
}
