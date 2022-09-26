import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import useFormatCss from './useFormatCss';
import LeftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';

BanhMy.propTypes = {
  time: PropTypes.number,
  style: PropTypes.object,
  prevBtn: PropTypes.any,
  nextBtn: PropTypes.any,
};
function BanhMy({ style, time = 5000, prevBtn, nextBtn, children }) {
  const section = useRef();
  const [dots, setDots] = useState([]);
  const [active, setActive] = useState(0);
  const [maxLength, setMaxlength] = useState(0);
  const [sectionWidth, setSectionWidth] = useState(0);
  const timeoutRef = useRef(null);
  const { contentCss, randomValue } = useFormatCss(style);
  let distance = 0;
  useMemo(() => {
    const style = document.createElement('style');
    style.textContent = contentCss;
    style.type = 'text/css';
    document.head.appendChild(style);
  }, []);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const getLeft = (section) => {
    const left = section.scrollLeft / section.clientWidth;
    return parseInt(left.toFixed());
  };
  const nextSlide = (section) => {
    if (section.scrollLeft >= maxLength * section.clientWidth - 100) {
      section.scrollBy({
        left: -section.clientWidth * maxLength,
        behavior: 'smooth',
      });
      distance = 0;
      setActive(0);
    } else {
      distance = 0;
      section.scrollBy({
        left: (distance += section.clientWidth),
        behavior: 'smooth',
      });
      const left = getLeft(section);
      setActive(left + 1);
    }
  };
  const prevSilde = (section) => {
    if (section.scrollLeft < 100) {
      distance = section.clientWidth * maxLength;
      section.scrollBy({
        left: distance,
        behavior: 'smooth',
      });
      setActive(maxLength);
    } else {
      distance = 0;
      section.scrollBy({
        left: (distance -= section.clientWidth),
        behavior: 'smooth',
      });
      const left = getLeft(section);
      setActive(left - 1);
    }
  };
  const dotClick = (section, index) => {
    let left = getLeft(section.current);
    if (index === left) {
    } else {
      section.current.scrollBy({
        left: section.current.clientWidth * (index - left),
        behavior: 'smooth',
      });
    }
    setActive(index);
  };
  useEffect(() => {
    section.current.scrollLeft = 0;
    function preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    section.current.addEventListener(
      'wheel',
      function (event) {
        preventScroll(event);
        if (event.deltaY < 0) {
          prevSilde(section.current);
        } else if (event.deltaY > 0) {
          nextSlide(section.current);
        }
      },
      { passive: false }
    );
    let startX, moveX;
    section.current.addEventListener(
      'touchstart',
      function (e) {
        startX = e.touches[0].clientX;
      },
      { passive: false }
    );
    section.current.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault();
        moveX = e.touches[0].clientX;
      },
      { passive: false }
    );
    section.current.addEventListener(
      'touchend',
      function (e) {
        if (startX + 90 < moveX) {
          prevSilde(section.current);
        }
        if (startX - 90 > moveX) {
          nextSlide(section.current);
        }
      },
      { passive: false }
    );
  }, [sectionWidth]);
  useEffect(() => {
    let arrayChild = Array.from(section.current.children);
    setSectionWidth(section.current.clientWidth);
    arrayChild.forEach((element) => {
      if (sectionWidth > 0) {
        element.style.overflow = 'hidden';
        element.style.width = `${sectionWidth}px`;
        element.style.flex = `0 0 auto`;
        element.style.scrollSnapAlign = 'start';
      }
    });
    setDots(arrayChild);
    setMaxlength(section.current.children.length - 1);
    window.addEventListener('resize', () => {
      setSectionWidth(section.current.clientWidth);
    });
  }, [sectionWidth]);
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide(section.current);
    }, time);
    return () => {
      resetTimeout();
    };
  }, [active, sectionWidth]);
  return (
    <div
      id="section__wrapper"
      className={`container  section__wrapper  section__wrapper_${randomValue} section___${randomValue}wrapper`}
    >
      <div
        className={`section___${randomValue}wrap__btn section__wrap__btn_${randomValue}  section__wrap__btn `}
      >
        <button
          className={`section__btn_${randomValue}  btn__prev_${randomValue} section__btn btn__prev`}
          onClick={() => prevSilde(section.current)}
        >
          {prevBtn ? prevBtn : <LeftArrow randomValue={randomValue} />}
        </button>
      </div>
      <div
        className={` section___${randomValue}wrap__btn section__wrap__btn_${randomValue} section__wrap__btn section__btn__next_${randomValue} section__btn__next`}
      >
        <button
          className={`section__btn_${randomValue}  btn__next_${randomValue} section__btn btn__next`}
          onClick={() => nextSlide(section.current)}
        >
          {nextBtn ? nextBtn : <RightArrow randomValue={randomValue} />}
        </button>
      </div>
      <div
        ref={section}
        className={`section_${randomValue} sec___${randomValue}tion section`}
      >
        {children}
      </div>
      <ul className={`section__dots_${randomValue} section__dots`}>
        {dots &&
          dots.map((item, index) => (
            <li
              key={index}
              className={
                active === index
                  ? `section__dot section__dot_${randomValue} section__dot-active_${randomValue}`
                  : `section__dot section__dot_${randomValue}`
              }
              onClick={(e) => {
                dotClick(section, index), { passive: false };
              }}
            ></li>
          ))}
      </ul>
    </div>
  );
}

export default memo(BanhMy);
