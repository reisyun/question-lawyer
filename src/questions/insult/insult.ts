/**
 * 폭행 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const insult: QuestionList = {
  label: '모욕ㆍ명예훼손',
  items: [
    {
      question: {
        title: '피해자이신가요? 가해자이신가요?',
      },
      answer: ['피해자', '가해자'],
    },
    {
      question: {
        title: '누가 언제 어디서 무슨 말을 하였는지 자세히 적어주세요.',
      },
      placeholder: '1. 누가?\n2. 언제?\n3. 무슨말을 하였나요? ',
    },
    {
      question: {
        title: '의뢰인이 가장 억울한 점은 무엇인가요?',
      },
    },
    {
      question: {
        title: '의뢰인의 주장을 입증할 증거가 있나요?',
        desc: 'PC화면 캡쳐, 녹음파일, 카톡내역, 문자내역 등',
      },
    },
    ...commonQuestions(),
  ],
};
