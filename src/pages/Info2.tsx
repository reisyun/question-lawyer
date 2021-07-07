import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import { withStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button as MuiButton, Link } from '@material-ui/core';
import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/theme');
  };

  return (
    <InfoWrap>
      <Content>
        <Title as="h1" bold>
          형사법률
          <br />
          리스크 진단
        </Title>
        <Divider />
        <Description as="p">
          <strong>형사전문변호사</strong>에게 법률과 관련된 고민을
          <br /> 쉽게 상담받아보세요.
        </Description>
        <StartButton variant="containe" onClick={handleClick}>
          시작하기
          <Icon icon="arrow" color="white" size="medium" />
        </StartButton>
      </Content>
      <PersonImage
        src="http://antiwhitepig.cafe24.com/wp-content/uploads/2021/06/person.png"
        alt="person"
      />

      <BottomCard>
        <Name color="primary">
          형사전문변호사 <strong>김기윤</strong>
        </Name>
        <MuiButtonGroup variant="text" size="large" color="primary">
          <MuiButton startIcon={<Icon icon="call" size="small" />}>
            <Link style={{ color: '#212121' }} href="tel:025222218" target="_blank" rel="noopener">
              02-522-2218
            </Link>
          </MuiButton>
          <MuiButton startIcon={<Icon icon="chat" size="small" />}>
            <Link
              style={{ color: '#212121' }}
              href="https://pf.kakao.com/_Dkaxixd/chat"
              target="_blank"
              rel="noopener"
            >
              카톡상담
            </Link>
          </MuiButton>
          <MuiButton startIcon={<Icon icon="info" size="small" />}>
            <Link
              style={{ color: '#212121' }}
              href="https://blog.naver.com/hopelawpasan/222377220296"
              target="_blank"
              rel="noopener"
            >
              변호사 소개
            </Link>
          </MuiButton>
        </MuiButtonGroup>
      </BottomCard>
    </InfoWrap>
  );
}

const InfoWrap = styled.main`
  user-select: none;
  z-index: 5;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 24%;
    background: ${({ theme }) => theme.palette.color.background};
  }
`;

/**
 * Content
 */
const Content = styled.div`
  position: relative;
  top: 18%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled(Text)`
  font-size: 56px;
  line-height: 1.2;
  letter-spacing: -0.045em;
  color: #434c63;

  @media (max-width: 1100px) and (min-width: 800px) {
    font-size: 4.8vw;
  }

  @media (max-width: 800px) {
    font-size: 6.5vw;
  }
`;

const Divider = styled.div`
  margin: 56px 0 40px;
  width: 120px;
  height: 1px;
  background: #434c63;

  @media (max-width: 1100px) and (min-width: 800px) {
    margin: 5vw 0 3.5vw;
    width: 10vw;
  }

  @media (max-width: 800px) {
    margin: 6vw 0 4vw;
    width: 14vw;
  }
`;

const Description = styled(Text)`
  margin-bottom: 120px;
  font-size: 20px;
  color: #434c63;

  strong {
    font-weight: bold;
  }

  @media (max-width: 1100px) and (min-width: 800px) {
    margin-bottom: 10vw;
    font-size: 1.8vw;
  }

  @media (max-width: 800px) {
    margin-bottom: 12vw;
    font-size: 2.4vw;
  }
`;

const StartButton = styled(Button)`
  width: 200px;
  height: 72px;
  font-size: 1.2em;
  font-weight: lighter;

  i {
    margin-left: 4px;
  }

  @media (max-width: 1100px) and (min-width: 800px) {
    width: 16vw;
    height: 6vw;
    font-size: 1.5vw;
  }

  @media (max-width: 800px) {
    width: 20vw;
    height: 8vw;
    font-size: 2vw;
  }
`;

/**
 * PersonImage
 */
const PersonImage = styled.img`
  -webkit-user-drag: none;
  z-index: 1;
  object-fit: contain;
  object-position: right bottom;
  position: fixed;
  left: 60%;
  bottom: -8px;
  width: 420px;
  max-width: 40vh;

  @media (max-width: 1100px) and (min-width: 800px) {
    left: auto;
    right: 40px;
    width: 40vw;
    max-width: auto;
  }

  @media (max-width: 800px) {
    left: auto;
    right: -40px;
    width: 50vw;
    min-width: 260px;
    max-width: 320px;
  }
`;

/**
 * BottomCard
 */
const BottomCard = styled.div`
  z-index: 999;
  position: fixed;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px 16px;
  width: 380px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 18px -6px rgba(24, 39, 75, 0.1), 0px 12px 42px -4px rgba(24, 39, 75, 0.1);
`;

const Name = styled(Text)`
  line-height: 2;

  strong {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const MuiButtonGroup = withStyles({
  grouped: {
    fontSize: '0.875em',
  },
})(ButtonGroup);

export default Info;
