import React from 'react';
import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';

export interface TextAreaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

function TextArea({ value, onChange, ...rest }: TextAreaProps) {
  return <StyledTextArea value={value} onChange={onChange} minRows={8} {...rest} />;
}

const StyledTextArea = styled(TextareaAutosize)`
  resize: none;
  overflow-y: hidden;

  padding: 8px;
  width: 100%;
  background: white;
  /* focus 해제 시 글씨가 움직여지는 부분 막음 */
  border: 2px solid transparent;
  border-radius: 8px;
  /* 더 나은 가시성을 위해 추가 */
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.05);
  font-family: 'Noto Sans KR', sans-serif;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.palette.color.main};
  }
`;

export default TextArea;
