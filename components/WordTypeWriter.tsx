'use client';
import { useEffect, useState } from 'react';

interface WordTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function WordTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}: WordTypewriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const isWordComplete = text === currentWord;

    const updateText = () => {
      const updated = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updated);

      if (!isDeleting && updated === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updated === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      updateText,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="inline-flex items-center font-bold tracking-wide text-white">
      {text}
      <span className="w-[1ch] animate-blink ml-1 text-white">|</span>
    </span>
  );
}
