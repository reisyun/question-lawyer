import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';

export interface ContentProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Content({ title, children }: ContentProps) {
  const titleEl = (
    <Title as="h2" fontSize="xl" bold>
      {title}
    </Title>
  );

  return (
    <ContentBlock>
      {title && titleEl}
      <Body>{children}</Body>
    </ContentBlock>
  );
}

const ContentBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-bottom: 24px;
  border-radius: 8px;
`;

const Title = styled(Text)`
  text-align: center;
  margin-bottom: 32px;
  word-break: keep-all;
`;

const Body = styled.div``;

export default Content;
