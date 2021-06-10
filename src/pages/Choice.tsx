/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from '@emotion/styled';
import { questions } from '@/questions';
import { useHistory } from 'react-router-dom';
import { useThemeState, useSubjectState, ThemeType } from '@/atoms/questionState';
import Button from '@/components/common/Button';
import Layout from '@/components/Layout';

function Choice() {
  const history = useHistory();
  const [theme, setTheme] = useThemeState();
  const [subject, setSubject] = useSubjectState();

  const themeList = Object.keys(questions);
  const subjectList = questions[theme.key].subjects;

  // const selectTheme = (theme: ThemeType) => {
  //   setTheme({
  //     key: 'trafficCrime',
  //     name: '교통범죄',
  //   });
  // };

  // data에 있는 주제들을 버튼으로 생성
  // const themeButtons = themeList.map(data => (
  //   <StyledButton key={data} variant="text" size="large" onClick={() => selectTheme(data)}>
  //     {data}
  //   </StyledButton>
  // ));

  const selectSubject = (subject: string) => {
    setSubject(subject);
    history.push(`/question/${subject}`);
  };

  const subjectButtons = subjectList.map(({ label }) => (
    <StyledButton key={label} variant="text" size="large" onClick={() => selectSubject(label)}>
      {label}
    </StyledButton>
  ));

  return (
    <Layout title={theme.name} desc="원하는 주제를 선택해주세요" bigTitle>
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

export default Choice;
