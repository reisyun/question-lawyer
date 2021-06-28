/**
 * 자동차상해 관련 질문 모음
 */

import { QuestionList } from '@/questions/_common/model';
import { commonQuestions } from '@/questions/_common/commonQuestions';

export const embezzlement: QuestionList = {
  label: '횡령ㆍ배임',
  items: [
    {
      question: {
        title: '의뢰인은 회사 등에서 어떤 지위에서 어떤 업무를 맡고 있나요?',
      },
      placeholder: '1. 어떤 지위(대표이사, 이사, 감사, 직원 등)\n2. 어떤 업무(회계, 영업 등)',
    },
    {
      question: {
        title: '횡령이나 배임으로 입은 손해액이\n 어느 정도인가요?',
        desc: '금액이나 물품 등 실제 피해받은 부분을 작성',
      },
    },
    {
      question: {
        title: '사건 발생 경위를 자세히 적어주세요.',
      },
      placeholder: '1. 피해자와 가해자 둘 중 어느 쪽인가요?\n2. 사건 발생 내용을 작성해주세요',
    },
    {
      question: {
        title: '의뢰인이 가장 억울한 점은 무엇인가요?',
      },
    },
    {
      question: {
        title: '의뢰인의 주장을 입증할 증거가 있나요?',
      },
      placeholder: '계약서, 카톡내용, 녹음파일, 문자내역 등',
    },
    ...commonQuestions(),
  ],
};
