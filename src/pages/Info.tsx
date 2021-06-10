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

  const iconSize = matches960 ? 'small' : 'medium';

  const handleClick = () => {
    history.push('/choice');
  };

  return (
    <InfoWrap>
      <Header>
        <Inner top>
          <PersonImage src={person} />
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
        </Inner>
      </Header>
      <Bottom>
        <Inner>
          <Infos>
            <NameGroup>
              <Text fontSize={matches960 ? 'md' : 'lg'} color="main">
                형사전문변호사
              </Text>
              <Text fontSize={matches960 ? 'xl' : 'subtitle'} color="main" bold>
                김기윤
              </Text>
            </NameGroup>
            <MuiButtonGroup
              variant="text"
              orientation={matches960 ? 'vertical' : 'horizontal'}
              size="large"
              color="primary"
            >
              <LinkButton startIcon={<Icon icon="call" size={iconSize} color="main" />}>
                <Link href="tel:025222218" target="_blank" rel="noopener">
                  02-522-2218
                </Link>
              </LinkButton>
              <LinkButton startIcon={<Icon icon="chat" size={iconSize} color="main" />}>
                <Link href="https://pf.kakao.com/_Dkaxixd/chat" target="_blank" rel="noopener">
                  카톡상담
                </Link>
              </LinkButton>
              <LinkButton startIcon={<Icon icon="info" size={iconSize} color="main" />}>
                <Link
                  href="https://blog.naver.com/hopelawpasan/222377220296"
                  target="_blank"
                  rel="noopener"
                >
                  변호사 소개
                </Link>
              </LinkButton>
            </MuiButtonGroup>
          </Infos>
        </Inner>
      </Bottom>
    </InfoWrap>
  );
}

const InfoWrap = styled.main`
  user-select: none;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.color.background};
`;

const PersonImage = styled.img`
  z-index: -1;
  -webkit-user-drag: none;
  object-fit: contain;
  object-position: right bottom;

  position: absolute;
  right: 0;
  bottom: 0;

  height: 90vh;
  min-height: 600px;
  max-height: 1000px;

  @media (max-width: 800px) {
    max-height: 60vh;
  }

  @media (min-width: 1200px) {
    max-height: 100vw;
  }
`;

const Header = styled.header`
  position: relative;
  height: 60vh;
  min-height: 400px;
  background: ${({ theme }) => theme.palette.color.main};
`;

const Inner = styled.div`
  position: absolute;
  top: ${({ top }: { top?: boolean }) => (top ? 60 : 50)}%;
  left: 50%;
  padding: 0 40px;
  width: 100%;
  max-width: 900px;
  transform: translate(-50%, -50%);

  @media (min-width: 1200px) {
    max-width: 1080px;
  }
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
    zIndex: 100,
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
  height: 40vh;
  min-height: 200px;
`;

const Infos = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 24px 16px;

  max-width: 1200px;
  min-height: 120px;

  background: #f0f3fb;
  border-radius: 16px;
`;

const NameGroup = styled.div`
  display: inline-flex;
  margin-left: 16px;
  margin-bottom: 16px;

  & span {
    margin-right: 8px;
    line-height: 1.2;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const MuiButtonGroup = withStyles({
  root: {
    position: 'relative',
  },
})(ButtonGroup);

const LinkButton = withStyles({
  root: {
    padding: '8px 16px',
  },
})(Button);

export default Info;
