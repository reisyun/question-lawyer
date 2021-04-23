import React from 'react';
import styled from '@emotion/styled';

function Header() {
  return <HeaderBlock>LOGO</HeaderBlock>;
}

const HeaderBlock = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
