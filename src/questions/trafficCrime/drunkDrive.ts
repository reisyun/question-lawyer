/**
 * 음주운전 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const drunkDrive: QuestionList = {
  label: '음주운전',
  items: [
    {
      question: { title: '다음 중 어떤 사례에 해당하는가요?' },
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
    {
      question: { title: '경찰수사, 검찰수사, 재판단계 중 어느 단계인가요?' },
      answer: ['경찰 수사 전', '경찰 수사 중', '검찰 수사 중', '재판 중'],
    },
    {
      question: {
        title: '사건 발생 장소와 수사 중인 경찰서(검찰, 법원)는 어디인가요?',
      },
      placeholder: '1. 사건발생장소는?\n2. 수사중인 곳은?(예: OO경찰서, OO검찰청)',
    },
    ...commonQuestions,
  ],
};
