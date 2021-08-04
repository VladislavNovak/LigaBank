import React, {useState} from 'react';
import {Header, CoreScreenMap, Footer} from '..';
import {useScrollPosition} from '../../js/scroll';

const ScreenMap = () => {

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
      <CoreScreenMap />
      <Footer />
    </div>
  );
};

export default ScreenMap;
