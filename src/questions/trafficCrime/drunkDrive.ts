/**
 * 음주운전 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const drunkDrive: QuestionList = {
  label: '음주운전',
  items: [
    {
      question: {
        title: '다음 중 어떤 사례에 해당하는가요?',
      },
      answer: ['음주운전', '음주측정거부', '음주삼진아웃', '기타(무면허운전 등)'],
    },
    {
      question: {
        title: '적발된 경위를 자세히 작성해주세요.',
        desc: '음주운전인 경우 혈중알코올수치와 적발된 횟수 기재',
      },
      placeholder: '1. 단속경위는?\n2. 수치는?\n3. 적발 횟수는?',
    },
    {
      question: {
        title: '음주단속시 문제가 될만한 상황이 있었나요?',
        desc: '측정오류, 고지의무위반 등',
      },
    },
    ...commonQuestions(true),
  ],
};
