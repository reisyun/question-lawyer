import React from 'react';
import styled from '@emotion/styled';
import Text from '@/components/common/Text';

export interface FieldProps {
  label: string;
  children?: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <FieldBlock>
      <Label as="h3" fontSize="sm">
        {label}
      </Label>
      <Content>{children}</Content>
    </FieldBlock>
  );
}

const FieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 16px;
`;

const Label = styled(Text)`
  margin-bottom: 8px;
`;

const Content = styled.div``;

export default Field;
