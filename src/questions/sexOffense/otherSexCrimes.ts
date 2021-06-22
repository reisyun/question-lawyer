/**
 * 기타 성범죄 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const otherSexCrimes: QuestionList = {
  label: '기타 성범죄',
  items: [
    {
      question: {
        title: '상대방이 주장하는 사실관계는 어떠한가요?',
      },
    },
    {
      question: {
        title: '의뢰인이 억울한 점은 무엇인가요?',
      },
    },
    {
      question: {
        title: '의뢰인 본인의 주장을 입증할 증거가 있나요?',
      },
      placeholder: '영상, 사진, 카톡내용, 녹음파일, 문자내역 등',
    },
    {
      question: {
        title: '경찰 또는 검찰에 고소하였나요?',
      },
      answer: ['네', '아니오', '#input'],
    },
    ...commonQuestions(),
  ],
};
