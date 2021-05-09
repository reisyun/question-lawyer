/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { questionList } from '@/questions';
import { QuestionTheme, QuestionSubject } from '@/questions/common/model';
import { useThemeState, useSubjectState } from '@/atoms/questionState';

export function useGetQuestion() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();

  const originalData: QuestionTheme[] = questionList;
  const currentTheme: QuestionTheme = questionList.find(item => item.theme === theme)!;
  const currentSubject: QuestionSubject = currentTheme.subjects.find(
    item => item.subject === subject,
  )!;

  return { originalData, currentTheme, currentSubject };
}
