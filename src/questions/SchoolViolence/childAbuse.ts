/**
 * 아동학대 관련 질문 모음
 */

import { QuestionList } from '@/questions/_common/model';
import { commonQuestions } from '@/questions/_common/commonQuestions';

export const childAbuse: QuestionList = {
  label: '아동학대',
  items: [
    {
      question: {
        title: '아동학대 신고나 경찰에 고소가 된 사실이 있나요?',
      },
      answer: ['피해자로 경찰에 신고함', '가해자로 경찰신고 당함', '신고 전'],
    },
    {
      question: {
        title: '신고 사실을 알게 된 경위를 자세히 설명해주세요.',
      },
      placeholder: '사건 발생 내용을 작성해주세요',
    },
    {
      question: {
        title: '의뢰인이 억울한 점은 무엇인가요?',
      },
    },
    {
      question: {
        title: '의뢰인 본인의 주장을 입증할 증거가 있나요?',
        desc: '영상, cctv, 카톡내용, 녹음파일, 문자내역 등',
      },
    },
    ...commonQuestions(),
  ],
};
