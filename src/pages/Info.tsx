import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Logo } from '@/assets/icons';
import { MAX_CONTENT_SIZE } from '@/libs/constant';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('question');
  };

  return (
    <InfoWrap>
      <Content>
        <Illust />
        <TitleGroup>
          <Title as="h1" color="white" fontSize="title" bold>
            형사법률 리스크 진단
          </Title>
          <Description as="p" fontSize="lg">
            변호사에게 무료로 진단 받으세요!
          </Description>
        </TitleGroup>
        <StyledButton onClick={handleClick}>시작하기</StyledButton>
      </Content>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.color.main};
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Illust = styled(Logo)`
  width: 100%;
  max-height: 300px;
  opacity: 0.8;

  @media (max-width: 576px) {
    height: 240px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const Title = styled(Text)`
  margin: 40px 0 8px;
  word-break: keep-all;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const Description = styled(Text)`
  color: #ccc;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
  max-width: 240px;
  border-radius: 8px;
  background: white;
`;

export default Info;
