
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import errorImage from '../assets/404.png';
import '../styles/pages/Error_404.sass'; 

const ErrorPage = () => {
  return (
    <Layout>
      <main className="error-page">
        <img src={errorImage} alt="404" className="error-image" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
      </main>
    </Layout>
  );
};

export default ErrorPage;