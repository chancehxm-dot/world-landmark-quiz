import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { privacyPolicy } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return <LegalLayout title="Privacy Policy" blocks={privacyPolicy} />;
}
