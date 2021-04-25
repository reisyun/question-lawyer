import { atom } from 'recoil';

export interface IQuestion {
  q: string;
  a: string;
}

export const QUESTION_INPUT = 'Question/INPUT';
export const QUESTION_LIST = 'Question/LIST';

export const inputState = atom<string>({
  key: QUESTION_INPUT,
  default: '',
});

export const questionState = atom<IQuestion[]>({
  key: QUESTION_LIST,
  default: [],
});
