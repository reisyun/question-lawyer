import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';
import { isEmail } from '@/libs/utils';
import { validateHint } from '@/libs/validateHint';
import Content from '@/components/Content';
import Text from '@/components/common/Text';
import ValidationInput from '@/components/ValidationInput';
import MainButton from '@/components/MainButton';

const EMAILJS_SERVICE_ID = 'question_tree';
const EMAILJS_TEMPLATE_ID = 'template_g9sreii';

function Register() {
  const [emailValue, setEmailValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmailValue(value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // 이메일 유효성에 맞으면 valid
    if (isEmail(emailValue)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }

    const email = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      message: emailValue,
    });

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
