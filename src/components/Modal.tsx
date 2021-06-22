import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import { Dialog, DialogContent } from '@material-ui/core';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
}

function Modal({ open, onClose }: ModalProps) {
  const history = useHistory();

  const handleClick = () => {
    // 홈으로 리다이렉트
    history.push('/');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Illust src="https://antiwhitepig.cafe24.com/wp-content/uploads/2021/04/q-letter.png" />
        <Content>
          <Title as="p" fontSize="lg" bold>
            이메일이 성공적으로 전달됐습니다.
          </Title>
          <StyledButton variant="containe" size="medium" onClick={handleClick}>
            처음으로
          </StyledButton>
        </Content>
      </DialogContent>
    </Dialog>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: white;
`;

const Illust = styled(Image)`
  margin: 32px auto;
  width: 60%;
  max-height: 140px;
  opacity: 0.8;
`;

const Title = styled(Text)`
  margin: 8px 0 40px;
  text-align: center;
  word-break: keep-all;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 240px;
  width: 100%;
  height: 40px;
`;

export default Modal;
