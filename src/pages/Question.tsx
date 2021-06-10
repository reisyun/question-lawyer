import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useGetQuestion } from '@/atoms/questionState';
import { useAnswerState, AnswerType } from '@/atoms/answerState';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';

function Question() {
  const history = useHistory();
  const [count, setCount] = useState<number>(0);
  const question = useGetQuestion();
  const [answer, setAnswer] = useState('');
  const [answerForm, setAnswerForm] = useAnswerState();

  useEffect(() => {
    setAnswer('');
  }, [count]);

  if (!question) return <h1>비정상적인 접근입니다.</h1>;

  const currentQuestion = question.items[count];

  const nextQuestion = (e: any, skip?: boolean) => {
    // 다음 버튼을 누르면 count + 1
    // 이로써 다음 질문으로 넘어가게 됨
    setCount(prevCount => prevCount + 1);

    const newAnswer: AnswerType = {
      q: currentQuestion.question.title,
      a: skip ? 'skip' : answer,
    };

    // 답변 양식 누적
    setAnswerForm([...answerForm, newAnswer]);

    // 질문이 모두 끝나면 register page로 이동
    if (question.items.length - 1 <= count) {
      history.push('/upload');
    }
  };

  // Select component
  const selectAnswer = (event: React.MouseEvent | React.ChangeEvent, inputVal?: string) => {
    const targetEl = event.target as HTMLElement;
    const value = inputVal || targetEl.innerText;

    setAnswer(value);
  };

  // Input component
  const enterAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setAnswer(value);
  };

  return (
    <Layout
      tagName={question.label}
      title={currentQuestion.question.title}
      desc={currentQuestion.question.desc}
    >
      {currentQuestion.answer ? (
        <Select items={currentQuestion.answer} onClick={selectAnswer} onChange={enterAnswer} />
      ) : (
        <TextArea placeholder={currentQuestion.placeholder} value={answer} onChange={enterAnswer} />
      )}
      {/* 답변이 없을 경우 버튼 비활성화 */}
      <Navigation>
        <NextButton disabled={!answer.length} onClick={() => nextQuestion(false)}>
          다음
        </NextButton>
        <Button color="primary" onClick={() => nextQuestion(true)}>
          건너뛰기
        </Button>
      </Navigation>
    </Layout>
  );
}

const Navigation = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextButton = styled(MainButton)`
  margin-bottom: 16px;
`;

export default Question;
