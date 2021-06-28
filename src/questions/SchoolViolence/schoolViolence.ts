/**
 * 학교폭력 관련 질문 모음
 */

import { QuestionList } from '@/questions/_common/model';

export const schoolViolence: QuestionList = {
  label: '학교폭력',
  items: [
    {
      question: {
        title: '학교폭력에 연루된 학생들은 각각 몇 살인가요?',
      },
      placeholder: '1. 가해학생 나이\n2. 피해학생 나이',
    },
    {
      question: {
        title: '문제가 된 사건에 대하여 자세히 설명해주세요.',
      },
    },
    {
      question: {
        title: '학교폭력위원회(일명 ‘학폭위’)가 열렸나요?',
      },
      answer: ['네', '아니오', '#input'],
    },
    {
      multi: true,
      question: {
        title: '학교폭력과 관련 증거를 확보하신 것이 있나요?',
        desc: '여러개 선택 가능',
      },
      answer: [
        '영상이나 사진',
        'CCTV 영상',
        'SNS상 화면 캡쳐',
        '폭행당한 사진',
        '(상해)진단서',
        '증인진술서',
        '#input',
      ],
    },
    {
      question: {
        title:
          '가해학생은 학교폭력대책자치위원회(일명 ‘학폭위’)로부터 징계처분을 받았나요? 받았다면 어떤 처분을 받았나요?',
      },
      placeholder: '1. 징계처분은?\n2. 어떤 처분?\n3. 처분받기 전?',
    },
    {
      question: {
        title: '가해학생은 학폭위의 징계처분에 대하여 재심을 청구하였나요?',
      },
      answer: ['네', '아니오', '#input'],
    },
    {
      question: {
        title:
          '가해학생은 학폭위의 징계처분에 대하여 집행정지신청, 행정소송 등을 제기한 적이 있나요?',
      },
      answer: ['네', '아니오', '#input'],
    },
    {
      question: {
        title: '피해학생은 상해진단서를 받은 적이 있나요? 전치 몇 주의 진단을 받았나요?',
      },
      placeholder: '1. 상해 진단서를 발급받았나요?\n2. 전치 몇 주인가요?',
    },
    {
      question: {
        title: '학생들 주소지와 사건발생 장소는 각각 어디인가요?',
      },
      placeholder: '1. 학생들 주소지?\n2. 사건 발생 장소는?',
    },
    {
      question: { title: '궁금한 내용과 추가로 설명하고 싶은 내용을 기재해주세요.' },
    },
  ],
};
