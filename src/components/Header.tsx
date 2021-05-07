import React from 'react';
import styled from '@emotion/styled';
import { MAX_CONTENT_SIZE } from '@/libs/constant';
import Text from '@/components/common/Text';
import Tag from '@/components/common/Tag';

export interface HeaderProps {
  title: string;
  desc?: string;
  tagName?: string;
  bigTitle?: boolean;
}

function Header({ title, desc, tagName, bigTitle }: HeaderProps) {
  return (
    <HeaderBlock>
      <TitleGroup>
        {tagName && <Tag size="small">{tagName}</Tag>}
        <Title as="h1" fontSize={bigTitle ? 'title' : 'subtitle'} bold>
          {title}
        </Title>
        {desc && (
          <Text as="p" color="secondary">
            {desc}
          </Text>
        )}
      </TitleGroup>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  position: relative;
  padding: 40px 0 8px;
  min-height: 200px;
  background: ${({ theme }) => theme.palette.color.white};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 16px;
  max-width: ${`${MAX_CONTENT_SIZE}px`};
  width: 100%;
  text-align: center;
`;

const Title = styled(Text)`
  margin: 16px 0 8px;
  word-break: keep-all;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

export default Header;
