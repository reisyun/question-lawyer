import React from 'react';
import styled from '@emotion/styled';
import { TextareaAutosize } from '@material-ui/core';

export interface TextAreaProps {
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function TextArea({ value, placeholder, onChange }: TextAreaProps) {
  return (
    <StyledTextArea
      autoFocus
      value={value}
      placeholder={placeholder || '작성해주세요'}
      onChange={onChange}
      rowsMin={12}
    />
  );
}

const StyledTextArea = styled(TextareaAutosize)`
  resize: none;
  overflow-y: hidden;
  font-family: 'Noto Sans KR', sans-serif;

  padding: 8px;
  width: 100%;
  background: white;
  /* focus 해제 시 글씨가 움직여지는 부분 막음 */
  /* 더 나은 가시성을 위해 추가 */
  border: 2px solid rgba(39, 60, 117, 0.25);
  border-radius: 8px;
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.palette.color.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.color.hint};
  }
`;

export default TextArea;
