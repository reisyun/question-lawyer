import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

function Modal() {
  const history = useHistory();

  const handleClick = () => {
    // 홈으로 리다이렉트
    history.push('/');
  };

  return (
    <Shadow>
      <ModalBlock>
        <Icon icon="checkbox" size="xlarge" color="success" />
        <Title as="p" fontSize="xl" bold>
          이메일 전송이 완료되었습니다:)
        </Title>
        <StyledButton variant="containe" size="medium" onClick={handleClick}>
          확인
        </StyledButton>
      </ModalBlock>
    </Shadow>
  );
}

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  padding: 32px 16px 8px;
  width: 460px;
  height: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled(Text)`
  margin: 8px 0 40px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default Modal;
