import { LegalBlock } from '@/lib/legal';

type Props = {
  title: string;
  blocks: LegalBlock[];
};

export function LegalLayout({ title, blocks }: Props) {
  return (
    <article className="legal-page">
      <h1>{title}</h1>
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="wp-block-heading">
              {block.content}
            </h2>
          );
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="wp-block-heading">
              {block.content}
            </h3>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="wp-block-list">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="wp-block-paragraph">
            {block.content}
          </p>
        );
      })}
    </article>
  );
}
