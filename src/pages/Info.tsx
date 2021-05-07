import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Logo } from '@/assets/icons';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import Icon from '@/components/common/Icon';

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
          <Title as="h1" color="white" bold>
            형사법률 리스크 진단
          </Title>
          <Description as="p" fontSize="xl">
            변호사에게 무료로 진단 받으세요!
          </Description>
        </TitleGroup>
        <StyledButton onClick={handleClick}>
          <Text fontSize="lg" color="main" bold>
            시작하기
          </Text>
          <Icon icon="arrow" color="main" />
        </StyledButton>
      </Content>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  padding: 20vh 16px 0;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.color.main};
`;

const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 40px;
`;

const Illust = styled(Logo)`
  width: 100%;
  max-height: 120px;
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
  margin: 80px 0 8px;
  word-break: keep-all;
  line-height: 1.2;
  font-size: 48px;
  color: white;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

const Description = styled(Text)`
  color: #ccc;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 80px;
  width: 100%;
  max-width: 240px;
  border-radius: 8px;
  background: white;

  &:hover i {
    animation: moveX 1s ease-in-out infinite;
  }

  @keyframes moveX {
    from {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(4px);
    }
  }

  @media (max-width: 576px) {
    &:hover i {
      animation: none;
    }
  }
`;

export default Info;
