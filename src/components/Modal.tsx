import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { ConfirmedIllust } from '@/assets/icons';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

function Modal() {
  const history = useHistory();

  const handleClick = () => {
    // 홈으로 리다이렉트
    history.push('/');
  };

  return (
    <Shadow>
      <ModalBlock>
        <Illust />
        <Content>
          <Title as="p" fontSize="lg" bold>
            변호사님에게 전달드렸습니다!
          </Title>
          <StyledButton variant="containe" size="medium" onClick={handleClick}>
            처음으로
          </StyledButton>
        </Content>
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
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const ModalBlock = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: 460px;
  max-height: 400px;
  background: ${({ theme }) => theme.palette.color.background};
  border-radius: 8px;
  box-shadow: 2px 8px 16px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: white;
`;

const Illust = styled(ConfirmedIllust)`
  padding: 12px;
  width: 100%;
  max-height: 200px;
  opacity: 0.8;
`;

const Title = styled(Text)`
  margin: 8px 0 40px;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 240px;
  width: 100%;
`;

export default Modal;
