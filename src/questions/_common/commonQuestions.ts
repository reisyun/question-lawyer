/**
 * 공통적인 질문 모음
 */

import { QuestionItem } from '@/questions/_common/model';

export const commonQuestions = (where?: boolean): QuestionItem[] => {
  const whereQuestion = {
    question: {
      title: `${where ? '사건 발생 장소와 ' : ''}수사 중인 경찰서(검찰, 법원)는 어디인가요?`,
    },
    placeholder: `${where ? '1. 사건발생장소는?\n2. ' : ''}수사중인 곳은?(예: OO경찰서, OO검찰청)`,
  };

  return [
    {
      question: {
        title: '경찰수사, 검찰수사, 재판단계 중 어느 단계인가요?',
      },
      answer: ['경찰 수사 전', '경찰 수사 중', '검찰 수사 중', '재판 중'],
    },
    whereQuestion,
    {
      question: { title: '전과가 있나요?' },
      placeholder: '전과는?',
    },
    {
      question: { title: '궁금한 내용과 추가로 설명하고 싶은 내용을 기재해주세요.' },
    },
  ];
};
