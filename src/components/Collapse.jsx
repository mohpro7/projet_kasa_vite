import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Collapse.sass';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        {title}
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      <div ref={contentRef} className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
