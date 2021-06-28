import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Scrambler = ({text, elClassName, obfuscator = `.....//\\||---&qWfD?#-&L&56%$+&%4L9&$`}) => {

  const shuffle = (word) => [...word].sort(() => 0.5 - Math.random()).join(``);

  const gen = () => {
    let textArray = [];
    if (text) {
      // variations with change in size
      for (let i = text.length; i >= 0; i--) {
        let tmp = shuffle(obfuscator);
        tmp = tmp.slice(0, text.length - i);
        textArray.push(tmp);
      }
      // variations without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(text));
      }
      // normal text
      textArray.push(text);
    }

    return textArray;
  };

  const [textArray] = useState(gen);
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    let interval = null;
    setTimeout(() => {}, 2000);
    if (activeText < textArray.length - 1) {
      interval = setInterval(() => setActiveText((prevState) => (prevState + 1)), 120);
    }

    return () => clearInterval(interval);
  }, [activeText]);

  return (
    <span className={elClassName}>{textArray[activeText]}</span>
  );
};

Scrambler.propTypes = {
  text: PropTypes.string.isRequired,
  elClassName: PropTypes.string.isRequired,
  obfuscator: PropTypes.string,
};

export default Scrambler;
