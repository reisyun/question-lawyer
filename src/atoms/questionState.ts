import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { QuestionList } from '@/questions/common/model';
import { questions } from '@/questions';

export type ThemeType = {
  key: keyof typeof questions;
  name: string;
};

export type SubjectType = string;

export type QuestionType = QuestionList;

export const themeState = atom<ThemeType>({
  key: 'themeState',
  default: {
    key: 'trafficCrime',
    name: '교통범죄',
  },
});

export const subjectState = atom<SubjectType>({
  key: 'subjectState',
  default: 'drinkDrive',
});

export const qeustionSelector = selector<QuestionType | null | undefined>({
  key: 'qeustionState',
  get: ({ get }) => {
    const theme = get(themeState);
    const subject = get(subjectState);

    if (!theme || !subject) return null;

    // theme과 subject를 선택 했을 경우에만 질문 내보냄
    return questions[theme.key].subjects.find(({ label }) => label === subject);
  },
});

export function useThemeState() {
  return useRecoilState(themeState);
}

export function useSubjectState() {
  return useRecoilState(subjectState);
}

export function useGetQuestion() {
  return useRecoilValue(qeustionSelector);
}
