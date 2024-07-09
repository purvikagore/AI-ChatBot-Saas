// import React from "react";
// import { TypeAnimation } from "react-type-animation";

// const TypingAnim = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed once, initially
//         "Something on your mind?",
//         1000,
//         "Need answers?",
//         1000,
//         "You're at the right place!",
//         2000,
//       ]}
//       speed={50}
//       style={{
//         fontSize: "60px",
//         color: "white",
//         display: "inline-block",
//         textShadow: "1px 1px 200px #000,",
//       }}
//       repeat={Infinity}
//     />
//   );
// }

// export default TypingAnim;



import React, { useState, useEffect } from 'react';

const TypingAnim = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = [
    'Something on your mind?',
    'Need answers?',
    "You're at the right place!",
  ];
  const speed = 50;
  const pause = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index % phrases.length];
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.substring(0, text.length + 1));
      } else {
        setTimeout(() => {
          setText('');
          setIndex((prev) => prev + 1);
        }, pause);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, index]);

  return (
    <div
      style={{
        fontSize: '60px',
        color: 'white',
        display: 'inline-block',
        textShadow: '1px 1px 200px #000',
      }}
    >
      {text}
    </div>
  );
};

export default TypingAnim;
