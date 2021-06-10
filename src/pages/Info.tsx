import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import person from '@/assets/images/person.png';
import Text from '@/components/common/Text';
import { withStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Link, useMediaQuery } from '@material-ui/core';
import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();
  const matches960 = useMediaQuery(`(max-width: 960px)`);
  const matches800 = useMediaQuery(`(max-width: 800px)`);

  const handleClick = () => {
    history.push('/choice');
  };

  return (
    <InfoWrap>
      <Header>
        <HeaderInner>
          <Point>
            <Text fontSize={matches800 ? 'sm' : 'md'} color="main" bold>
              형사 전문 변호사에게 직접 물어보세요!
            </Text>
          </Point>

          <Titles>
            <Title fontSize="title" color="white" bold>
              형사법률 리스크 진단
            </Title>
            <Text fontSize={matches800 ? 'sm' : 'md'} color="white">
              법률과 관련된 고민을 쉽게 상담받아보세요
            </Text>
          </Titles>
          <StyledButton
            variant="contained"
            size={matches800 ? 'medium' : 'large'}
            endIcon={<Icon icon="arrow" color="main" />}
            onClick={handleClick}
          >
            시작하기
          </StyledButton>
        </HeaderInner>
        <PersonImage src={person} />
      </Header>
      <Bottom>
        <BottomInner>
          <NameGroup>
            <Text fontSize={matches800 ? 'md' : 'lg'} color="main">
              형사전문변호사
            </Text>
            <Text fontSize={matches800 ? 'xl' : 'subtitle'} color="main" bold>
              김기윤
            </Text>
          </NameGroup>
          <MuiButtonGroup
            variant="text"
            orientation={matches960 ? 'vertical' : 'horizontal'}
            size="large"
            color="primary"
          >
            <LinkButton
              startIcon={<Icon icon="call" size={matches800 ? 'small' : 'medium'} color="main" />}
            >
              <Link href="tel:025222218" target="_blank" rel="noopener">
                02-522-2218
              </Link>
            </LinkButton>
            <LinkButton
              startIcon={<Icon icon="chat" size={matches800 ? 'small' : 'medium'} color="main" />}
            >
              <Link href="https://pf.kakao.com/_Dkaxixd/chat" target="_blank" rel="noopener">
                카톡상담
              </Link>
            </LinkButton>
            <LinkButton
              startIcon={<Icon icon="info" size={matches800 ? 'small' : 'medium'} color="main" />}
            >
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
    </InfoWrap>
  );
}

const PersonImage = styled.img`
  object-fit: contain;
  object-position: top right;
  position: fixed;
  left: auto;
  right: 4vw;
  bottom: -140px;
  max-height: 1000px;
  height: 90vh;
  min-height: 600px;

  @media (max-width: 800px) {
    max-height: 100vh;
  }
  @media (min-width: 1200px) {
    right: auto;
    left: 66vw;
    max-height: 100vw;
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
  left: 10vw;
  bottom: 12vh;
`;

const Point = styled.div`
  display: inline-block;
  padding: 8px 32px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;

  @media (max-width: 800px) {
    padding: 6px 24px;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const Title = styled(Text)`
  @media (max-width: 800px) {
    font-size: 36px;
  }
`;

const StyledButton = withStyles({
  root: {
    zIndex: 999,
    marginTop: 40,
    background: 'white',
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
  padding: 24px 16px;
  min-height: 120px;
  background: #f0f3fb;
  border-radius: 16px;
`;

const NameGroup = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 16px;
  margin-bottom: 16px;

  & span {
    margin-right: 8px;
    line-height: 1.2;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MuiButtonGroup = withStyles({
  root: {
    zIndex: 999,
    position: 'relative',
  },
})(ButtonGroup);

const LinkButton = withStyles({
  root: {
    padding: '8px 16px',
  },
})(Button);

export default Info;
