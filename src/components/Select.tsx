import React from 'react';
import styled from '@emotion/styled';
import { useTabs } from '@/hooks/useTabs';

interface SelectProps {
  items: Array<string>;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Select({ items, onClick }: SelectProps) {
  const [currentTab, setCurrentIndex] = useTabs(items);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
    onClick(event);
    setCurrentIndex(idx);
  };

  const selectItem = items.map((item, idx) => (
    <SelectItem
      key={item}
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
  gap: 16px;
`;

const SelectItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #e6ebf0;
  border-radius: 16px;
  transition: background 0.3s;

  &.selected {
    background: #c7d0d8;
  }
`;

export default Select;
