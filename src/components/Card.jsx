
import PropTypes from 'prop-types';
import '../styles/components/Card.sass';
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;