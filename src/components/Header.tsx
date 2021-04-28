import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';

interface HeaderProps {
  title: string;
  desc: string;
}

function Header({ title, desc }: HeaderProps) {
  return (
    <HeaderBlock>
      <Title as="h1" bold>
        {title}
      </Title>
      <Description as="p" fontSize="lg" color="secondary">
        {desc}
      </Description>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${({ theme }) => theme.palette.color.white};
`;

const Title = styled(Text)`
  font-size: 40px;
`;

const Description = styled(Text)``;

export default Header;
