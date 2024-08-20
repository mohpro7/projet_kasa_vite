import { useState } from 'react';
import '../styles/components/Slideshow.css';
import leftArrow from '../assets/arrow_back.png';
import rightArrow from '../assets/arrow_forward.png';
import PropTypes from 'prop-types';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
<div className="slideshow">
  {pictures.length > 1 && (
    <>
      <button className="left-arrow" onClick={previousSlide}>
        <img src={leftArrow} alt="Flèche gauche" />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <img src={rightArrow} alt="Flèche droite" />
      </button>
    </>
  )}
  <div className="slideshow-image">
    <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
  </div>
  {pictures.length > 1 && (
    <div className="slideshow-counter">
      {currentIndex + 1}/{pictures.length}
    </div>
  )}
</div>
  );
};

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Slideshow;
