import { useState } from 'react';

function Carousel(imgs) {
  const [img, setImg] = useState(imgs[0]);
  const [slide, setSlide] = useState(0);

  function handleClickRight() {
    setSlide(slide + 1);

    if (slide === 0) {
      setImg(imgs[0]);
    } else if (slide === 1) {
      setImg(imgs[1]);
    } else if (slide === 2) {
      setImg(imgs[2]);
    } else if (slide === 3) {
      setImg(imgs[3]);
    }
  }

  function handleClickLeft() {
    setSlide(slide - 1);
    if (slide === 0) {
      setImg(imgs[0]);
    } else if (slide === 1) {
      setImg(imgs[0]);
    } else if (slide === 2) {
      setImg(imgs[1]);
    } else if (slide === 3) {
      setImg(imgs[2]);
    }
  }

  return (
    <div>
      <button onClick={handleClickLeft}>Left</button>
      <img src={img} alt="" />
      <button onClick={handleClickRight}>Right</button>
    </div>
  );
}

export default Carousel;
