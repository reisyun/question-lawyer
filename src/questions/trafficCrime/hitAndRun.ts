/**
 * 뺑소니 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const hitAndRun: QuestionList = {
  label: '뺑소니',
  items: [
    {
      question: {
        title: '다음 중 어떤 사례에 해당하는가요?',
      },
      answer: ['사고 사실을 안 경우', '사고 사실을 알지 못한 경우', '피해자인 경우'],
    },
    {
      question: {
        title: '사건 경위를 자세히 작성해 주세요',
      },
      placeholder: '1. 현장적발\n2. 경찰신고\n3. 기타',
    },
    ...commonQuestions(true),
  ],
};
