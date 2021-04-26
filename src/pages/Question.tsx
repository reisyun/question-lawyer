import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { data } from '@/libs/data';
import Content from '@/components/Content';
import MainButton from '@/components/MainButton';
import Select from '@/components/Select';
import ValidationInput from '@/components/ValidationInput';

function Question() {
  const { subject } = useParams<{ subject: string }>();
  const history = useHistory();
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { question } = data.subject.find(s => s.title === subject)!;
  const current = question[count];

  const nextQuestion = () => {
    // 질문이 모두 끝나면 register page로 이동
    if (question.length - 1 <= count) {
      history.push('/register');
    }

    /**
     * 다음 버튼을 누르면
     *
     * 다음 질문으로 넘어가기 위해서 count + 1
     * 다음 질문을 가기 전 인풋 값을 비움
     */
    setCount(prevCount => prevCount + 1);
    setInputValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Content title={current.q}>
        {current.a ? (
          <Select items={current.a} />
        ) : (
          <ValidationInput value={inputValue} placeholder="입력해주세요" onChange={handleChange} />
        )}
      </Content>
      <MainButton onClick={nextQuestion}>다음</MainButton>
    </>
  );
}

export default Question;
