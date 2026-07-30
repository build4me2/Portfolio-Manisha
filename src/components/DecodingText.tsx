import { useEffect, useState } from 'react';

const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%+<>/';

function decodeFrame(text: string, lockedCharacters: number, frame: number) {
  let output = '';
  let characterIndex = 0;

  for (const character of text) {
    if (/\s/.test(character)) {
      if (output && characterIndex <= lockedCharacters) output += character;
      continue;
    }

    if (characterIndex < lockedCharacters) {
      output += character;
      characterIndex += 1;
      continue;
    }

    output += glyphs[(frame + characterIndex * 7) % glyphs.length];
    break;
  }

  return output;
}

type DecodingTextProps = {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
};

export function DecodingText({ text, delay = 0, duration = 2304, className }: DecodingTextProps) {
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [displayText, setDisplayText] = useState(() => (reduceMotion ? text : ''));

  useEffect(() => {
    if (reduceMotion) return;

    const characterCount = text.replace(/\s/g, '').length;
    const frameDuration = duration / (characterCount * 3);
    let frame = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        frame += 1;
        const lockedCharacters = Math.floor(frame / 3);

        if (lockedCharacters >= characterCount) {
          setDisplayText(text);
          if (intervalId) window.clearInterval(intervalId);
          return;
        }

        setDisplayText(decodeFrame(text, lockedCharacters, frame));
      }, frameDuration);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [delay, duration, reduceMotion, text]);

  return (
    <span className={`decoding-text${className ? ` ${className}` : ''}`} aria-label={text}>
      <span className="decoding-text-measure" aria-hidden="true">{text}</span>
      <span className="decoding-text-output" aria-hidden="true">{displayText}</span>
    </span>
  );
}
