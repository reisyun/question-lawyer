import { atom, useRecoilState } from 'recoil';

export type AnswerType = {
  q: string;
  a: string;
};

export const themeState = atom<string>({
  key: 'themeState',
  default: '교통범죄',
});

export const subjectState = atom<string>({
  key: 'subjectState',
  default: '음주운전',
});

export const answerFormState = atom<AnswerType[]>({
  key: 'answerState',
  default: [],
});

export function useThemeState() {
  return useRecoilState(themeState);
}

export function useSubjectState() {
  return useRecoilState(subjectState);
}

export function useAnswerFormState() {
  return useRecoilState(answerFormState);
}
