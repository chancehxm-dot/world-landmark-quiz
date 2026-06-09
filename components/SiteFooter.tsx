import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav aria-label="Legal">
          <ul className="site-footer-links">
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/disclaimer/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/about-us/">About Us</Link>
            </li>
          </ul>
        </nav>
        <p className="site-footer-copy">
          &copy; {new Date().getFullYear()} World Capitals Quiz. Built as a static
          site for general learning and entertainment.
        </p>
      </div>
    </footer>
  );
}
