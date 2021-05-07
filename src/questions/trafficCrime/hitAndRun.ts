/**
 * 뺑소니 관련 질문 모음
 */

import { QuestionSubject } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const hitAndRunQuestions: QuestionSubject = {
  subject: '뺑소니',
  items: [
    {
      question: { title: '다음 중 어떤 사례에 해당하는가요?' },
      answer: ['사고 사실을 안 경우', '사고 사실을 알지 못한 경우', '피해자인 경우'],
    },
    {
      question: {
        title: '사건 경위를 자세히 작성해 주세요.',
        desc: '음주운전인 경우 혈중알코올수치와 적발된 횟수 기재',
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
