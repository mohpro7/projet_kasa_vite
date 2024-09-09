import '../styles/components/Banner.sass';
import PropTypes from 'prop-types';

const Banner = ({ text, image, showOverlay }) => {
  const backgroundStyle = {
    backgroundImage: showOverlay
    ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`
    : `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="banner-component" style={backgroundStyle}>
      {text && <h1>{text}</h1>}
    </div>
  );
};

Banner.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    showOverlay: PropTypes.bool,
  };

  
export default Banner;