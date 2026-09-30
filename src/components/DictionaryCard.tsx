import type { FalseFriend } from "../types";

interface DictionaryCardProps {
  item: FalseFriend;
  labels: {
    falseFriendLabel: string;
    technicalMeaningLabel: string;
  };
}

export function DictionaryCard({ item, labels }: DictionaryCardProps) {
  return (
    <article className="card">
      <h2 className="term-title">{item.term}</h2>
      <p className="card-text">
        <span className="label">{labels.falseFriendLabel}</span>{" "}
        <span className="false-friend-text">{item.falseFriend}</span>
      </p>
      <p className="card-text">
        <span className="label">{labels.technicalMeaningLabel}</span>{" "}
        {item.technicalMeaning}
      </p>
      <pre className="code-block">
        <code>{item.codeExample}</code>
      </pre>
    </article>
  );
}
