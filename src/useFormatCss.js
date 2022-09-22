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
  const cssDefault = `.carousel_${randomValue} {position: relative;overflow: hidden;margin-left: auto;margin-right: auto; box-sizing: border-box;}
  .carousel_button_${randomValue} {opacity: 1;}
  .carousel_button_${randomValue} {opacity: 0;transform: translateY(-50%);background-color: rgba(0,0,0,  0.2);border: none;cursor: pointer;position: absolute;top: 50%;user-select: none;z-index: 10;color: rgba(255, 255, 255, 0.5);}
  .carousel_button_prev_${randomValue} {left: 0;padding: 1rem ;border-radius: 0 4px 4px 0;}
  .carousel_button_next_${randomValue} {right: 0;padding: 1rem;border-radius: 4px 0 0 4px;}
  .carousel_button_${randomValue}:hover.onHover {background-color: rgba(0,0,0, 0.4);color: rgba(255, 255, 255, 0.8);}
  .carousel_items_${randomValue} {position: relative;overflow: hidden;width: 100%;height: 100vh; }
  .carousel_image_${randomValue} {width: 100vw;height: 100vh;border-radius: 0px; object-fit: cover;object-position: center center;}
  .carousel_slick_dots_${randomValue} {font-size: 14px;line-height: 1.15;text-size-adjust: 100%;box-sizing: border-box;margin:0px; padding: 0px;position: absolute;bottom: 30px;display: flex;-webkit-box-pack: center; justify-content:center;width: 100%;}
  .carousel_slick_dot_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;}
  .carousel_slick_dot_active_${randomValue} {z-index: 20;box-sizing: border-box;box-shadow: 1px 2px 2px black;display: inline-block;cursor: pointer;width: 0.65rem;height: 0.65rem;margin: 2px 20px;padding: 0;background-color: rgb(255, 255, 255);border-radius: 50%;outline: none;border: 1px solid rgba(255, 255, 255, 0.3);opacity: 0.5;opacity: 1;}
  .carousel_item_${randomValue} {width: 100%;position: absolute;opacity: 1;}
  .carousel_item_active_${randomValue} {z-index: 1;opacity: 1; animation: slideAnimation 1s ease-in-out;}
  .carousel_block_text_${randomValue} {width:fit-content; position: absolute; top: 50%; transform: translateY(-100%); left: 6%; padding: 20px; border-radius: 20px; background: rgba(255,255,255,0.65); }
  .carousel_block_text_name_${randomValue} {padding: 0px;margin: 0px;}
  .carousel_block_text_infor_${randomValue} { max-width: 30vw; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
  .carousel_block_text_link_${randomValue} { padding: 10px; font-weight: 600; color: black; }@keyframes slideAnimation {0% {transform: translateX(var(--from)); opacity: 0.3;)}100% {transform: translateX(0%); opacity: 1;}}`;
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
  contentCss = contentCs + cssDefault;
  return { contentCss, randomValue };
}
