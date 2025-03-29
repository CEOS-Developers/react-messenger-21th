import { useEffect } from 'react';

export const useAutoResizeTextarea = (
  ref: React.RefObject<HTMLTextAreaElement | null>,
  value: string,
  maxHeight: number
) => {
  useEffect(() => {
    const textarea = ref.current;

    if (textarea) {
      textarea.style.height = 'auto'; // 초기화 (줄 수가 줄어들 때를 대비)
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  }, [ref, value, maxHeight]);
};
