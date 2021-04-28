import { atom } from 'recoil';

export type UserAnswer = {
  q: string;
  a: string;
};

export interface IQuestionForm {
  theme: string;
  subject: string;
  question: Array<UserAnswer>;
  email: string;
}

const QUESTION_FORM = 'Question/FORM';

export const questionFormState = atom<IQuestionForm>({
  key: QUESTION_FORM,
  default: {
    theme: 'Unkown',
    subject: 'Unkown',
    question: [],
    email: '',
  },
});
