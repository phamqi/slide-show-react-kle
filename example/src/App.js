import React from 'react';

import { Slide, SlideSimple } from 'slide-show-react-kle';
import { dataSlideSimple } from './dataSlideSimple';
import { dataSlidePicture } from './dataSlidePicture';
import 'slide-show-react-kle/dist/index.css';

const App = () => {
  const styles = {
    carousel: {
      width: '50%',
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };
  return (
    <div>
      <h1>Slide swiper</h1>
      <h2>Simple slide</h2>
      <SlideSimple data={dataSlideSimple} />;<h2>Simple slide customize css</h2>
      <div>
        <SlideSimple data={dataSlideSimple} styles={styles} />
      </div>
      <h2>Simple slide customize prev button</h2>
      <SlideSimple
        data={dataSlideSimple}
        btnPrev={<p className="btnPrevCustom">Prev</p>}
      />
      <h2>Slide with picture</h2>
      <Slide data={dataSlidePicture} />
    </div>
  );
};

export default App;
