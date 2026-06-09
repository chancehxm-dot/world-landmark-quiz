export type LegalBlock =
  | { type: 'p'; content: string }
  | { type: 'h2'; content: string }
  | { type: 'h3'; content: string }
  | { type: 'ul'; items: string[] };

export const aboutUs: LegalBlock[] = [
  {
    type: 'h2',
    content: 'Quick Summary',
  },
  {
    type: 'p',
    content:
      'This website is an independent trivia website that focuses on short, accessible quizzes for general learning, light self-review, and entertainment.',
  },
  {
    type: 'p',
    content: 'In short:',
  },
  {
    type: 'ul',
    items: [
      'We publish general-knowledge quizzes, geography quizzes, capital-city quizzes, and similar light learning content.',
      'Quizzes are designed to be clear, mobile-friendly, and beginner-friendly.',
      'Quiz results are intended for learning or entertainment only.',
      'Results are not professional advice of any kind.',
      'We may update quiz wording, explanations, or answer feedback at any time without notice.',
    ],
  },
  {
    type: 'h2',
    content: 'Welcome',
  },
  {
    type: 'p',
    content:
      'Welcome to this independent quiz website. Our goal is to offer quick, well-structured, and educational trivia that anyone can enjoy during a short break.',
  },
  {
    type: 'p',
    content:
      'Each quiz on this site is designed to be readable on both desktop and mobile devices, with clear wording and short explanations that help you understand the reasoning behind the correct answer.',
  },
  {
    type: 'h2',
    content: 'Who We Are',
  },
  {
    type: 'p',
    content:
      'This website is run by a small editorial team that plans, writes, and reviews each quiz. Our work includes question writing, answer choice design, explanation editing, and ongoing content updates.',
  },
  {
    type: 'p',
    content:
      'We are not a licensed medical, legal, financial, psychological, or career advisory service. Our content is intended for entertainment and general learning only.',
  },
  {
    type: 'h2',
    content: 'What We Publish',
  },
  {
    type: 'p',
    content: 'This site publishes a variety of general-interest quizzes, including:',
  },
  {
    type: 'ul',
    items: [
      'Capital-city quizzes',
      'Geography and continent quizzes',
      'Multiple-choice trivia quizzes',
      'Short explanations and learning notes',
      'Result pages and related learning content',
    ],
  },
  {
    type: 'p',
    content:
      'All quizzes are written for general audiences. Explanations are intentionally brief and may not cover every advanced detail.',
  },
  {
    type: 'h2',
    content: 'How We Create Quizzes',
  },
  {
    type: 'p',
    content:
      'Each question is reviewed before publication. We try to make questions factual, clear, and free from stereotypes, partisan framing, or unnecessarily controversial content.',
  },
  {
    type: 'h3',
    content: 'Multiple-Choice Trivia',
  },
  {
    type: 'p',
    content:
      'Multiple-choice questions are written with a clear correct answer and three plausible distractors. Distractors are chosen to be tempting without being unfair.',
  },
  {
    type: 'h3',
    content: 'Explanations and Feedback',
  },
  {
    type: 'p',
    content:
      'After each question, we include a short explanation that helps the reader understand the reasoning, even if they answered incorrectly.',
  },
  {
    type: 'h2',
    content: 'Editorial Standards',
  },
  {
    type: 'ul',
    items: [
      'Quizzes are written in plain English',
      'Topics are chosen for general interest and accessibility',
      'Content is mobile-friendly and screen-reader friendly',
      'We avoid stereotypes, political framing, and insensitive wording',
      'We aim to keep explanations short but informative',
    ],
  },
  {
    type: 'h2',
    content: 'What Quiz Results Mean',
  },
  {
    type: 'p',
    content:
      'Quiz results on this site are intended for general learning or entertainment. A score or result does not define a person and should not be used for important life decisions.',
  },
  {
    type: 'p',
    content:
      'For decisions related to health, finance, education, or career, please consult a qualified professional.',
  },
  {
    type: 'h2',
    content: 'Corrections Policy',
  },
  {
    type: 'p',
    content:
      'We may update questions, answers, or explanations when we find errors, unclear wording, or better ways to teach a topic. Corrections can happen without a separate announcement.',
  },
  {
    type: 'h2',
    content: 'Advertising',
  },
  {
    type: 'p',
    content:
      'This site may display advertising to support hosting, maintenance, and content creation. Advertisers do not choose quiz answers, explanations, or scoring logic.',
  },
  {
    type: 'h2',
    content: 'Independence',
  },
  {
    type: 'p',
    content:
      'This website is independently operated. References to third-party brands, products, or organisations are for general information only and do not imply endorsement.',
  },
  {
    type: 'h2',
    content: 'Privacy',
  },
  {
    type: 'p',
    content:
      'For details about cookies, analytics, advertising, and data, please read our Privacy Policy.',
  },
  {
    type: 'h2',
    content: 'Contact',
  },
  {
    type: 'p',
    content:
      'We welcome correction requests, usability feedback, and technical issue reports. Helpful messages may include the page title, a short description of the issue, and a suggested fix if available.',
  },
  {
    type: 'h2',
    content: 'Our Purpose',
  },
  {
    type: 'p',
    content:
      'This site exists to make short, focused, and friendly trivia available to anyone. We hope you find the quizzes clear, useful, and worth your time.',
  },
];

