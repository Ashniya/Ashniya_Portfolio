import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;
