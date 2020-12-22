import React from 'react';
import preloaderGif from '../../images/loader.gif';

const Preloader = () => {
  return (
    <div>
      <img src={preloaderGif} alt="preloader gif" />
    </div>
  );
};

export default Preloader;
