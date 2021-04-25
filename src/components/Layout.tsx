import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';

/**
 * 모든 페이지에 항상 보이고 싶은 컴포넌트를 이곳에 삽입
 */
function Layout({ children }: { children: React.ReactChild }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: ${props => props.theme.palette.background.default};
`;

const Content = styled.div`
  margin: 0 auto;
  padding-top: 32px;
  max-width: 460px;
`;

export default Layout;
