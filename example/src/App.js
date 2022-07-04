import React from 'react';

import { Slide } from 'slide-show-react-kle';
import { dataSlides } from './dataSlides';
import 'slide-show-react-kle/dist/index.css';

const App = () => {
  return <Slide dataSlides={dataSlides} />;
};

export default App;
