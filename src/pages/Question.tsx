/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useCount } from '@/hooks/useCount';
import { useGetQuestion } from '@/atoms/questionState';
import { useAnswerState, AnswerType } from '@/atoms/answerState';
import NextButton from '@/components/NextButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';

import MultiSelect from '@/components/MultiSelect';

function Question() {
  const history = useHistory();
  const questions = useGetQuestion();
  const [count, increment] = useCount();

  const [, setAnswerForm] = useAnswerState();
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedAnswer, setSelectAnswer] = useState<string[]>([]);

  /**
   * 질문 바뀔 때마다 답변 값 초기화
   */
  useEffect(() => {
    setInputValue('');
    setSelectAnswer([]);
  }, [count]);

  if (!questions) return <NotFound />;

  const currentQuestion = questions.items[count];
  const questionTotal = questions.items.length;

  /**
   * currentQuestion.answer는 선택 목록임.
   * answer가 존재한다면  *답변 선택 (MultiSelect)
   * answer가 존재하지 않는다면 *답변 입력 (TextArea)
   */
  const isSelectList = currentQuestion.answer;

  /**
   * 다음 질문으로
   */
  const toNextStep = () => {
    increment();

    // 질문이 모두 끝나면 upload page로 이동
    if (questionTotal - 1 <= count) {
      history.push('/upload');
    }
  };

  /**
   * 다음 질문으로 이동할 때 호출
   */
  const handleNextClick = (option?: { skip?: boolean }) => {
    /**
     * 중요! 선택 목록에서 답변 입력이 필요한 경우가 있어서,
     * answer 목록에 "#input"가 있다면, 선택과 입력이 동시에 가능
     */
    const newAnswer = isSelectList
      ? // 리스트를 &으로 이어주었는데, useWriteForm에서 다시 목록으로 치환함
        // TODO: 이건 리팩토링 필요한듯
        selectedAnswer.join('&').replace(/#input/g, inputValue)
      : inputValue;

    const newAnswerForm: AnswerType = {
      q: currentQuestion.question.title,
      a: option?.skip ? 'skip' : newAnswer,
    };
    setAnswerForm(prevAnswerForm => [...prevAnswerForm, newAnswerForm]);

    // 다음 질문으로
    toNextStep();
  };

  return (
    <Layout
      tagName={questions.label}
      title={currentQuestion.question.title}
      desc={currentQuestion.question.desc}
    >
      {isSelectList ? (
        <MultiSelect
          items={isSelectList}
          selectedItems={selectedAnswer}
          onSelect={setSelectAnswer}
          onChange={setInputValue}
          singleSelect
        />
      ) : (
        <TextArea
          value={inputValue}
          placeholder={currentQuestion.placeholder}
          onChange={setInputValue}
        />
      )}
      {/* 답변이 없을 경우 버튼 비활성화 */}
      <Navigation>
        <StyledNextButton
          // inputValue가 있거나, #input keyword 가 아닌 답변이 선택되면 다음 버튼 활성화
          disabled={!(inputValue || selectedAnswer.find(s => s !== '#input'))}
          onClick={() => handleNextClick()}
        >
          다음
        </StyledNextButton>
        <Button color="primary" onClick={() => handleNextClick({ skip: true })}>
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

const StyledNextButton = styled(NextButton)`
  margin-bottom: 16px;
`;

export default Question;
