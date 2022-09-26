import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import useFormatCss from './useFormatCss';
import LeftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';

Pho.propTypes = {
  data: PropTypes.array.isRequired,
  time: PropTypes.number,
  style: PropTypes.object,
  prevBtn: PropTypes.any,
  nextBtn: PropTypes.any,
  customATag: PropTypes.bool,
  textContentATag: PropTypes.any,
};
function Pho({
  data,
  style,
  time = 5000,
  prevBtn,
  nextBtn,
  customATag,
  textContentATag = 'View',
}) {
  const section = useRef();
  const [active, setActive] = useState(0);
  const [sectionWidth, setSectionWidth] = useState(0);
  const maxLenght = data.length - 1;
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
    if (section.scrollLeft >= maxLenght * section.clientWidth - 100) {
      section.scrollBy({
        left: -section.clientWidth * maxLenght,
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
      distance = section.clientWidth * maxLenght;
      section.scrollBy({
        left: distance,
        behavior: 'smooth',
      });
      setActive(maxLenght);
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
    function preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    section.current.scrollLeft = 0;
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
        if (startX + 50 < moveX) {
          prevSilde(section.current);
        }
        if (startX - 50 > moveX) {
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
        element.style.boxSizing = 'border-box';
      }
    });
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
        {data.map((item, index) => (
          <div key={index} className={`section__item_${randomValue} section__item `}>
            <div
              className={`section__wrap__pic_${randomValue} section___${randomValue}wrap__pic section__wrap__pic`}
            >
              <img
                className={`section__pic_${randomValue}`}
                src={item.img && item.img}
                alt="img"
              />
            </div>
            <div className={`section__txt_${randomValue} section__txt`}>
              <div className={`section__name_${randomValue} section__name`}>
                {item.title && item.title}
              </div>
              <div className={`section__info_${randomValue} section__info`}>
                {item.desc && item.desc}
              </div>
              <div className={`section__link_${randomValue} section__link`}>
                {customATag ? (
                  item.link
                ) : (
                  <a href={item.link && item.link} target="_blank">
                    {textContentATag}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ul className={`section__dots_${randomValue} section__dots`}>
        {data.map((item, index) => (
          <li
            key={index}
            className={
              active === index
                ? `section__dot section__dot_${randomValue} section__dot-active_${randomValue}`
                : `section__dot section__dot_${randomValue}`
            }
            onClick={() => dotClick(section, index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
export default memo(Pho);
