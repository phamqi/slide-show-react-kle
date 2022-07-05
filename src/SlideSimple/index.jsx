import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles.module.scss';

Slide.propTypes = {
  data: PropTypes.array,
};

function Slide({ data, styles, children, btnNext, btnPrev }) {
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
  const [randomValue, setRandomValue] = useState(
    Math.random().toString(36).substring(2, 7)
  );

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
    carouselSlickDots,
    carouselBlockText,
    carouselBlockTextName,
    carouselBlockTextInfor,
    carouselBlockTextLink;
  useMemo(() => {
    console.log('random value', randomValue);
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
      if (styles.carouselBlockText) {
        let carouselBlockTextA = JSON.stringify(styles.carouselBlockText);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselBlockTextB = carouselBlockTextA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselBlockTextA = carouselBlockTextB;
          if (i === myCharLenght - 1) {
            let carouselBlockTextC = carouselBlockTextB.replaceAll(`,`, `;`);
            carouselBlockText = carouselBlockTextC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselBlockTextName) {
        let carouselBlockTextNameA = JSON.stringify(styles.carouselBlockTextName);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselBlockTextNameB = carouselBlockTextNameA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselBlockTextNameA = carouselBlockTextNameB;
          if (i === myCharLenght - 1) {
            let carouselBlockTextNameC = carouselBlockTextNameB.replaceAll(`,`, `;`);
            carouselBlockTextName = carouselBlockTextNameC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselBlockTextInfor) {
        let carouselBlockTextInforA = JSON.stringify(styles.carouselBlockTextInfor);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselBlockTextInforB = carouselBlockTextInforA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselBlockTextInforA = carouselBlockTextInforB;
          if (i === myCharLenght - 1) {
            let carouselBlockTextInforC = carouselBlockTextInforB.replaceAll(`,`, `;`);
            carouselBlockTextInfor = carouselBlockTextInforC.replaceAll(`"`, ' ');
          }
        }
      }
      if (styles.carouselBlockTextLink) {
        let carouselBlockTextLinkA = JSON.stringify(styles.carouselBlockTextLink);
        for (var i = 0; i < myCharLenght; i++) {
          let carouselBlockTextLinkB = carouselBlockTextLinkA.replaceAll(
            myChar[i],
            `-${myChar[i].toLowerCase()}`
          );
          carouselBlockTextLinkA = carouselBlockTextLinkB;
          if (i === myCharLenght - 1) {
            let carouselBlockTextLinkC = carouselBlockTextLinkB.replaceAll(`,`, `;`);
            carouselBlockTextLink = carouselBlockTextLinkC.replaceAll(`"`, ' ');
          }
        }
      }
      const style = document.createElement('style');
      style.textContent = `
    ${
      styles.carousel
        ? `.carousel_${randomValue}${carousel}`
        : `.carousel_${randomValue} {position: relative;overflow: hidden;margin-left: auto;margin-right: auto; box-sizing: border-box;}`
    }
.carousel_${randomValue}:hover .carousel_button_${randomValue} {
  opacity: 1;
}
${
  styles.carousel_button
    ? `.carousel_button_${randomValue}${carouselButton}`
    : `.carousel_button_${randomValue} {opacity: 0;transform: translateY(-50%);background-color: rgba(0,0,0,  0.2);border: none;cursor: pointer;position: absolute;top: 50%;user-select: none;z-index: 10;color: rgba(255, 255, 255, 0.5);}`
}
${
  styles.carousel_button_prev
    ? `.carousel_button_prev_${randomValue}${carouselButtonPrev}`
    : `.carousel_button_prev_${randomValue} {left: 0;padding: 1rem;border-radius: 0 4px 4px 0;}`
}
${
  styles.carousel_button_next
    ? `.carousel_button_next_${randomValue}${carouselButtonNext}`
    : `.carousel_button_next_${randomValue} {right: 0;padding: 1rem;border-radius: 4px 0 0 4px;}`
}
.carousel_button_${randomValue}:hover.onHover {
  background-color: rgba(0,0,0, 0.4);
  color: rgba(255, 255, 255, 0.8);
}
${
  styles.carousel_items
    ? `.carousel_items_${randomValue}${carouselItems}`
    : `.carousel_items_${randomValue} {position: relative;overflow: hidden;width: 100%;height: 100vh; }`
}
${
  styles.carousel_image
    ? `.carousel_image_${randomValue}${carouselImage}`
    : `.carousel_image_${randomValue} {width: 100vw;height: 100vh;border-radius: 0px; object-fit: cover;object-position: center center;}`
}
${
  styles.carousel_slick_dots
    ? `.carousel_slick_dots_${randomValue}${carouselSlickDots}`
    : `.carousel_slick_dots_${randomValue} {font-size: 14px;line-height: 1.15;text-size-adjust: 100%;box-sizing: border-box;margin:0px; padding: 0px;position: absolute;bottom: 30px;display: flex;-webkit-box-pack: center; justify-content:center;width: 100%;}`
}
${
  styles.carousel_slick_dot
    ? `.carousel_slick_dot_${randomValue}${carouselSlickDot}`
    : `.carousel_slick_dot_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;}`
}
${
  styles.carousel_slick_dot_active
    ? `.carousel_slick_dot_active_${randomValue}${carouselSlickDotActive}`
    : `.carousel_slick_dot_active_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;opacity: 1;}`
}
  ${
    styles.carousel_item
      ? `.carousel_item_${randomValue}${carouselItem}`
      : `.carousel_item_${randomValue} {width: 100%;position: absolute;opacity: 1;}`
  }
    ${
      styles.carousel_item_active
        ? `.carousel_item_active_${randomValue}${carouselItemActive}`
        : `.carousel_item_active_${randomValue} {z-index: 1;opacity: 1;animation: slideAnimation 0.5s ease-in-out;}`
    }
    ${
      styles.carousel_block_text
        ? `.carousel_block_text_${randomValue}${carouselBlockText}`
        : `.carousel_block_text_${randomValue} { width:fit-content; position: absolute; top: 50%; transform: translateY(-100%); left: 6%; padding: 20px; border-radius: 20px; background: rgba(255,255,255,0.65); }`
    }
    ${
      styles.carousel_block_text_name
        ? `.carousel_block_text_${randomValue}${carouselBlockTextName}`
        : `.carousel_block_text_${randomValue} { position: absolute; top: 50%; transform: translateY(-100%); left: 6%; padding: 20px; border-radius: 20px; background: rgba(255,255,255,0.65); }`
    }
    ${
      styles.carousel_block_text_infor
        ? `.carousel_block_text_infor_${randomValue}${carouselBlockTextInfor}`
        : `.carousel_block_text_infor_${randomValue} { max-width: 30vw; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }`
    }
    ${
      styles.carousel_block_text_link
        ? `.carousel_block_text_link_${randomValue}${carouselBlockTextLink}`
        : `.carousel_block_text_link_${randomValue}  { padding: 10px; font-weight: 600; color: black; }`
    }
    
@keyframes slideAnimation {
  from {
    transform: translateX(var(--from));
    opacity: 0.5;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
  `;
      document.head.appendChild(style);
    } catch (error) {
      const style = document.createElement('style');
      style.textContent = `.carousel_${randomValue} {position: relative;overflow: hidden;margin-left: auto;margin-right: auto; box-sizing: border-box;}.carousel_${randomValue}:hover .carousel_button_${randomValue} {opacity: 1;}.carousel_button_${randomValue} {opacity: 0;transform: translateY(-50%);background-color: rgba(0,0,0,  0.2);border: none;cursor: pointer;position: absolute;top: 50%;user-select: none;z-index: 10;color: rgba(255, 255, 255, 0.5);}.carousel_button_prev_${randomValue} {left: 0;padding: 1rem ;border-radius: 0 4px 4px 0;}.carousel_button_next_${randomValue} {right: 0;padding: 1rem;border-radius: 4px 0 0 4px;}.carousel_button_${randomValue}:hover.onHover {background-color: rgba(0,0,0, 0.4);color: rgba(255, 255, 255, 0.8);}.carousel_items_${randomValue} {position: relative;overflow: hidden;width: 100%;height: 100vh; }.carousel_image_${randomValue} {width: 100vw;height: 100vh;border-radius: 0px; object-fit: cover;object-position: center center;}.carousel_slick_dots_${randomValue} {font-size: 14px;line-height: 1.15;text-size-adjust: 100%;box-sizing: border-box;margin:0px; padding: 0px;position: absolute;bottom: 30px;display: flex;-webkit-box-pack: center; justify-content:center;width: 100%;}.carousel_slick_dot_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;}.carousel_slick_dot_active_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;opacity: 1;}.carousel_item_${randomValue} {width: 100%;position: absolute;opacity: 1;}.carousel_item_active {z-index: 1;opacity: 1;animation: slideAnimation 0.5s ease-in-out;}.carousel_block_text_${randomValue} {width:fit-content; position: absolute; top: 50%; transform: translateY(-100%); left: 6%; padding: 20px; border-radius: 20px; background: rgba(255,255,255,0.65); }.carousel_block_text_name_${randomValue} {padding: 0px;margin: 0px;}.carousel_block_text_infor_${randomValue} { max-width: 30vw; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }.carousel_block_text_link_${randomValue} { padding: 10px; font-weight: 600; color: black; }@keyframes slideAnimation {from {transform: translateX(var(--from); opacity: 0.5;);}to {transform: translateX(0); opacity: 1;}}`;
      document.head.appendChild(style);
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const countSlide = data.length;
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
      className={`carousel_${randomValue}`}
    >
      <ul className={`carousel_slick_dots_${randomValue}`}>
        {data.map((slide, index) => (
          <li
            key={index}
            className={
              index === currentSlide
                ? `carousel_slick_dot_active_${randomValue}`
                : `carousel_slick_dot_${randomValue}`
            }
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
      <button
        onClick={() => prevSlide()}
        className={`carousel_button_${randomValue}  carousel_button_prev_${randomValue} onHover`}
      >
        {btnPrev ? btnPrev : 'Prev'}
      </button>
      <button
        onClick={() => nextSlide()}
        className={`carousel_button_${randomValue}  carousel_button_next_${randomValue} onHover`}
      >
        {btnNext ? btnNext : 'Next'}
      </button>
      <div style={{ '--from': `${fromX}` }} className={`carousel_items_${randomValue}`}>
        {data.map((slide, index) => (
          <div
            key={index}
            className={
              index === currentSlide
                ? `carousel_item_${randomValue} carousel_item_active${randomValue}`
                : `carousel_item_${randomValue}`
            }
          >
            <img
              className={`carousel_image_${randomValue}`}
              src={slide.image}
              alt={slide.alt ? slide.alt : 'img'}
            />
            <div className={`carousel_block_text_${randomValue}`}>
              <h2 className={`carousel_block_text_name_${randomValue}`}>
                {slide.name ? slide.name : 'Some thing'}
              </h2>
              <p className={`carousel_block_text_infor_${randomValue}`}>
                {slide.infor
                  ? slide.infor
                  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fugiat quasi aut earum id quos quam voluptas, adipisci mollitia, voluptates dolore aperiam unde nihil. Exercitationem ipsum culpa quam maiores aliquid.'}
              </p>
              <a className={`carousel_block_text_link_${randomValue}`} href={slide.link}>
                {slide.value ? slide.value : 'View'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Slide);
