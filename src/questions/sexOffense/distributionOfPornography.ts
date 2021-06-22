/**
 * 음란물 유포 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const distributionOfPornography: QuestionList = {
  label: '음란물 유포',
  items: [
    {
      question: {
        title: '음란물 유포 단속된 경위는 어떻게 되나요?',
      },
    },
    {
      question: {
        title:
          '음란물을 유포한 사실이 없다면 수사기관이 의뢰인에게 혐의가 있다고 보는 이유가 있나요?',
      },
    },
    {
      question: {
        title: '의뢰인이 음란물을 유포한 사실이 없다는 주장을 할 때 입증할만한 증거자료가 있나요?',
      },
      placeholder: '영상, 사진, 카톡내용, 녹음파일, 문자내역 등',
    },
    {
      question: {
        title:
          '만약 의뢰인이 실제로 음란물을 유포한 사실이 있다면, 그 시기는 언제이고 어느 정도의 양의 음란물을 어디서 유포하였나요?',
      },
    },
    {
      question: {
        title: '음란물 유포로 얻은 수익은 총 얼마인가요?',
      },
    },
    {
      question: {
        title: '음란물에 아동 또는 청소년이 등장하나요?',
        desc: '성인이 교복을 입은 경우는 제외',
      },
      answer: ['네', '아니오', '#input'],
    },
    ...commonQuestions(),
  ],
};
