/**
 * 자동차상해 관련 질문 모음
 */

import { QuestionList } from '@/questions/_common/model';
import { commonQuestions } from '@/questions/_common/commonQuestions';

export const carInjury: QuestionList = {
  label: '자동차상해',
  items: [
    {
      question: {
        title: '다음 중 어느 유형에 해당하나요?',
      },
      answer: [
        '음주사고 발생',
        '12대 중과실 사고(신호위반, 중앙선 침범, 속도위반, 횡단보도, 어린이 보호구역 등)',
        '단순교통사고',
        '#input', // 인풋 삽입
      ],
    },
    {
      question: {
        title: '사고난 장소는 어떻게 되며, 사고 발생 경위를 자세히 작성해 주세요',
        desc: '교차로, 고속도로 등',
      },
      placeholder: '1. 사고난 장소는?\n2. 사고발생 경위는?',
    },
    ...commonQuestions(),
  ],
};
