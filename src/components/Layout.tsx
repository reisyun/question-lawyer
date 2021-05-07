import React from 'react';
import styled from '@emotion/styled';
import { MAX_CONTENT_SIZE } from '@/libs/constant';
import Header, { HeaderProps } from '@/components/Header';

export interface LayoutProps extends HeaderProps {
  children: React.ReactNode | React.ReactNode[];
}

// TODO: header component를 합치던 하기.
// 현재 props가 거의 header 것임
function Layout({ title, desc, tagName, bigTitle, children }: LayoutProps) {
  return (
    <Wrapper>
      <Header title={title} desc={desc} tagName={tagName} bigTitle={bigTitle} />
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  background: ${({ theme }) => theme.palette.color.background};
  min-height: 100vh;

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
  margin: 32px auto 40px;
  padding: 0 16px;
  max-width: ${`${MAX_CONTENT_SIZE}px`};
  width: 100%;
`;

export default Layout;
