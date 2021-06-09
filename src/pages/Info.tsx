import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import person from '@/assets/images/person.png';
import Text from '@/components/common/Text';
import { withStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Link } from '@material-ui/core';
import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/choice');
  };

  return (
    <InfoWrap>
      <Header>
        <HeaderInner>
          <Point>
            <Text fontSize="md" color="main" bold>
              형사 전문 변호사에게 직접 물어보세요!
            </Text>
          </Point>

          <Titles>
            <Text fontSize="title" color="white" bold>
              형사법률 리스크 진단
            </Text>
            <Text fontSize="md" color="white">
              법률과 관련된 고민을 쉽게 상담받아보세요
            </Text>
          </Titles>
          <StyledButton
            variant="contained"
            size="large"
            endIcon={<Icon icon="arrow" color="main" />}
            onClick={handleClick}
          >
            시작하기
          </StyledButton>
        </HeaderInner>
      </Header>
      <Bottom>
        <BottomInner>
          <NameGroup>
            <Text fontSize="lg" color="main">
              형사전문변호사
            </Text>
            <Text fontSize="subtitle" color="main" bold>
              김기윤
            </Text>
          </NameGroup>
          <MuiButtonGroup
            // orientation="vertical"
            variant="text"
            size="large"
            color="primary"
          >
            <LinkButton startIcon={<Icon icon="call" size="medium" color="main" />}>
              <Link href="tel:025222218" target="_blank" rel="noopener">
                02-522-2218
              </Link>
            </LinkButton>
            <LinkButton startIcon={<Icon icon="chat" size="medium" color="main" />}>
              <Link href="https://pf.kakao.com/_Dkaxixd/chat" target="_blank" rel="noopener">
                카톡상담
              </Link>
            </LinkButton>
            <LinkButton startIcon={<Icon icon="info" size="medium" color="main" />}>
              <Link
                href="https://blog.naver.com/hopelawpasan/222377220296"
                target="_blank"
                rel="noopener"
              >
                변호사 소개
              </Link>
            </LinkButton>
          </MuiButtonGroup>
        </BottomInner>
      </Bottom>
      <PersonImage src={person} />
    </InfoWrap>
  );
}

const PersonImage = styled.img`
  object-fit: contain;
  object-position: right bottom;
  position: fixed;
  right: 0;
  bottom: -140px;
  height: 100vw;
  max-height: 1200px;
  min-height: 800px;

  @media (max-width: 1200px) {
    right: -6vw;
  }
`;

const InfoWrap = styled.main`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.color.background};

  @media (max-height: 600px) {
    overflow: scroll;
  }
`;

const Header = styled.header`
  position: relative;
  background: ${({ theme }) => theme.palette.color.main};
  height: 60vh;
  min-height: 320px;
`;

const HeaderInner = styled.div`
  position: absolute;
  bottom: 20vh;
  left: 10vw;
`;

const Point = styled.div`
  display: inline-block;
  padding: 8px 32px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const StyledButton = withStyles({
  root: {
    marginTop: 40,
    background: 'white',
    width: 160,
  },
  label: {
    color: '#273C75',
    fontWeight: 'bold',
  },
})(Button);

const Bottom = styled.footer`
  position: relative;
`;

const BottomInner = styled.div`
  position: absolute;
  top: 8vh;
  left: 10vw;
  min-height: 120px;
`;

const NameGroup = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 16px;
  margin-bottom: 16px;

  & span {
    margin-right: 8px;
    line-height: 1;
  }
`;

const MuiButtonGroup = withStyles({
  root: {
    zIndex: 999,
    position: 'relative',
    background: '#F0F3FB',
  },
})(ButtonGroup);

const LinkButton = withStyles({
  root: {
    padding: '8px 16px',
  },
})(Button);

export default Info;