export const privacyPolicy: LegalBlock[] = [
  {
    type: 'h2',
    content: 'Quick Summary',
  },
  {
    type: 'p',
    content:
      'This Privacy Policy explains what data this website may collect, how it is used, and what choices you have. We aim to keep our quizzes lightweight and respectful of your privacy.',
  },
  {
    type: 'ul',
    items: [
      'Quizzes do not require an account',
      'We may use cookies for basic site functions and analytics',
      'Advertising partners may use cookies to show relevant ads',
      'You can clear cookies or block tracking in your browser',
    ],
  },
  {
    type: 'h2',
    content: 'Information We Collect',
  },
  {
    type: 'p',
    content:
      'We may collect anonymous usage data such as pages visited, device type, browser, and approximate region. This helps us understand which quizzes are useful and where we can improve.',
  },
  {
    type: 'h3',
    content: 'Cookies',
  },
  {
    type: 'p',
    content:
      'Cookies are small text files stored in your browser. We may use cookies to remember quiz state, count visits, or support advertising. You can disable cookies in your browser settings at any time.',
  },
  {
    type: 'h3',
    content: 'Local Storage',
  },
  {
    type: 'p',
    content:
      'Some quiz features may use your browser\u2019s local storage to remember settings or progress. Local storage is stored on your device and not transmitted to us in a personally identifiable form.',
  },
  {
    type: 'h2',
    content: 'Advertising',
  },
  {
    type: 'p',
    content:
      'This site may display ads served by third-party networks. These partners may use cookies or similar technologies to deliver ads and measure performance. Their use of data is governed by their own privacy policies.',
  },
  {
    type: 'h2',
    content: 'Analytics',
  },
  {
    type: 'p',
    content:
      'We may use analytics tools to count visits and measure how visitors use the site. Analytics data is generally aggregated and does not personally identify you.',
  },
  {
    type: 'h2',
    content: 'Children',
  },
  {
    type: 'p',
    content:
      'This site is designed for a general audience. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us so we can remove it.',
  },
  {
    type: 'h2',
    content: 'Your Choices',
  },
  {
    type: 'ul',
    items: [
      'You can disable cookies in your browser',
      'You can clear your browser\u2019s local storage at any time',
      'You can opt out of personalised advertising through your browser or through industry opt-out tools',
    ],
  },
  {
    type: 'h2',
    content: 'Data Retention',
  },
  {
    type: 'p',
    content:
      'Aggregated analytics data may be retained for a limited period to help us understand long-term trends. We do not maintain a public database of personal quiz-taker identities.',
  },
  {
    type: 'h2',
    content: 'Changes to This Policy',
  },
  {
    type: 'p',
    content:
      'We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. The updated version will be posted on this page.',
  },
  {
    type: 'h2',
    content: 'Contact',
  },
  {
    type: 'p',
    content:
      'If you have questions about this Privacy Policy or your data, please contact us through the Contact page in the footer.',
  },
];

