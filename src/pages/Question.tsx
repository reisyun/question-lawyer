/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { questionData } from '@/questions';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';

function Question() {
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');

  const THEME = 'trafficCrime';
  const SUBJECT = '자동차상해';
  const questions = questionData[THEME].subjects.find(({ subject }) => subject === SUBJECT);
  const currentQuestion = questions!.items[count];

  /**
   * 다음 질문으로 넘어갈 때 값 초기화
   */
  useEffect(() => {
    setAnswer('');
  }, [count]);

  // const addAnswer = (answer: UserAnswer) => {
  //   setQuestionForm(oldForm => ({
  //     ...oldForm,
  //     question: [...oldForm.question, answer],
  //   }));
  // };

  const nextQuestion = () => {
    // 다음 버튼을 누르면 count + 1
    setCount(prevCount => prevCount + 1);
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
      tagName={SUBJECT}
      title={currentQuestion.question.title}
      desc={currentQuestion.question.desc}
    >
      {currentQuestion.answer ? (
        <Select onClick={selectAnswer} items={currentQuestion.answer} />
      ) : (
        // <TextareaAutosize minRows={3} maxRows={6} defaultValue="Just a single line..." />
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
