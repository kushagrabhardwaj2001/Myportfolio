import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const RotatingText = ({ words, period }) => {
  const [index, setIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(''); 
  const [delta, setDelta] = useState(100 - Math.random() * 50); // Decrease initial delta for faster speed

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = index % words.length;
    let fullText = words[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setIndex(prevIndex => prevIndex + 1);
      setDelta(250); // Adjust delay before typing starts again
    }
  };

  return (
    <Box>
      <Text as="span" className="wrap" fontSize={'3rem'}>{text}</Text>
    </Box>
  );
};

export default RotatingText;
