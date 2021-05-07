/**
 * 질문트리는 `Select type`, `Input type`으로 나뉘는걸로 확인
 *
 * 답변이 있고 없고에 따라 동적으로 type 변경하도록 함.
 * answer ? `Select type` : `Input type`
 */

export interface QuestionTheme {
  theme: string;
  subjects: QuestionSubject[];
}

export interface QuestionSubject {
  subject: string;
  items: QuestionItem[];
}

export interface QuestionItem {
  question: { title: string; desc?: string };
  answer?: Array<string>;
}
