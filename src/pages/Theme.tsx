/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { questions } from '@/questions';
import { useHistory } from 'react-router-dom';
import { useThemeState, ThemeType } from '@/atoms/questionState';
import Button from '@/components/common/Button';
import Layout from '@/components/Layout';

function Theme() {
  const history = useHistory();
  const [questionData] = useState(questions);
  const [, setTheme] = useThemeState();

  const themeList = Object.keys(questionData);

  const selectTheme = (theme: ThemeType['key']) => {
    setTheme({
      key: theme,
      name: questionData[theme as ThemeType['key']].theme,
    });
    history.push(`/subject`);
  };

  // data에 있는 주제들을 버튼으로 생성
  const themeButtons = themeList.map(data => (
    <StyledButton
      key={data}
      variant="text"
      size="large"
      onClick={() => selectTheme(data as ThemeType['key'])}
    >
      {questionData[data as ThemeType['key']].theme}
    </StyledButton>
  ));

  return (
    <Layout title="형사법률 리스크 진단" desc="원하시는 주제를 선택해주세요!" bigTitle>
      <List>{themeButtons}</List>
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

export default Theme;
