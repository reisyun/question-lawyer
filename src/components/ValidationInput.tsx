import React from 'react';
import styled from '@emotion/styled';
import Input from '@/components/common/Input';
import ValidationHint from '@/components/common/ValidationHint';

export interface ValidationInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  validationHint?: string;
}

function ValidationInput({
  value,
  onChange,
  disabled,
  invalid,
  placeholder,
  validationHint,
}: ValidationInputProps) {
  return (
    <ValidationInputBlock>
      <Input
        value={value}
        onChange={onChange}
        disabled={disabled}
        invalid={invalid}
        placeholder={placeholder}
      />
      {validationHint && (
        <ValidationHint disabled={disabled} invalid={invalid}>
          {validationHint}
        </ValidationHint>
      )}
    </ValidationInputBlock>
  );
}

const ValidationInputBlock = styled.div`
  position: relative;
`;

export default ValidationInput;
