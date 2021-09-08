import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeProps } from '@/styles/theme';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

export interface MultiSelectProps {
  items: string[];
  selectedItems?: string[];
  singleSelect?: boolean;
  selectionLimit?: number;
  onSelect?: (selectedItems: string[]) => void;
  onRemove?: (selectedItems: string[]) => void;
  onChange?: (value: string) => void;
}

function MultiSelect({
  //
  items,
  singleSelect,
  selectionLimit,
  selectedItems = [],
  onSelect,
  onRemove,
  onChange,
}: MultiSelectProps) {
  const [_selectedItems, _setSelectedItems] = useState<string[]>(Object.assign([], selectedItems));
  const [_value, _setValue] = useState<string>('');

  const onChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (onChange) onChange(value);
      _setValue(value);
    },
    [onChange],
  );

  /**
   * _selectedItems가 mounted 되면 함수 호출
   */
  useEffect(() => {
    if (onSelect) onSelect(_selectedItems);
    if (onRemove) onRemove(_selectedItems);
  }, [_selectedItems, onRemove, onSelect]);

  /**
   * Item이 이미 선택되어있는지 확인
   */
  const isSelectedItem = (item: string) => {
    const check = _selectedItems.filter((i: string) => i === item);
    return check.length > 0;
  };

  /**
   * Item 하나만 선택되도록 함
   */
  const onSingleSelectItem = (item: string) => {
    if (onSelect) {
      onSelect([item]);
    }

    _setSelectedItems([item]);
  };

  /**
   * Selected Items에 있는 아이템을 선택
   */
  const onSelectItem = (item: string) => {
    // singleSelect 옵션이 True일 경우 하나만 선택 되도록 함
    if (singleSelect) {
      onSingleSelectItem(item);
      return;
    }

    // 이미 추가된 item이라면 제거
    if (isSelectedItem(item)) {
      onRemoveSelectedItem(item);
      return;
    }

    // selectionLimit 옵션을 통해 선택 한도 결정
    if (selectionLimit === _selectedItems.length) {
      return;
    }

    _setSelectedItems(prev => [...prev, item]);
  };

  /**
   * 해당 Item이 Selected Items에 존재하면 제거
   */
  const onRemoveSelectedItem = (item: string) => {
    const removedItems = _selectedItems.filter(i => i !== item);

    _setSelectedItems(removedItems);
  };

  const selectList = items.map(item => {
    // 모든 항목을 순회
    // 만약 선택된 항목을 발견했을 때 이름이 같을 경우 True
    const isSelected = !!_selectedItems.find(selectedItem => item === selectedItem);
    const selectedStyle = isSelected ? 'selected' : '';

    return item === '#input' ? (
      <SelectInput
        key={item}
        aria-label={item}
        placeholder="직접 입력하기"
        value={_value}
        onClick={() => onSelectItem(item)}
        onChange={onChangeValue}
        className={selectedStyle}
      />
    ) : (
      <SelectButton
        key={item}
        aria-label={item}
        variant="outline"
        size="large"
        onClick={() => onSelectItem(item)}
        className={selectedStyle}
      >
        {item}
      </SelectButton>
    );
  });

  return <SelectBlock>{selectList}</SelectBlock>;
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

  /* 더 나은 가시성을 위해 추가 */
  border: 1px solid rgba(39, 60, 117, 0.25);
  border-radius: 8px;
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

export default MultiSelect;
