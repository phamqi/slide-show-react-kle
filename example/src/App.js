import React from 'react';

import { Slide, SlideSimple, Pho, BanhMy, BanhBo } from 'slide-show-react-kle';
import { dataSlideSimple } from './dataSlideSimple';
import { dataSlidePicture } from './dataSlidePicture';
import 'slide-show-react-kle/dist/index.css';
import { dataSlide } from './dataSlide';

const App = () => {
  const stylesBanhMy = {
    right_arrow: {
      color: 'white',
    },
    left_arrow: {
      color: 'white',
    },
    '/div_item': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    '/div_background': {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      boxSizing: 'border-box',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: 'blur(2px)',
    },
    '/img_background': {
      borderRadius: '8px',
      width: '80%',
      height: '80%',
      boxShadow: '0 0 10x #666',
      zIndex: 2,
    },
    '/div_txt': {
      bottom: '20%',
      zIndex: 3,
      position: 'absolute',
      left: '20%',
    },
    '?h3': {
      fontSize: '2.5rem',
      color: 'white',
      margin: '5px 0',
    },
    '/a_link': {
      fontSize: '1.5rem',
      color: '#cdcbcb',
      zIndex: 9,
    },
    '?a.a_link:visited': {
      color: '#cdcbcb',
    },
  };
  const styles = {
    carousel: {
      position: 'absolute',
      width: '70%',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
      '-webkit-box': 'vertical',
    },
    '@keyframes name': `{0%{tranform: translateX(10px)}, 100%{}}`,
    '/abc::after': {
      position: 'absolute',
      content: '',
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
      <Pho data={dataSlide} style={styles} />
      <h2>Simple slide customize prev button</h2>
      <BanhMy style={stylesBanhMy}>
        {dataSlide.map((item, index) => (
          <div key={index} className="div_item">
            <div
              className="div_background"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <img className="img_background" src={item.img} alt="img"></img>
            <div className="div_txt">
              <h3>{item.title}</h3>
              <a className="a_link" href={item.link}>
                View
              </a>
            </div>
          </div>
        ))}
      </BanhMy>
      <BanhBo style={stylesBanhMy} slash="|">
        {dataSlide.map((item, index) => (
          <div key={index} className="div_item">
            <div
              className="div_background"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <img className="img_background" src={item.img} alt="img"></img>
          </div>
        ))}
      </BanhBo>
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
