import React from 'react';
import slider1 from '../../img/workharder.jpg';
import slider2 from '../../img/retrozone.jpg';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className='slider'>

      <AutoplaySlider
        // play
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}>

        <div data-src={slider1} />
        <div data-src={slider2} />
      </AutoplaySlider>

    </div>
  );
};

export default Slider;
