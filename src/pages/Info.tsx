import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import person from '@/assets/images/person.png';
import Text from '@/components/common/Text';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/choice');
  };

  return (
    <InfoWrap>
      <PersonImage src={person} />
      <Header>
        <Inner>
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
          >
            시작하기
          </StyledButton>
        </Inner>
      </Header>
    </InfoWrap>
  );
}

const InfoWrap = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.color.background};
`;

const PersonImage = styled.img`
  object-fit: contain;
  z-index: 500;
  position: absolute;
  right: 0;
  bottom: -140px;
  height: 100vw;
  max-height: 800px;
`;

const Header = styled.header`
  position: relative;
  background: ${({ theme }) => theme.palette.color.main};
  height: 70vh;
  min-height: 240px;
`;

const Inner = styled.div`
  position: absolute;
  top: 20vh;
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

export default Info;
