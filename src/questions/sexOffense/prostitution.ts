/**
 * 성매매 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const prostitution: QuestionList = {
  label: '성매매',
  items: [
    {
      question: {
        title: '성매매 단속된 경우를 작성해 주세요.',
        desc: '현장적발, 사후적발 등',
      },
    },
    {
      question: {
        title:
          '성매매 사실이 없다면 수사기관이 의뢰인에게 성매매 혐의가 있다고 보는 이유가 있나요?',
      },
    },
    {
      question: {
        title: '의뢰인이 성매매한 사실이 없다는 주장을 할 때 입증할만한 증거자료가 있나요?',
      },
      placeholder: '영상, 사진, 카톡내용, 녹음파일, 문자내역 등',
    },
    {
      question: {
        title:
          '만약, 의뢰인이 실제로 성매매한 사실이 있다면, 그 시기는 언제이고 장소가 어디인가요?',
      },
    },
    ...commonQuestions(),
  ],
};
