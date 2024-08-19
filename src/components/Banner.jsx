import '../styles/pages/Banner.css';
import PropTypes from 'prop-types';

const Banner = ({ text }) => {
  return (
    <div className="banner-component">
      <h1>{text}</h1>
    </div>
  );
};

Banner.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default Banner;