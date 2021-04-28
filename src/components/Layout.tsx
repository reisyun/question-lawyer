import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Wrapper>
      <Header title="형사법률 리스크 진단" desc="변호사에게 무료로 진단 받으세요!" />
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.palette.color.background};
  height: 100%;

  /* decoration */
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 16px;
    background: ${({ theme }) => theme.palette.color.main};
  }
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 32px 0 40px;
  max-width: 460px;
`;

export default Layout;
