'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(
  strings: string[],
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000
) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index % strings.length];

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );

        if (!isDeleting && text === current) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        } else if (isDeleting && text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    index,
    strings,
    typingSpeed,
    deleteSpeed,
    delayBetween,
  ]);

  return text.split('');
}
