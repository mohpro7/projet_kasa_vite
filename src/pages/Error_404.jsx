
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import errorImage from '../assets/404.png'; // Assurez-vous que le chemin est correct
import '../styles/pages/Error_404.css'; // Assurez-vous que le fichier CSS est correctement importé

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