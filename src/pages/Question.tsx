import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useAnswerFormState } from '@/atoms/questionState';
import { useGetQuestion } from '@/hooks/useGetQuestion';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';

function Question() {
  const history = useHistory();
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');

  const { currentSubject } = useGetQuestion();
  const [, setAnswerForm] = useAnswerFormState();

  const currentQuestion = currentSubject.items[count];

  /**
   * 다음 질문으로 넘어갈 때 값 초기화
   */
  useEffect(() => {
    setAnswer('');
  }, [count]);

  const nextQuestion = (e: any, skip?: boolean) => {
    // 질문이 모두 끝나면 register page로 이동
    if (currentSubject.items.length - 1 <= count) {
      history.push('/upload');
      return;
    }

    // 다음 버튼을 누르면 count + 1
    // 이로써 다음 질문으로 넘어가게 됨
    setCount(prevCount => prevCount + 1);

    // AnswerFormState에 답변 양식 추가
    setAnswerForm(prev => [
      ...prev,
      {
        q: currentQuestion.question.title,
        a: skip ? 'skip' : answer,
      },
    ]);
  };

  // Select component
  const selectAnswer = (event: React.MouseEvent<HTMLElement>) => {
    const select = event.target as HTMLDivElement;
    const selectedValue = select.innerText;

    setAnswer(selectedValue);
  };

  // Input component
  const enterAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setAnswer(value);
  };

  return (
    <Layout
      tagName={currentSubject.subject}
      title={currentQuestion.question.title}
      desc={currentQuestion.question.desc}
    >
      {currentQuestion.answer ? (
        <Select onClick={selectAnswer} items={currentQuestion.answer} />
      ) : (
        <TextArea
          value={answer}
          placeholder={currentQuestion.question.placeholder}
          onChange={enterAnswer}
        />
      )}
      {/* 답변이 없을 경우 버튼 비활성화 */}
      <Navigation>
        <NextButton disabled={!answer} onClick={nextQuestion}>
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
