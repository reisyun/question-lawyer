import { atom, useRecoilState } from 'recoil';

export type AnswerType = { q: string; a: string };

export const answerState = atom<AnswerType[]>({
  key: 'answerState',
  default: [],
});

export function useAnswerState() {
  return useRecoilState(answerState);
}
