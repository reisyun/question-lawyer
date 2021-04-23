import React from 'react';
import styled from '@emotion/styled';
import { useTabs } from '@/hooks/useTabs';
import Text from '@/components/common/Text';

interface SelectProps {
  items: Array<string>;
}

function Select({ items }: SelectProps) {
  const [currentTab, setCurrentIndex] = useTabs(items);

  const selectItem = items.map((item, idx) => (
    <SelectItem
      key={item}
      onClick={() => setCurrentIndex(idx)}
      className={item === currentTab ? 'selected' : ''}
    >
      <Text>{item}</Text>
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

  &.selected {
    background: #c7d0d8;
  }
`;

export default Select;
