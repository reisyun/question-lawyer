import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

// TODO: link to
function NavButton() {
  return (
    <NavButtonBlock variant="containe">
      <Link to="/">다음</Link>
    </NavButtonBlock>
  );
}

const NavButtonBlock = styled(Button)`
  margin-top: 32px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
`;

const Link = styled(NavLink)`
  display: inline-block;
  line-height: 72px;
  color: ${props => props.theme.palette.color.white};
  text-decoration: none;
`;

export default NavButton;
