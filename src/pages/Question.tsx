import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { data } from '@/libs/data';
import NextButton from '@/components/NextButton';
import QnATemplate from '@/components/QnATemplate';

function Question() {
  const history = useHistory();
  const [count, setCount] = useState(0);

  const { question } = data.subject[0];
  const item = question[count];

  const handleClick = () => {
    // count는 0부터 시작해서 question.length - 1로 맞춤
    // 만약 폼을 모두 지나쳤으면, register 페이지로 이동
    if (question.length - 1 <= count) {
      history.push('/register');
    }
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <QnATemplate q={item.q} a={item.a} />
      <NextButton onClick={handleClick} />
    </>
  );
}

export default Question;
