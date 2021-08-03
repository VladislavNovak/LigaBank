/* eslint-disable no-console */
import React, {useState} from 'react';
import {Header, Main, Footer} from '..';
import {useScrollPosition} from '../../js/scroll';

const Container = () => {

  const [hideHeaderOnScroll, setHeaderHideOnScroll] = useState(false);

  useScrollPosition(({prevPos, currPos}) => {
    const isShow = currPos.y < prevPos.y;
    if (isShow !== hideHeaderOnScroll) {
      setHeaderHideOnScroll(isShow);
    }
  }, [hideHeaderOnScroll], false, false, 100);

  return (
    <div className="container">
      <Header isHeaderHidden={hideHeaderOnScroll}/>
      <Main />
      <Footer />
    </div>
  );
};

export default Container;
