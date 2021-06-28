import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeProps } from '@/styles/theme';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface SelectProps {
  value: string;
  answers: string[];
  selected: string[];
  selectAnswer: (answer: string) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Select({ value, answers, selected, selectAnswer, onChange }: SelectProps) {
  const selectButton = answers.map(answer => {
    // 선택한 답변에 스타일 적용
    const selectedAnswer = selected.find(selected => selected === answer);
    const selectedStyle = selectedAnswer ? 'selected' : '';

    return answer === '#input' ? (
      <SelectInput
        key={answer}
        aria-label={answer}
        value={value}
        placeholder="직접 입력하기"
        onClick={() => selectAnswer(answer)}
        onChange={onChange}
        className={selectedStyle}
      />
    ) : (
      <SelectButton
        key={answer}
        aria-label={answer}
        variant="outline"
        size="large"
        onClick={() => selectAnswer(answer)}
        className={selectedStyle}
      >
        {answer}
      </SelectButton>
    );
  });

  return <SelectBlock>{selectButton}</SelectBlock>;
}

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const baseStyle = ({ theme }: ThemeProps) => css`
  margin-top: 16px;
  background: white;
  /* transition 주기 위해 border-color = 투명 */
  color: ${theme.palette.color.secondary};

  border-color: transparent;
  border-radius: 8px;
  /* 더 나은 가시성을 위해 추가 */
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.05);

  transition: border-color 0.2s, font-weight 0.2s, color 0.2s;

  /* focus만 할 경우 다른 곳을 클릭할 시 스타일이 사라지는 문제 보안 */
  &.selected {
    border: 2px solid ${theme.palette.color.main};
    color: ${theme.palette.color.main};
  }

  /* tab 버튼을 누를 경우 포커스 스타일 */
  &:focus {
    background: ${theme.palette.overlay.focus};
  }

  @media (max-width: 768px) {
    &:hover {
      background: white;
    }
  }
`;

const SelectButton = styled(Button)`
  ${baseStyle}

  &:first-of-type {
    margin-top: 0;
  }
`;

const SelectInput = styled(Input)`
  ${baseStyle};
  height: 64px;
  font-size: ${({ theme }) => theme.size.fontSize.md};
  color: ${({ theme }) => theme.palette.color.secondary};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.palette.color.secondary};
  }

  &:focus {
    outline: none;
  }
`;

export default Select;
