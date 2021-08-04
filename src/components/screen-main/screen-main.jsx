import React, {useState} from 'react';
import {Header, CoreScreenMain, Footer} from '..';
import {useScrollPosition} from '../../js/scroll';

const ScreenMain = () => {

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
      <CoreScreenMain />
      <Footer />
    </div>
  );
};

export default ScreenMain;
