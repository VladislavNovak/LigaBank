import React from 'react';
// import {Link} from "react-scroll";

const Branches = () => {

  return (
    <section className="branches">
      <h1 className="visually-hidden">Location</h1>
      <h2 className="branches__caption">Tokyo</h2>
      {/* <p className="idea_text">Your favorite bank</p> */}
      {/* <a href="" className="idea__button">Find out more</a> */}
      <div className="map">
        <section className="map__inner" id="map" />
      </div>
    </section>
  );
};

export default Branches;
