import React, { useState } from 'react';
import styled from '@emotion/styled';
import { isEmail } from '@/libs/utils';
import { validateHint } from '@/libs/validateHint';
import { useAnswerFormState } from '@/atoms/questionState';
import { useWriteForm } from '@/hooks/useWriteForm';
import Image from '@/components/common/Image';
import ValidationInput from '@/components/ValidationInput';
import MainButton from '@/components/MainButton';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

function Register() {
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [, setAnswerForm] = useAnswerFormState();
  const { template, sendEmail } = useWriteForm();

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

    // 이메일을 보냄
    sendEmail({ ...template, email: emailValue });

    // 이메일을 성공적으로 보냈다는 팝업 활성화
    setActiveModal(true);

    // 답변 초기화
    setAnswerForm([]);
  };

  return (
    <Layout title="수고하셨습니다" desc="이메일을 입력하시면 빠르게 연락드리겠습니다!" bigTitle>
      <Illust src="http://antiwhitepig.cafe24.com/wp-content/uploads/2021/04/q-mail.png" />
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

const Illust = styled(Image)`
  width: 80%;
  height: 200px;
  opacity: 0.8;

  margin: 32px auto 48px;

  @media (max-width: 576px) {
    max-height: 160px;
  }
`;

export default Register;
