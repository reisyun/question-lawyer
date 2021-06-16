/**
 * 자동차상해 관련 질문 모음
 */

import { QuestionList } from '@/questions/common/model';
import { commonQuestions } from '@/questions/common/commonQuestions';

export const fraud: QuestionList = {
  label: '사기',
  items: [
    {
      question: {
        title: '구체적으로 무엇에 관한 사기인가요?',
      },
      answer: [
        '코인, 가상화폐사기',
        '금융ㆍ투자사기',
        '유사수신ㆍ다단계',
        '보이스피싱',
        '부동산사기',
        '#input',
      ],
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
      placeholder: '수사중인 곳은?(예: OO경찰서, OO검찰청)',
    },
    ...commonQuestions,
  ],
};
