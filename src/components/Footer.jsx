import logoWhite from '../assets/LOGO-white.svg';
import '../styles/components/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logoWhite} alt='logo kasa blanc' /> 
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;