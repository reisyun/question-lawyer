/**
 * 폭행 관련 질문 모음
 */

import { QuestionList } from '@/questions/_common/model';
import { commonQuestions } from '@/questions/_common/commonQuestions';

export const assault: QuestionList = {
  label: '폭행ㆍ상해',
  items: [
    {
      question: {
        title: '피해자이신가요? 가해자이신가요?',
      },
      answer: ['피해자', '가해자'],
    },
    {
      question: {
        title: '폭행이나 상해의 상황은 언제, 어디서 어떻게 벌어진 것인가요?',
      },
      placeholder: '사건 발생 내용을 작성해주세요',
    },
    {
      question: {
        title: '상해진단서를 발급받으셨나요?',
      },
    },
    {
      question: {
        title: '의뢰인이 가장 억울한 점은 무엇인가요?',
      },
    },
    {
      question: {
        title: '의뢰인의 주장을 입증할 증거가 있나요?',
        desc: '계약서, 카톡내용, 녹음파일, 문자내역 등',
      },
    },
    ...commonQuestions(true),
  ],
};
