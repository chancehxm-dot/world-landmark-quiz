import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand">
          World Capitals Quiz
        </Link>
        <span className="site-tagline">
          Test your knowledge of national capitals
        </span>
      </div>
    </header>
  );
}
