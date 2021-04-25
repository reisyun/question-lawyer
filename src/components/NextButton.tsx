import React from 'react';
import styled from '@emotion/styled';
import Button from '@/components/common/Button';

function NextButton({ ...rest }) {
  return (
    <NextButtonBlock variant="containe" {...rest}>
      다음
    </NextButtonBlock>
  );
}

const NextButtonBlock = styled(Button)`
  margin-top: 32px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
`;

export default NextButton;
