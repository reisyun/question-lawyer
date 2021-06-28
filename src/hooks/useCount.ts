import { useState } from 'react';

export function useCount(initial = 0) {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return [count, increment, decrement] as const;
}
