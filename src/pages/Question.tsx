import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { questionFormState, UserAnswer } from '@/atom/question';
import { useParams, useHistory } from 'react-router-dom';
import { data } from '@/libs/data';
import Select from '@/components/Select';
import MainButton from '@/components/MainButton';
import TextArea from '@/components/TextArea';
import Layout from '@/components/Layout';

function Question() {
  const { subject } = useParams<{ subject: string }>();
  const history = useHistory();
  const [questionForm, setQuestionForm] = useRecoilState(questionFormState);
  const [count, setCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { title, question } = data.subject.find(s => s.title === subject)!;
  const currentSubject = title;
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
  const selectQuestion = (event: React.MouseEvent<HTMLButtonElement>) => {
    const select = event.target as HTMLDivElement;
    const selectedValue = select.innerText;

    setAnswer(selectedValue);
  };

  // Input component
  const enterQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setAnswer(value);
  };

  return (
    <Layout title={currentQuestion.q} subject={currentSubject} desc={currentQuestion.desc}>
      {currentQuestion.a ? (
        <Select onClick={selectQuestion} items={currentQuestion.a} />
      ) : (
        // <TextareaAutosize minRows={3} maxRows={6} defaultValue="Just a single line..." />
        <TextArea value={answer} onChange={enterQuestion} />
      )}
      <MainButton disabled={!answer} onClick={nextQuestion}>
        다음
      </MainButton>
    </Layout>
  );
}

export default Question;
