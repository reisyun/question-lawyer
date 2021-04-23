import { useState } from 'react';

/**
 * `key = keys[index]` 배열에서 아이템을 가져오는 원리와 동일
 */
// TODO: 아이템이 같은 이름일 경우 fail
export function useTabs<T>(keys: Array<T>, initialIndex = 0) {
  const [index, setIndex] = useState<number>(initialIndex);
  const key: T = keys[index];

  return [key, setIndex] as const;
}
