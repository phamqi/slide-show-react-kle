import { useMemo, useState } from 'react';

export default function FormatCss(style) {
  let contentCss = '';
  let contentCs = '';
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
  const cssDefault = `/* css ${randomValue} */
  .container_${randomValue} {
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
  .section___${randomValue}wrapper {
    position: relative !important;
    touch-action : none;
  }
  .section__wrap__btn_${randomValue} {
    z-index: 20;
    bottom: 50%;
    transform: translateY(50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section___${randomValue}wrap__btn {
    position: absolute !important;
  }
  .section__btn_${randomValue} {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .section__btn__next_${randomValue} {
    right: 1rem;
  }
  .section_${randomValue} {
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }
  .sec___${randomValue}tion {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  .section_${randomValue}::-webkit-scrollbar {
    display: none;
  }
  .left_arrow_${randomValue} , .right_arrow_${randomValue} {
    width: 30px;
    height: 30px;
    color: rgb(244, 88, 122);
  }
  .section__counter_${randomValue} {
    min-width: 110px;
    position: absolute;
    bottom: 20%;
    left: 20%;
    z-index: 8;
    color: white;
    --height: 70px;
  }
  .section__${randomValue}counter {
    position: absolute;
  }
  .section__wrap__counter_${randomValue} {
    height: var(--height);
  }
  .section__wrap_${randomValue}__counter {
    position: relative;
    height: var(--height);
    display: flex;
    overflow: hidden;
  }
  .section__wrap_${randomValue}__counter::after {
    content: var(--total);
    position: absolute;
  }
  .section__wrap__counter_${randomValue}::after {
    font-size: 2rem;
    top: 0;
    left: 4.3rem; 
  }
  .counter__teen_${randomValue} {
    font-size: 4rem;
    line-height: 4.2rem;
    transition-duration: 0.75s;
  }
  .counter_${randomValue}__teen {
    transform: translateY(var(--teen));
  }
  .counter__unit_${randomValue} {
    font-size: 4rem;
    line-height: 4.2rem;
    transition-duration: 0.75s;
  }
  .counter_${randomValue}__unit {
    transform: translateY(var(--unit));
  }
  .counter_${randomValue}__unit > div, .counter_${randomValue}__teen > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--height);
  }
  @media screen and  (max-width: 576px) {
    .section__item_${randomValue} {
      flex-direction: column;
    }
  }
  @media (min-width: 576px){
    .container_${randomValue} {
      width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container_${randomValue} {
      width: 720px;
    }
    .section__item_${randomValue} {
      flex-direction: row;
    }
  }
  @media (min-width: 992px) {
    .container_${randomValue} {
      width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container_${randomValue} {
      width: 1140px;
    }
  }
    @media (min-width: 1400px) {
      .container_${randomValue} {
        width: 1320px;
      }
  }`;
  useMemo(() => {
    try {
      if (style) {
        const myCharLenght = myChar.length;
        const classArray = Object.keys(style);
        const classArrayLenght = Object.keys(style).length;
        for (var a = 0; a < classArrayLenght; a++) {
          const classIndex = classArray[a];
          let stylesFormated;
          let bMot;
          const stringStyle = JSON.stringify(style[classIndex]);
          bMot = stringStyle;
          for (var b = 0; b < myCharLenght; b++) {
            let bHai = bMot.replaceAll(myChar[b], `-${myChar[b].toLowerCase()}`);
            bMot = bHai;
            if (b === myCharLenght - 1) {
              let bBa = bHai.replaceAll(`,`, `;`);
              stylesFormated = bBa.replaceAll(`"`, ' ');
            }
          }
          let classRp = classArray[a].replace(/ /g, '');
          let classRpp = classRp.replace('/', '');
          let classRppp = classRp.replace('?', '');
          switch (classRp.charAt(0)) {
            case '@':
              contentCs += `${classRp}` + `${stylesFormated}`;
              break;
            case '-':
              contentCs += `${classRp}` + `${stylesFormated}`;
              break;
            case '/':
              contentCs += `#section__wrapper .${classRpp}` + `${stylesFormated}`;
              break;
            case '?':
              contentCs += `#section__wrapper ${classRppp}` + `${stylesFormated}`;
              break;
            default:
              contentCs +=
                `#section__wrapper .${classArray[a]}_${randomValue}` +
                `${stylesFormated}`;
          }
        }
      } else {
        contentCss = cssDefault;
      }
    } catch (error) {
      contentCss = cssDefault;
    }
  }, [style]);
  contentCss = cssDefault + contentCs;
  return { contentCss, randomValue };
}
