import React from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { inputState } from '@/store/question';
import Text from '@/components/common/Text';
import Select from '@/components/Select';
import Input from './common/Input';

export interface QnATemplateProps {
  q: string;
  a?: Array<string>;
}

function QnATemplate({ q, a }: QnATemplateProps) {
  const setInputValue = useSetRecoilState(inputState);

  return (
    <>
      <Title as="h2" fontSize="lg" bold>
        {q}
      </Title>
      {/* a가 있으면? Select Component 없으면 Input component */}
      {a ? (
        <Select items={a} />
      ) : (
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
          placeholder="입력해주세요"
        />
      )}
    </>
  );
}

const Title = styled(Text)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 32px;
`;

export default QnATemplate;
