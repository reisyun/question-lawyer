import { atom } from 'recoil';
import { Subject } from '@/libs/model';

export const QUESTION_LIST = 'Question/LIST';

export const questionState = atom<Subject>({
  key: QUESTION_LIST,
  default: {
    title: 'Unknown',
    question: [],
  },
});
