import React, { useState, useEffect } from 'react';
import "./HobbiesTypewriter.css";

const HobbiesTypewriter = () => {
  const hobbies = ['Cooking 🍳', 'Making Apps 💻', 'Reading 📚', 'Watching TV 📺', 'Spending time with family 🏠'];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (subIndex === hobbies[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500); // Pause at the end of word
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % hobbies.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Deleting is faster than typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <p className="typewritter-container">
      In my free time, you can catch me:{" "}
      <span className="typewritter-text">
        {`${hobbies[index].substring(0, subIndex)}`}
      </span>
    </p>
  );
};

export default HobbiesTypewriter;