export const termsOfService: LegalBlock[] = [
  {
    type: 'h2',
    content: 'Quick Summary',
  },
  {
    type: 'p',
    content:
      'By using this website, you agree to use the quizzes and content for personal, non-commercial purposes. The site is provided as-is, without warranties of any kind.',
  },
  {
    type: 'h2',
    content: 'Acceptance of Terms',
  },
  {
    type: 'p',
    content:
      'By accessing this website, you confirm that you have read, understood, and agreed to these Terms of Service. If you do not agree, please stop using the site.',
  },
  {
    type: 'h2',
    content: 'Use of the Website',
  },
  {
    type: 'p',
    content: 'You agree to use this website for lawful purposes only. You agree not to:',
  },
  {
    type: 'ul',
    items: [
      'Use the site to harass, harm, or impersonate others',
      'Attempt to disrupt or compromise site security',
      'Scrape content for commercial reuse without permission',
      'Misrepresent quiz results as professional advice',
    ],
  },
  {
    type: 'h2',
    content: 'Content Ownership',
  },
  {
    type: 'p',
    content:
      'Quizzes, questions, explanations, and design elements on this site are owned by the site operator or its contributors. You may not copy or republish them for commercial purposes without permission.',
  },
  {
    type: 'h2',
    content: 'No Professional Advice',
  },
  {
    type: 'p',
    content:
      'Quizzes and explanations on this site are for general learning and entertainment only. They are not legal, medical, financial, or professional advice.',
  },
  {
    type: 'h2',
    content: 'Third-Party Links and Ads',
  },
  {
    type: 'p',
    content:
      'This site may contain links to third-party websites or display ads served by external networks. We are not responsible for the content or practices of those third parties.',
  },
  {
    type: 'h2',
    content: 'Disclaimer of Warranties',
  },
  {
    type: 'p',
    content:
      'This site is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of any content.',
  },
  {
    type: 'h2',
    content: 'Limitation of Liability',
  },
  {
    type: 'p',
    content:
      'To the maximum extent permitted by law, the site operator is not liable for any indirect, incidental, or consequential damages arising from your use of the site.',
  },
  {
    type: 'h2',
    content: 'Changes to the Terms',
  },
  {
    type: 'p',
    content:
      'We may update these Terms of Service at any time. The latest version will be posted on this page. Continued use of the site means you accept the updated terms.',
  },
  {
    type: 'h2',
    content: 'Governing Law',
  },
  {
    type: 'p',
    content:
      'These terms are governed by the laws applicable to the site operator\u2019s place of business, without regard to conflict of law principles.',
  },
  {
    type: 'h2',
    content: 'Contact',
  },
  {
    type: 'p',
    content:
      'If you have any questions about these Terms of Service, please contact us through the Contact page in the footer.',
  },
];

export const disclaimer: LegalBlock[] = [
  {
    type: 'h2',
    content: 'Quick Summary',
  },
  {
    type: 'p',
    content:
      'The information and quiz results on this website are for general informational and entertainment purposes only. We do not provide professional advice of any kind.',
  },
  {
    type: 'h2',
    content: 'No Professional Advice',
  },
  {
    type: 'p',
    content:
      'The quizzes, explanations, and result pages on this site are not a substitute for professional advice. Always seek the advice of a qualified professional regarding medical, legal, financial, educational, or other important matters.',
  },
  {
    type: 'h2',
    content: 'Accuracy of Information',
  },
  {
    type: 'p',
    content:
      'We make reasonable efforts to keep the quizzes accurate and up to date. However, quiz content may contain errors or become outdated over time. Use the information as a starting point, not as the final word.',
  },
  {
    type: 'h2',
    content: 'External Links',
  },
  {
    type: 'p',
    content:
      'This site may contain links to external websites. We do not control or endorse the content of those websites and are not responsible for their accuracy, legality, or practices.',
  },
  {
    type: 'h2',
    content: 'Affiliate Disclosure',
  },
  {
    type: 'p',
    content:
      'If we ever publish sponsored content or use affiliate links, we will mark them clearly. We only recommend products or services that we believe are useful to our visitors.',
  },
  {
    type: 'h2',
    content: 'Personal Responsibility',
  },
  {
    type: 'p',
    content:
      'By using this site, you acknowledge that you are responsible for your own decisions. The site operator is not liable for any actions you take based on the content here.',
  },
  {
    type: 'h2',
    content: 'Changes to This Disclaimer',
  },
  {
    type: 'p',
    content:
      'We may update this Disclaimer from time to time. The latest version will always be available on this page.',
  },
  {
    type: 'h2',
    content: 'Contact',
  },
  {
    type: 'p',
    content:
      'If you have any questions about this Disclaimer, please contact us through the Contact page in the footer.',
  },
];
