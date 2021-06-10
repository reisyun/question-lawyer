import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Input from '@/components/common/Input';

function InputButton() {
  const inputElement = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    // 인풋 요소가 마운트 되면
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [active]);

  const onClick = () => {
    setActive(true);
    setFocus(!focus);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <StyledInput placeholder="직접 입력하기" onClick={onClick} onChange={onChange} />;
}

const StyledInput = styled(Input)`
  margin-top: 16px;
  background: white;
  height: 64px;
  /* transition 주기 위해 border-color = 투명 */
  font-size: ${({ theme }) => theme.size.fontSize.md};
  color: ${({ theme }) => theme.palette.color.secondary};
  text-align: center;

  border-color: transparent;
  border-radius: 8px;
  /* 더 나은 가시성을 위해 추가 */
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.05);

  transition: border-color 0.2s, font-weight 0.2s, color 0.2s;

  &:first-of-type {
    margin-top: 0;
  }

  /* focus만 할 경우 다른 곳을 클릭할 시 스타일이 사라지는 문제 보안 */
  &.selected {
    border: 2px solid ${({ theme }) => theme.palette.color.main};
    color: ${({ theme }) => theme.palette.color.main};
  }

  /* tab 버튼을 누를 경우 포커스 스타일 */
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.palette.color.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.color.secondary};
  }

  @media (max-width: 768px) {
    &:hover {
      background: white;
    }
  }
`;

export default InputButton;