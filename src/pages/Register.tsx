import React, { useState } from 'react';
import styled from '@emotion/styled';
import emailjs from 'emailjs-com';
import { useRecoilState } from 'recoil';
import { questionFormState } from '@/atom/question';
import { config } from '@/libs/config';
import { isEmail } from '@/libs/utils';
import { validateHint } from '@/libs/validateHint';
import Content from '@/components/Content';
import Text from '@/components/common/Text';
import ValidationInput from '@/components/ValidationInput';
import MainButton from '@/components/MainButton';

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = config;

function Register() {
  const [questionForm, setQuestionForm] = useRecoilState(questionFormState);
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmailValue(value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // 이메일 유효성에 맞으면 valid
    if (!isEmail(emailValue)) {
      setIsValidEmail(true);
      return;
    }

    setQuestionForm(oldQuestionForm => ({
      ...oldQuestionForm,
      email: emailValue,
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
    };

    // 이메일 보내기
    const email = await emailjs.send(
      EMAILJS_SERVICE_ID as string,
      EMAILJS_TEMPLATE_ID as string,
      template,
    );

    console.log(email);
  };

  return (
    <>
      <Content title="진단완료">
        <Paragraph as="p" color="secondary" fontSize="xl" bold>
          이메일 입력하고
          <br />
          검진결과를 받아보세요
        </Paragraph>
        <EmailValidationInput
          value={emailValue}
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
          // 이메일 유효성 검사 관련 속성
          invalid={isValidEmail}
          validationHint={isValidEmail ? validateHint.email : ''}
        />
      </Content>
      <MainButton onClick={handleSubmit}>검진결과 보기</MainButton>
    </>
  );
}

const Paragraph = styled(Text)`
  text-align: center;
  margin-bottom: 32px;
`;

const EmailValidationInput = styled(ValidationInput)`
  width: 100%;
`;

export default Register;
