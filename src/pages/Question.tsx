import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { questionFormState, UserAnswer } from '@/atom/question';
import { useParams, useHistory } from 'react-router-dom';
import { data } from '@/libs/data';
import Content from '@/components/Content';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import ValidationInput from '@/components/ValidationInput';

function Question() {
  const { subject } = useParams<{ subject: string }>();
  const history = useHistory();
  const [questionForm, setQuestionForm] = useRecoilState(questionFormState);
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { question } = data.subject.find(s => s.title === subject)!;
  const currentQuestion = question[count];

  /**
   * 다음 질문으로 넘어갈 때 값 초기화
   */
  useEffect(() => {
    setAnswer('');
  }, [count, questionForm]);

  const addAnswer = (answer: UserAnswer) => {
    setQuestionForm(oldForm => ({
      ...oldForm,
      question: [...oldForm.question, answer],
    }));
  };

  const nextQuestion = () => {
    // 질문이 모두 끝나면 register page로 이동
    if (question.length - 1 <= count) {
      history.push('/register');
    }

    // 다음 버튼을 누르면 count + 1
    setCount(prevCount => prevCount + 1);

    // 질답 추가
    addAnswer({
      q: currentQuestion.q,
      a: answer,
    });
  };

  // Select component
  const selectQuestion = (event: React.MouseEvent<HTMLDivElement>) => {
    const select = event.target as HTMLDivElement;
    const selectedValue = select.innerText;

    setAnswer(selectedValue);
  };

  // Input component
  const enterQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setAnswer(value);
  };

  return (
    <>
      <Content title={currentQuestion.q}>
        {currentQuestion.a ? (
          <Select onClick={selectQuestion} items={currentQuestion.a} />
        ) : (
          <ValidationInput value={answer} placeholder="입력해주세요" onChange={enterQuestion} />
        )}
      </Content>
      <MainButton onClick={nextQuestion}>다음</MainButton>
    </>
  );
}

export default Question;
