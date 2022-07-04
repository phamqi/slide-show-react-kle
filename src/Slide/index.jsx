import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles.module.scss';

Slide.propTypes = {
  dataSlides: PropTypes.array,
};

function Slide({ dataSlides, styles, children }) {
  const myChar = [
    'R',
    'L',
    'C',
    'Q',
    'W',
    'E',
    'A',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'B',
    'Z',
    'X',
    'C',
    'V',
    'N',
    'M',
  ];
  const myCharLenght = myChar.length;
  var carousel,
    carouselButton,
    carouselButtonPrev,
    carouselButtonNext,
    carouselItems,
    carouselItem,
    carouselItemActive,
    carouselImage,
    carouselSlickDot,
    carouselSlickDotActive,
    carouselSlickDots;

  useMemo(() => {
    try {
      if (styles.carousel) {
        var carouselA = JSON.stringify(styles.carousel);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselB = carouselA.replaceAll(myChar[i], `-${myChar[i].toLowerCase()}`);
          carouselA = carouselB;
          if (i === myCharLenght - 1) {
            let carouselC = carouselB.replaceAll(`,`, `;`);
            carousel = carouselC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselButton) {
        let carouselButtonA = JSON.stringify(styles.carouselButton);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselButtonB = carouselButtonA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselButtonA = carouselButtonB;
          if (i === myCharLenght - 1) {
            let carouselButtonC = carouselButtonB.replaceAll(`,`, `;`);
            carouselButton = carouselButtonC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselButton) {
        let carouselButtonA = JSON.stringify(styles.carouselButton);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselButtonB = carouselButtonA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselButtonA = carouselButtonB;
          if (i === myCharLenght - 1) {
            let carouselButtonC = carouselButtonB.replaceAll(`,`, `;`);
            carouselButton = carouselButtonC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselButtonPrev) {
        let carouselButtonPrevA = JSON.stringify(styles.carouselButtonPrev);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselButtonPrevB = carouselButtonPrevA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselButtonPrevA = carouselButtonPrevB;
          if (i === myCharLenght - 1) {
            let carouselButtonPrevC = carouselButtonPrevB.replaceAll(`,`, `;`);
            carouselButtonPrev = carouselButtonPrevC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselButtonNext) {
        let carouselButtonNextA = JSON.stringify(styles.carouselButtonNext);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselButtonNextB = carouselButtonNextA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselButtonNextA = carouselButtonNextB;
          if (i === myCharLenght - 1) {
            let carouselButtonNextC = carouselButtonNextB.replaceAll(`,`, `;`);
            carouselButtonNext = carouselButtonNextC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselItems) {
        let carouselItemsA = JSON.stringify(styles.carouselItems);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselItemsB = carouselItemsA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselItemsA = carouselItemsB;
          if (i === myCharLenght - 1) {
            let carouselItemsC = carouselItemsB.replaceAll(`,`, `;`);
            carouselItems = carouselItemsC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselItem) {
        let carouselItemA = JSON.stringify(styles.carouselItem);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselItemB = carouselItemA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselItemA = carouselItemB;
          if (i === myCharLenght - 1) {
            let carouselItemC = carouselItemB.replaceAll(`,`, `;`);
            carouselItem = carouselItemC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselItemActive) {
        let carouselItemActiveA = JSON.stringify(styles.carouselItemActive);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselItemActiveB = carouselItemActiveA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselItemActiveA = carouselItemActiveB;
          if (i === myCharLenght - 1) {
            let carouselItemActiveC = carouselItemActiveB.replaceAll(`,`, `;`);
            carouselItemActive = carouselItemActiveC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselImage) {
        let carouselImageA = JSON.stringify(styles.carouselImage);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselImageB = carouselImageA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselImageA = carouselImageB;
          if (i === myCharLenght - 1) {
            let carouselImageC = carouselImageB.replaceAll(`,`, `;`);
            carouselImage = carouselImageC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselSlickDots) {
        let carouselSlickDotsA = JSON.stringify(styles.carouselSlickDots);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselSlickDotsB = carouselSlickDotsA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselSlickDotsA = carouselSlickDotsB;
          if (i === myCharLenght - 1) {
            let carouselSlickDotsC = carouselSlickDotsB.replaceAll(`,`, `;`);
            carouselSlickDots = carouselSlickDotsC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselSlickDot) {
        let carouselSlickDotA = JSON.stringify(styles.carouselSlickDot);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselSlickDotB = carouselSlickDotA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselSlickDotA = carouselSlickDotB;
          if (i === myCharLenght - 1) {
            let carouselSlickDotC = carouselSlickDotB.replaceAll(`,`, `;`);
            carouselSlickDot = carouselSlickDotC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselSlickDotActive) {
        let carouselSlickDotActiveA = JSON.stringify(styles.carouselSlickDotActive);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselSlickDotActiveB = carouselSlickDotActiveA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselSlickDotActiveA = carouselSlickDotActiveB;
          if (i === myCharLenght - 1) {
            let carouselSlickDotActiveC = carouselSlickDotActiveB.replaceAll(`,`, `;`);
            carouselSlickDotActive = carouselSlickDotActiveC.replaceAll(`"`, ' ');
          }
        }
      }
      const style = document.createElement('style');
      style.textContent = `
    ${
      styles.carousel
        ? `.carousel${carousel}`
        : '.carousel {position: relative;overflow: hidden;margin-left: auto;margin-right: auto; box-sizing: border-box;}'
    }
.carousel:hover .carousel_button {
  opacity: 1;
}
${
  styles.carousel_button
    ? `.carousel_button${carouselButton}`
    : '.carousel_button {opacity: 0;transform: translateY(-50%);background-color: rgba(0,0,0,  0.2);border: none;cursor: pointer;position: absolute;top: 50%;user-select: none;z-index: 10;color: rgba(255, 255, 255, 0.5);}'
}
${
  styles.carousel_button_prev
    ? `.carousel_button_prev${carouselButtonPrev}`
    : '.carousel_button_prev {left: 0;padding: 1rem 0 1rem 1rem;border-radius: 0 4px 4px 0;}'
}
${
  styles.carousel_button_next
    ? `.carousel_button_next${carouselButtonNext}`
    : '.carousel_button_next {right: 0;padding: 1rem 1rem 1rem 0rem;border-radius: 4px 0 0 4px;}'
}
.carousel_button:hover.onHover {
  background-color: rgba(0,0,0, 0.4);
  color: rgba(255, 255, 255, 0.8);
}
${
  styles.carousel_items
    ? `.carousel_items${carouselItems}`
    : '.carousel_items {position: relative;overflow: hidden;width: 100%;height: calc(100vh - 40px); }'
}
${
  styles.carousel_image
    ? `.carousel_image${carouselImage}`
    : '.carousel_image {width: 100vw;height: 100vh;border-radius: 0px; object-fit: cover;object-position: center center;}'
}
${
  styles.carousel_slick_dots
    ? `.carousel_slick_dots${carouselSlickDots}`
    : '.carousel_slick_dots {font-size: 14px;line-height: 1.15;text-size-adjust: 100%;box-sizing: border-box;margin:0px; padding: 0px;position: absolute;bottom: 30px;display: flex;-webkit-box-pack: center; justify-content:center;width: 100%;}'
}
${
  styles.carousel_slick_dot
    ? `.carousel_slick_dot${carouselSlickDot}`
    : '.carousel_slick_dot {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;}'
}
${
  styles.carousel_slick_dot_active
    ? `.carousel_slick_dot${carouselSlickDotActive}`
    : '.carousel_slick_dot_active {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;opacity: 1;}'
}
  ${
    styles.carousel_item
      ? `.carousel_item${carouselItem}`
      : '.carousel_item {width: 100%;position: absolute;opacity: 1;}'
  }
    ${
      styles.carousel_item_active
        ? `.carousel_item_active${carouselItemActive}`
        : '.carousel_item_active {z-index: 1;opacity: 1;animation: slideAnimation 0.5s ease-in-out;}'
    }
@keyframes slideAnimation {
  from {
    transform: translateX(var(--from));
  }
  to {
    transform: translateX(0);
  }
}
  `;
      document.head.appendChild(style);
    } catch (error) {
      console.log('something went wrong, css default has been active');
      const style = document.createElement('style');
      style.textContent = `.carousel {position: relative;overflow: hidden;margin-left: auto;margin-right: auto; box-sizing: border-box;}.carousel:hover .carousel_button {opacity: 1;}.carousel_button {opacity: 0;transform: translateY(-50%);background-color: rgba(0,0,0,  0.2);border: none;cursor: pointer;position: absolute;top: 50%;user-select: none;z-index: 10;color: rgba(255, 255, 255, 0.5);}.carousel_button_prev {left: 0;padding: 1rem 0 1rem 1rem;border-radius: 0 4px 4px 0;}.carousel_button_next {right: 0;padding: 1rem 1rem 1rem 0rem;border-radius: 4px 0 0 4px;}.carousel_button:hover.onHover {
  background-color: rgba(0,0,0, 0.4);
  color: rgba(255, 255, 255, 0.8);}.carousel_items {position: relative;overflow: hidden;width: 100%;height: calc(100vh - 40px); }.carousel_image {width: 100vw;height: 100vh;border-radius: 0px; object-fit: cover;object-position: center center;}.carousel_slick_dots {font-size: 14px;line-height: 1.15;text-size-adjust: 100%;box-sizing: border-box;margin:0px; padding: 0px;position: absolute;bottom: 30px;display: flex;-webkit-box-pack: center; justify-content:center;width: 100%;}.carousel_slick_dot {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;}.carousel_slick_dot_active {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;opacity: 1;}.carousel_item {width: 100%;position: absolute;opacity: 1;}.carousel_item_active {z-index: 1;opacity: 1;animation: slideAnimation 0.5s ease-in-out;}@keyframes slideAnimation {from {transform: translateX(var(--from));}to {transform: translateX(0);}}`;
      document.head.appendChild(style);
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const countSlide = dataSlides.length;
  const [fromX, SetFromX] = useState('70%');
  const nextSlide = () => {
    SetFromX('70%');
    setCurrentSlide(currentSlide === countSlide - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    SetFromX('-70%');
    setCurrentSlide(currentSlide === 0 ? countSlide - 1 : currentSlide - 1);
  };
  var startX, moveX;
  const handelMoveStart = (e) => {
    startX = e.touches[0].clientX;
  };
  const handelMove = (e) => {
    moveX = e.touches[0].clientX;
  };
  const handelMoveEnd = (e) => {
    if (startX + 30 < moveX) {
      prevSlide();
    }
    if (startX - 30 > moveX) {
      nextSlide();
    }
  };
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      SetFromX('70%');
      setCurrentSlide(currentSlide === countSlide - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => {
      resetTimeout();
    };
  }, [currentSlide, countSlide]);
  return (
    <div
      onTouchStart={handelMoveStart}
      onTouchEnd={handelMoveEnd}
      onTouchMove={handelMove}
      className="carousel"
    >
      <ul className="carousel_slick_dots">
        {dataSlides.map((slide, index) => (
          <li
            key={slide.id}
            className={
              index === currentSlide ? 'carousel_slick_dot_active' : 'carousel_slick_dot'
            }
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
      <button
        onClick={() => prevSlide()}
        className="carousel_button carousel_button_prev onHover"
      >
        Pre
      </button>
      <button
        onClick={() => nextSlide()}
        className="carousel_button carousel_button_next onHover"
      >
        Next
      </button>
      <div style={{ '--from': `${fromX}` }} className="carousel_items">
        {dataSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              index === currentSlide
                ? 'carousel_item carousel_item_active'
                : 'carousel_item'
            }
          >
            <picture>
              <source
                media="(min-width: 3840px)"
                srcSet={slide.image_lg}
                alt={slide.title}
              />
              <source
                media="(min-width: 2560px)"
                srcSet={slide.image_xl}
                alt={slide.title}
              />
              <source
                media="(min-width: 1200px)"
                srcSet={slide.image_xl}
                alt={slide.title}
              />
              <source media="(min-width: 900px)" srcSet={slide.image} alt={slide.title} />
              <source
                media="(min-width: 600px)"
                srcSet={slide.img_tb}
                alt={slide.title}
              />
              <source media="(min-width: 0px)" srcSet={slide.img_mb} alt={slide.title} />
              <img className="carousel-image" src={slide.image} alt={slide.title} />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Slide);
