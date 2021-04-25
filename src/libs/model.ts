export interface Theme {
  theme: string;
  subject: Subject[];
}

export interface Subject {
  title: string;
  question: Question[];
}

export interface Question {
  q: string;
  a?: string[];
}
