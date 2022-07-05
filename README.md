# slide-show-react-kle

> Slide show component + swiper

[![NPM](https://img.shields.io/npm/v/slide-show-react-kle.svg)](https://www.npmjs.com/package/slide-show-react-kle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save slide-show-react-kle
```

## Simple Slide

You need to import the data

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
  // customize css //
  const style = {
    carousel: {
      marginLeft: '20px',
      marginRight: '20px'
    }
    carousel_img : {
      // your css//
    }
  }
  const images = {
  }
  render() {
    return <SlideSimple data={images}  style={style}/>
  }
}
```

## Simple Slide- Customize Btn

And icon of next, prev button

```jsx

import React from 'react'
import {SlideSimple} from 'slide-show-react-kle'

class Example extends Component {
  // customize icon of prev button (btnPrev) and next button (btnNext)//
  const yourBtnPrev = <p>myPrevIcon</p>
  const yourBtnNext = ......
  const images = {
    ......
  }
  render() {
    return <SlideSimple btnPrev={yourBtnPrev} btnNext = {......} data={images} />
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
