# slide-show-react-kle

> Slideshow component click + swipe (mobile event)

[![NPM](https://img.shields.io/npm/v/slide-show-react-kle.svg)](https://www.npmjs.com/package/slide-show-react-kle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

Using npm:

```bash
npm install --save slide-show-react-kle
```

## Node:

Import your css files or makeStyles

```jsx
const makeStyles = {
    class: { // .class_randomValue { /* styles */ }
      color: 'white',
    },
    left_arrow: { // .left_arrow_ba7gh { /* styles */ }
      color: 'white',
    },
    'section_wraper::after':{ //.section_wraper_ba7gh::after { /* styles */ }
    },
    '/left_arrow': { // .left_arrow { /* styles */ }
      boxSizing: 'border-box',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    '?h3': { // h3 { /* styles */ }
       zIndex: 9,
    },
    '/left_arrow:hover': { // .left_arrow:hover : {/* styles */}
    },
    '?a:visited': { // a:visited { /*styles */}
    },
     '@keyframes name': `{0%{tranform: translateX(10px)}, 100%{}}`,
```

## Slideshow BanhMy

```jsx
import { BanhMy } from 'slide-show-react-kle';
```

```jsx
  const App = () => {
    return (
      <div>
        <BanhMy >
          {yourData.map((items) => (
            // your item //
          ))}
        </BanhMy>
      </div>
    );
  };
export default App;
```

### Examplpe

<a href='https://codesandbox.io/s/slideshowbanhmy-wolz7o' target="_blank" > view</a>

```jsx
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
      borderRadius: '5px',
      width: '80%',
      height: '80%',
      boxShadow: '0 0 3rem #666',
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
  return (
    <div>
      <BanhMy style={stylesBanhMy}>
        {data.map((item, index) => (
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
    </div>
  );
};
export default App;
```

Output:
<img src='https://i.imgur.com/uF06rB5.png' alt='banhMySlide'/>

### PropTypes

```jsx
  time: timeOut to next slide //default 5000ms
  style: makeStlyes,
  prevBtn: change icon prev button,
  nextBtn: change icon next button,
```

## Slideshow BanhBo

### Example

<a href='https://codesandbox.io/s/slideshowbanhbo-rrj9ox' target="_blank" > view</a>

```jsx
import { BanhMy } from 'slide-show-react-kle';
```

```jsx
const App = () => {
  const stylesBanhMy = {
    ///////
  };
  return (
    <div>
      <BanhBo style={stylesBanhMy} slash="|">
        {data.map((item, index) => (
          <div key={index} className="div_item">
            <div
              className="div_background"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <img className="img_background" src={item.img} alt="img"></img>
          </div>
        ))}
      </BanhBo>
    </div>
  );
};
export default App;
```

Output:
<img src='https://i.imgur.com/BbN3zer.png' alt='banhBoSlide'/>

### PropTypes

```jsx
  time: timeOut to next slide //default 5000ms
  style: makeStlyes,
  prevBtn: change icon prev button,
  nextBtn: change icon next button,
  slash: //defualt '/'
```

## Slideshow Pho

### Example

<a href='https://codesandbox.io/s/slideshowpho-822mbh' target="_blank" > view</a>

```jsx
import { Pho } from 'slide-show-react-kle';
```

```jsx
import React from 'react';

import { Slide, SlideSimple, Pho, BanhMy, BanhBo } from 'slide-show-react-kle';
import { dataSlideSimple } from './dataSlideSimple';
import { dataSlidePicture } from './dataSlidePicture';
import 'slide-show-react-kle/dist/index.css';
import { dataSlide } from './dataSlide';

const App = () => {
  const data = [{
  {
    img: 'https://picsum.photos/1024/767',
    title: 'Slide 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugiat quasi aut earum id quos quam voluptas, adipisci mollitia, voluptates dolore aperiam unde nihil. Exercitationem ipsum culpa quam maiores aliquid!',
    link: '#',
  },
  }]
  return (
      <Pho data={data} />
  );
};
export default App;
```

### PropTypes

```jsx
  data: array.isRequired,
  time: timeOut to next slide //default 5000ms
  style: makeStyles,
  prevBtn: change icon prev button,
  nextBtn: change icon next button,
  customATag: true to replace a tag , //defualt false
  textContentATag: replace text content of a tag // defualt 'View'
```

## Simple Slide

You need to import the data, <a href='https://codesandbox.io/s/slideshow-react-swipe-f0z5ze' target="_blank" >let try</a>

```jsx
import React from 'react'
import {SlideSimple} from 'slide-show-react-kle'

class Example extends Component {
  const images = [
{
    image: 'https://picsum.photos/1280/720',
    title: 'img1',
    name: 'image 1',
    infor:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugiat quasi aut earum id quos quam voluptas, adipisci mollitia, voluptates dolore aperiam unde nihil. Exercitationem ipsum culpa quam maiores aliquid',
    link: '#',
    value: 'View',
  },
  ]
  render() {
    return <SlideSimple data={images}  style={style}/>
  }
}
```

## Simple Slide- Customize Css

You can customize css

```jsx

import React from 'react'
import {SlideSimple} from 'slide-show-react-kle'

class Example extends Component {
  // add  css //
  const style = {
    carousel: {
      marginLeft: '20px',
      marginRight: '20px'
    }
    carousel_img : {
    }
  }
  const images = {
  }
  render() {
    return <SlideSimple data={images}  style={style}/>
  }
}
```

## Slide-Picture

What is a <a href='https://www.w3schools.com/tags/tag_picture.asp' >Picture Tag</a> ?
Use them to control when your layout can be adapted at a particular viewport or device size.
Import your data
You can customize css, prev/next button

```jsx
import React from 'react'
import {Slide} from 'slide-show-react-kle'

class Example extends Component {
  const images = [
 {
    xs: 'https://picsum.photos/576/768',
    sm: 'https://picsum.photos/768/576',
    md: 'https://picsum.photos/960/640',
    lg: 'https://picsum.photos/1024/768',
    xl: 'https://picsum.photos/1280/768',
    xxl: 'https://picsum.photos/1920/1080',
    title: 'img1',
    name: 'image 1',
    infor:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugiat quasi aut earum id quos quam voluptas, adipisci mollitia, voluptates dolore aperiam unde nihil. Exercitationem ipsum culpa quam maiores aliquid',
    link: '#',
    value: 'View',
  },
  ]
  render() {
    return <Slide data={images} style={...} btnPrev={...}/>
  }
}
```

## License

MIT © [phamqi](https://github.com/phamqi)
