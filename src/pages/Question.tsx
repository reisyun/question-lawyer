/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useCount } from '@/hooks/useCount';
import { useGetQuestion } from '@/atoms/questionState';
import { useAnswerState, AnswerType } from '@/atoms/answerState';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';

function Question() {
  const history = useHistory();
  const questions = useGetQuestion();
  const [count, increment] = useCount();
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [answerForm, setAnswerForm] = useAnswerState();

  /**
   * 질문 바뀔 때마다 답변 값 초기화
   */
  useEffect(() => {
    setInputValue('');
    setSelectedAnswer([]);
  }, [count]);

  if (!questions) return <NotFound />;

  // 질문 관련
  const currentQuestion = questions.items[count];
  const questionTotal = questions.items.length;

  /**
   * 다음 질문으로 이동할 때 호출
   */
  const onNextQuestion = ({ skip }: { skip?: boolean }) => {
    // #input keyword를 찾은 후 값 치환
    // ['#input', '진술서'] -> '#input&진술서' -> '인풋 값&진술서'
    const newAnswer = currentQuestion.answer
      ? selectedAnswer.join('&').replace(/#input/g, inputValue)
      : inputValue;

    const newAnswerForm: AnswerType = {
      q: currentQuestion.question.title,
      a: skip ? 'skip' : newAnswer,
    };
    setAnswerForm(prevAnswerForm => [...prevAnswerForm, newAnswerForm]);

    // 다음 질문으로
    increment();

    // 질문이 모두 끝나면 upload page로 이동
    if (questionTotal - 1 <= count) {
      history.push('/upload');
    }
  };

  /**
   * 단일 또는 다중 선택 에 따라 답변을 상태에 담음
   *
   * @param currentAnswer 현재 선택한 답변
   */
  const selectAnswer = (currentAnswer: string) => {
    // 다중 선택이 아닐 경우
    if (!currentQuestion.multi) {
      setSelectedAnswer([currentAnswer]);
      return;
    }

    // 답변이 이미 존재할 경우 True
    const existAnswer = selectedAnswer.find(prevAnswer => prevAnswer === currentAnswer);

    // 이미 존재하면 선택한 답변에서 제거
    if (existAnswer) {
      setSelectedAnswer(selectedAnswer.filter(prevAnswer => prevAnswer !== currentAnswer));
    }
    // 존재하지 않으면 이전에 선택한 답변과 같이 추가
    else {
      setSelectedAnswer(prevAnswer => [...prevAnswer, currentAnswer]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Layout
      tagName={questions.label}
      title={currentQuestion.question.title}
      desc={currentQuestion.question.desc}
    >
      {currentQuestion.answer ? (
        <Select
          value={inputValue}
          answers={currentQuestion.answer}
          selected={selectedAnswer}
          selectAnswer={selectAnswer}
          onChange={handleChange}
        />
      ) : (
        <TextArea
          value={inputValue}
          placeholder={currentQuestion.placeholder}
          onChange={handleChange}
        />
      )}
      {/* 답변이 없을 경우 버튼 비활성화 */}
      <Navigation>
        <NextButton
          // inputValue가 있거나, #input keyword 가 아닌 답변이 선택되면 다음 버튼 활성화
          disabled={!(inputValue || selectedAnswer.find(s => s !== '#input'))}
          onClick={() => onNextQuestion({ skip: false })}
        >
          다음
        </NextButton>
        <Button color="primary" onClick={() => onNextQuestion({ skip: true })}>
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
