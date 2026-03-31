import { useEffect, useRef, useState } from 'react';

export function useFlash(value) {
  const [flashClass, setFlashClass] = useState('');
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (value > prevValueRef.current) {
      setFlashClass('flash-up');
      const timer = setTimeout(() => setFlashClass(''), 800);
      return () => clearTimeout(timer);
    } else if (value < prevValueRef.current) {
      setFlashClass('flash-down');
      const timer = setTimeout(() => setFlashClass(''), 800);
      return () => clearTimeout(timer);
    }
    prevValueRef.current = value;
  }, [value]);

  return flashClass;
}
