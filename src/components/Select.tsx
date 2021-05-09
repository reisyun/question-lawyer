import React from 'react';
import styled from '@emotion/styled';
import { useTabs } from '@/hooks/useTabs';
import Button from './common/Button';

interface SelectProps {
  items: Array<string>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Select({ items, onClick }: SelectProps) {
  const [currentTab, setCurrentIndex] = useTabs(items);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    onClick(event);
    setCurrentIndex(idx);
  };

  const selectItem = items.map((item, idx) => (
    <SelectItem
      key={item}
      variant="outline"
      size="large"
      onClick={e => handleClick(e, idx)}
      className={item === currentTab ? 'selected' : ''}
    >
      {item}
    </SelectItem>
  ));

  return <SelectBlock>{selectItem}</SelectBlock>;
}

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectItem = styled(Button)`
  margin-top: 16px;
  background: white;
  /* transition 주기 위해 border-color = 투명 */
  color: ${({ theme }) => theme.palette.color.secondary};

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
    background: ${({ theme }) => theme.palette.overlay.hover};
  }

  @media (max-width: 768px) {
    &:hover {
      background: white;
    }
  }
`;

export default Select;
