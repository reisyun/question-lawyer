import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { DocumentIllust } from '@/assets/icons';
import { MAX_CONTENT_SIZE } from '@/libs/constant';
import Text from '@/components/common/Text';
import MainButton from '@/components/MainButton';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('question');
  };

  return (
    <InfoWrap>
      <TitleGroup>
        <Title as="h1" fontSize="title" bold>
          형사법률 리스크 진단
        </Title>
        <Text as="p" fontSize="lg" color="secondary">
          변호사에게 무료로 진단 받으세요!
        </Text>
      </TitleGroup>
      <Illust />
      <MainButton onClick={handleClick}>시작하기</MainButton>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  padding: 0 16px;
  max-width: ${MAX_CONTENT_SIZE}px;
  width: 100%;
  background: ${({ theme }) => theme.palette.color.white};
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
  margin: 16px 0 8px;
  word-break: keep-all;
  line-height: 1.2;
`;

const Illust = styled(DocumentIllust)`
  margin: 64px 0 32px;
  width: 100%;
  max-height: 280px;
  opacity: 0.8;
`;

export default Info;
