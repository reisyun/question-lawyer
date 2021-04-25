import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';
import ValidationInput from '@/components/ValidationInput';
import Button from '@/components/common/Button';
import Field from '@/components/Field';

function Register() {
  return (
    <RegisterBlock>
      <Title as="h2" fontSize="xl" bold>
        진단완료
      </Title>
      <Content>
        <Paragraph as="p" color="secondary" fontSize="xl" bold>
          이메일 입력하고 5초만에
          <br />
          검진결과를 받아보세요
        </Paragraph>
        <Field label="이메일">
          <StyledInput placeholder="이메일을 입력해주세요" />
        </Field>
        <StyeldButton variant="containe">검진결과 보기</StyeldButton>
      </Content>
    </RegisterBlock>
  );
}

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Text)`
  margin: 24px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 48px;
  width: 460px;
  /* background: ${({ theme }) => theme.palette.background.level1}; */
  border-radius: 8px;
`;

const Paragraph = styled(Text)`
  text-align: center;
  margin-bottom: 32px;
`;

const StyeldButton = styled(Button)`
  width: 100%;
`;

const StyledInput = styled(ValidationInput)`
  width: 100%;
`;

export default Register;
