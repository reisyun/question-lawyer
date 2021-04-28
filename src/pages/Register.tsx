import React, { useState } from 'react';
import styled from '@emotion/styled';
import emailjs from 'emailjs-com';
import { useRecoilState } from 'recoil';
import { questionFormState } from '@/atom/question';
import { config } from '@/libs/config';
import { isEmail } from '@/libs/utils';
import { validateHint } from '@/libs/validateHint';
import { EmailIllust } from '@/assets/icons/index';
import ValidationInput from '@/components/ValidationInput';
import MainButton from '@/components/MainButton';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = config;

function Register() {
  const [questionForm, setQuestionForm] = useRecoilState(questionFormState);
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmailValue(value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // 이메일 유효성에 틀리면 invalid
    if (!isEmail(emailValue)) {
      setIsValidEmail(true);
      return;
    }
    setIsValidEmail(false);

    // 폼에 이메일 전달
    setQuestionForm(oldQuestionForm => ({
      ...oldQuestionForm,
    }));

    const qa = questionForm.question;
    const questions = qa.map((item, idx) => ({
      [`q${idx}`]: item.q,
      [`a${idx}`]: item.a,
    }));

    const template = {
      ...questionForm,
      // TODO: flat이 안되서 수동으로함..
      ...questions[0],
      ...questions[1],
      ...questions[2],
      ...questions[3],
      ...questions[4],
      ...questions[5],
      ...questions[6],
      ...questions[7],
      ...questions[8],
      ...questions[9],
      email: emailValue,
    };

    // 이메일 보내기
    await emailjs.send(EMAILJS_SERVICE_ID as string, EMAILJS_TEMPLATE_ID as string, template);

    // 모달 열기
    setActiveModal(true);
  };

  return (
    <Layout main title="수고하셨습니다" desc="이메일을 입력하시면 빠르게 연락드리겠습니다!">
      <Illust />
      <ValidationInput
        value={emailValue}
        placeholder="이메일을 입력해주세요"
        onChange={handleChange}
        // 이메일 유효성 검사 관련 속성
        invalid={isValidEmail}
        validationHint={isValidEmail ? validateHint.email : ''}
      />
      <MainButton onClick={handleSubmit}>요청하기</MainButton>
      {activeModal ? <Modal /> : null}
    </Layout>
  );
}

const Illust = styled(EmailIllust)`
  width: 100%;
  max-height: 200px;
  opacity: 0.8;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    max-height: 140px;
  }
`;

export default Register;
