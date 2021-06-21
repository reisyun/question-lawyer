/**
 * 폭행 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

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
    {
      question: {
        title: '경찰수사, 검찰수사, 재판단계 중 어느 단계인가요?',
      },
      answer: ['경찰 수사 전', '경찰 수사 중', '검찰 수사 중', '재판 중'],
    },
    {
      question: {
        title: '수사 중인 경찰서(검찰, 법원)는 어디인가요?',
      },
      placeholder: '1. 사건 발생장소?\n2. 수사중인 곳은?(예: OO경찰서, OO검찰청)',
    },
    ...commonQuestions,
  ],
};
