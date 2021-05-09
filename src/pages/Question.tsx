import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

  const nextQuestion = () => {
    // 질문이 모두 끝나면 register page로 이동
    if (currentSubject.items.length - 1 <= count) {
      history.push('/register');
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
        a: answer,
      },
    ]);
  };

  // Select component
  const selectAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        <TextArea value={answer} onChange={enterAnswer} />
      )}
      {/* 답변이 없을 경우 버튼 비활성화 */}
      <MainButton disabled={!answer} onClick={nextQuestion}>
        다음
      </MainButton>
    </Layout>
  );
}

export default Question;
