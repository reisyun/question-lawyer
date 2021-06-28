import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { QuestionList } from '@/questions/_common/model';
import { questions as originQuestions } from '@/questions';

export type ThemeType = {
  key: keyof typeof originQuestions;
  name: string;
};

export const themeState = atom<ThemeType>({
  key: 'themeState',
  default: {
    key: 'trafficCrime',
    name: '교통범죄',
  },
});

export const subjectState = atom<string>({
  key: 'subjectState',
  default: 'drinkDrive',
});

export const qeustionSelector = selector<QuestionList | null>({
  key: 'qeustionState',
  get: ({ get }) => {
    const theme: ThemeType = get(themeState);
    const subject: string = get(subjectState);

    // theme과 subject를 선택 안했을 경우
    if (!theme || !subject) return null;

    const questions = originQuestions[theme.key].subjects.find(
      ({ label }) => label === subject,
    ) as QuestionList;

    return questions;
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
