import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: {
    default: 'World Capitals Quiz',
    template: '%s | World Capitals Quiz',
  },
  description:
    'A short, friendly quiz about world capitals. Test your knowledge of national capitals across Europe, Asia, Africa, and the Americas.',
  metadataBase: new URL('http://localhost:3000'),
};

const paramsScript = `try {
  var params = new URLSearchParams(location.search);
  var pp = params.get('pp');
  if (pp) {
    localStorage.setItem('bs-pp', pp);
  } else if (!localStorage.getItem('bs-pp')) {
    localStorage.setItem('bs-pp', 'mm');
  }
  var clientid = params.get('clientid');
  var uuid = params.get('uuid');
  if (clientid && uuid) {
    localStorage.setItem('mixedAdParams', 'clientid=' + clientid + '&uuid=' + uuid);
  }
} catch (e) {}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="dns-prefetch" href="https://sdk.broadsolutionsgroup.com" />
        <meta name="next-size-adjust" content="" />
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
      </head>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: '<!--$--><!--/$-->' }} />
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
        <script src="/ads/gpt.js" />
      </body>
    </html>
  );
}
