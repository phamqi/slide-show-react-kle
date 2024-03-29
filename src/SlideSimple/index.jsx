import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import useFormatCss from '../useFormatcss';

Slide.propTypes = {
  data: PropTypes.array,
  style: PropTypes.object,
  btnNext: PropTypes.any,
  btnPrev: PropTypes.any,
};

function Slide({ data, style, btnNext, btnPrev, time = 5000 }) {
  const { contentCss, randomValue } = useFormatCss(style);
  useMemo(() => {
    const style = document.createElement('style');
    style.textContent = contentCss;
    document.head.appendChild(style);
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
    }, time);
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
                ? `carousel_item_${randomValue}   carousel_item_active_${randomValue}`
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
