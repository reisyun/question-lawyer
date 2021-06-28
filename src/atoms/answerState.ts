import { atom, useRecoilState } from 'recoil';

export type AnswerType = {
  q: string;
  a: string | 'skip';
};
export type FileType = File;

export const answerState = atom<AnswerType[]>({
  key: 'answerState',
  default: [],
});

export const fileState = atom<FileType[]>({
  key: 'fileState',
  default: [],
});

export function useAnswerState() {
  return useRecoilState(answerState);
}

export function useFileState() {
  return useRecoilState(fileState);
}
