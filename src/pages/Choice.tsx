import React from 'react';
import styled from '@emotion/styled';
import { questionData } from '@/questions';
import Button from '@/components/common/Button';
import Layout from '@/components/Layout';

function Home() {
  const THEME = 'trafficCrime';
  const currentQuestion = questionData[THEME];

  // data에 있는 주제들을 버튼으로 생성
  const subjectButtons = currentQuestion.subjects.map(({ subject }) => (
    <StyledButton key={subject} variant="text" size="large" onClick={() => 'a'}>
      {subject}
    </StyledButton>
  ));

  return (
    <Layout title={currentQuestion.theme} desc="원하는 주제를 선택해주세요" bigTitle>
      <List>{subjectButtons}</List>
    </Layout>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 8px 0;
  background: white;
  color: ${({ theme }) => theme.palette.color.secondary};

  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.palette.color.main};
    color: white;
  }
`;

export default Home;
