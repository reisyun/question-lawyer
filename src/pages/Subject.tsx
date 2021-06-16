/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from '@emotion/styled';
import { questions } from '@/questions';
import { useHistory } from 'react-router-dom';
import { useThemeState, useSubjectState } from '@/atoms/questionState';
import Button from '@/components/common/Button';
import Layout from '@/components/Layout';

function Subject() {
  const history = useHistory();
  const [theme] = useThemeState();
  const [, setSubject] = useSubjectState();

  const subjectList = questions[theme.key].subjects;

  const selectSubject = (subject: string) => {
    setSubject(subject);
    history.push(`/question`);
  };

  const subjectButtons = subjectList.map(({ label }) => (
    <StyledButton key={label} variant="text" size="large" onClick={() => selectSubject(label)}>
      {label}
    </StyledButton>
  ));

  return (
    <Layout title={theme.name} desc="아래 사항 중 고민하시는 게 무엇인가요?" bigTitle>
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

  /* tab 버튼을 누를 경우 포커스 스타일 */
  &:focus {
    background: ${({ theme }) => theme.palette.overlay.hover};
  }
`;

export default Subject;
