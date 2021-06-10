/**
 * 자동차상해 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const dummy: QuestionList = {
  label: '임시 데이터',
  items: [
    {
      question: { title: '다음 중 어느 유형에 해당하나요?' },
      answer: [
        '음주사고 발생',
        '12대 중과실 사고 (신호위반, 중앙선 침범, 속도위반, 횡단보도, 어린이 보호구역 등)',
        '단순교통사고',
      ],
    },
    {
      question: {
        title: '사고난 장소는 어떻게 되며, 사고 발생 경위를 자세히 작성해 주세요',
        desc: '교차로, 고속도로 등',
      },
    },
    {
      question: { title: '경찰수사, 검찰수사, 재판단계 중 어느 단계인가요?' },
      answer: ['경찰 수사 전', '경찰 수사 중', '검찰 수사 중', '재판 중'],
    },
    {
      question: { title: '사건 발생 장소와 수사 중인 경찰서(검찰, 법원)는 어디인가요?' },
    },
    ...commonQuestions,
  ],
};
