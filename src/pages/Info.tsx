import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import Text from '@/components/common/Text';
import { withStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button, Link, useMediaQuery } from '@material-ui/core';
import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();
  const matches680 = useMediaQuery(`(max-width: 680px)`);
  const matches800 = useMediaQuery(`(max-width: 800px)`);

  const iconSize = matches800 ? 'small' : 'medium';

  const handleClick = () => {
    history.push('/theme');
  };

  return (
    <InfoWrap>
      <Header>
        <Inner top>
          <PersonImage
            src="http://antiwhitepig.cafe24.com/wp-content/uploads/2021/06/person.png"
            alt="person"
          />
          <Point>
            <Text fontSize={matches680 ? 'sm' : 'md'} color="main" bold>
              형사 전문 변호사에게 직접 물어보세요!
            </Text>
          </Point>

          <Titles>
            <Title fontSize="title" color="white" bold>
              형사법률 리스크 진단
            </Title>
            <Text fontSize={matches680 ? 'md' : 'lg'} color="white">
              법률과 관련된 고민을 쉽게 상담받아보세요
            </Text>
          </Titles>
          {matches680 ? (
            <StyledMobileButton
              variant="contained"
              size="large"
              endIcon={<Icon icon="arrow" color="main" />}
              onClick={handleClick}
            >
              시작하기
            </StyledMobileButton>
          ) : (
            <StyledPCButton
              variant="contained"
              size="large"
              endIcon={<Icon icon="arrow" color="main" />}
              onClick={handleClick}
            >
              시작하기
            </StyledPCButton>
          )}
        </Inner>
      </Header>
      <Bottom>
        <Inner>
          <Infos>
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
              orientation={matches800 ? 'vertical' : 'horizontal'}
              size="large"
              color="primary"
            >
              <Button
                style={matches800 ? MobileButtonStyle : PcButtonStyle}
                startIcon={<Icon icon="call" size={iconSize} color="main" />}
              >
                <Link
                  style={{ color: '#273C75' }}
                  href="tel:025222218"
                  target="_blank"
                  rel="noopener"
                >
                  02-522-2218
                </Link>
              </Button>
              <Button
                style={matches800 ? MobileButtonStyle : PcButtonStyle}
                startIcon={<Icon icon="chat" size={iconSize} color="main" />}
              >
                <Link
                  style={{ color: '#273C75' }}
                  href="https://pf.kakao.com/_Dkaxixd/chat"
                  target="_blank"
                  rel="noopener"
                >
                  카톡상담
                </Link>
              </Button>
              <Button
                style={matches800 ? MobileButtonStyle : PcButtonStyle}
                startIcon={<Icon icon="info" size={iconSize} color="main" />}
              >
                <Link
                  style={{ color: '#273C75' }}
                  href="https://blog.naver.com/hopelawpasan/222377220296"
                  target="_blank"
                  rel="noopener"
                >
                  변호사 소개
                </Link>
              </Button>
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
  /* bottom: -56vh; */

  height: 84vh;
  min-height: 600px;
  max-height: 900px;

  @media (max-width: 800px) {
    max-height: 70vh;
    bottom: -63vh;
  }

  @media (min-width: 1200px) {
    max-height: 100vh;
  }

  @media (min-width: 900px) and (min-height: 1200px) {
    max-height: 1000px;
    bottom: -63vh;
  }

  @media (max-width: 800px) and (max-height: 900px) {
    width: 33vh;
    bottom: -63vh;
  }
`;

const Header = styled.header`
  position: relative;
  height: 60vh;
  min-height: 400px;
  background: ${({ theme }) => theme.palette.color.main};

  @media (max-width: 680px) {
    height: 53vh;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: ${({ top }: { top?: boolean }) => (top ? 65 : 38)}%;
  left: 50%;
  padding: 0 40px;
  width: 100%;
  transform: translate(-50%, -50%);

  @media (max-width: 680px) {
    top: ${({ top }: { top?: boolean }) => (top ? 56 : 30)}%;
    padding: 0 24px;
  }

  @media (min-width: 800px) {
    max-width: 960px;
  }
`;

const Point = styled.div`
  display: inline-block;
  padding: 8px 32px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;

  @media (max-width: 680px) {
    padding: 8px 20px;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
`;

const Title = styled(Text)`
  font-size: 48px;
  letter-spacing: -2px;

  @media (max-width: 680px) {
    font-size: 36px;
  }
`;

const StyledPCButton = withStyles({
  root: {
    zIndex: 100,
    marginTop: 40,
    background: 'white',
    width: 160,
    height: 48,
  },
  label: {
    color: '#273C75',
    fontWeight: 'bold',
  },
})(Button);

const StyledMobileButton = withStyles({
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

  @media (max-width: 680px) {
    height: 47vh;
  }
`;

const Infos = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 12px;

  max-width: 1200px;
  min-height: 120px;

  background: #f0f3fb;
  border-radius: 16px;
`;

const NameGroup = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin-bottom: 12px;

  & span {
    margin-left: 12px;
    line-height: 1.2;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;

    & span {
      margin-left: 0;
    }
  }
`;

const MuiButtonGroup = withStyles({
  root: {
    position: 'relative',
  },
  grouped: {
    fontSize: '0.875em',
  },
})(ButtonGroup);

const PcButtonStyle = {
  padding: '8px 16px',
};

const MobileButtonStyle = {
  padding: '8px 0',
  justifyContent: 'flex-start',
};

export default Info;
