import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { aboutUs } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutUsPage() {
  return <LegalLayout title="About Us" blocks={aboutUs} />;
}
