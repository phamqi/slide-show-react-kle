import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import useFormatCss from './useFormatCss';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

BanhMy.propTypes = {
  time: PropTypes.number,
  style: PropTypes.object,
  prevBtn: PropTypes.array,
  nextBtn: PropTypes.array,
  slash: PropTypes.any,
};
function BanhMy({ style, time = 5000, prevBtn, nextBtn, children, slash = '/' }) {
  const section = useRef();
  const [active, setActive] = useState(0);
  const [maxLength, setMaxlength] = useState(0);
  const [sectionWidth, setSectionWidth] = useState(0);
  const [onWheel, setOnWheel] = useState(true);
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
  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  useEffect(() => {
    section.current.scrollLeft = 0;
    section.current.addEventListener(
      'wheel',
      function abc(event) {
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
        if (startX + 80 < moveX) {
          prevSilde(section.current);
        }
        if (startX - 80 > moveX) {
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
      className={`container container_${randomValue}  section__wrapper  section__wrapper_${randomValue} section___${randomValue}wrapper`}
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
      <div
        className={`section__counter section_${randomValue}__counter section__counter_${randomValue}`}
      >
        <div
          className={`section__wrap__counter section__wrap_${randomValue}__counter section__wrap__counter_${randomValue}`}
          style={{ '--total': `'${slash}${maxLength + 1}'` }}
        >
          <div
            className={`counter__teen counter__teen_${randomValue} counter_${randomValue}__teen`}
            style={{ '--teen': `-${Math.floor((1 + active) / 10)}00%` }}
          >
            <div>0</div> <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
            <div>6</div> <div>7</div> <div>8</div> <div>9</div>
          </div>
          <div
            className={`counter__unit counter__unit_${randomValue} counter_${randomValue}__unit`}
            style={{ '--unit': `-${active + 1 > 9 ? (1 + active) % 10 : active + 1}00%` }}
          >
            <div>0</div> <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div>
            <div>6</div> <div>7</div> <div>8</div> <div>9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BanhMy);
