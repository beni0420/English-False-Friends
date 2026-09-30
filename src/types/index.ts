export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface FalseFriend {
  id: string;
  term: string;
  falseFriend: string;
  technicalMeaning: string;
  codeExample: string;
}

export type LanguageCode = "es" | "fr" | "it";
