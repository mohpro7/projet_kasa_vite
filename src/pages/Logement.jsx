import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import '../styles/pages/Logement.sass';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import { useParams, Navigate } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('/datas/logements.json');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des logements');
        }
        const data = await response.json();
        const logementData = data.find((logement) => logement.id === id);
        setLogement(logementData);
        setLoading(false);
      } catch (error) {
        console.error('Erreur de fetch:', error);
        setLoading(false);
      }
    };

    fetchLogements();
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!logement) {
    return <Navigate to="/ErrorPage" replace />;
  }

  return (
    <Layout>
      <div className="logement-container">
        <div className="logement-gallery">
          <Slideshow pictures={logement.pictures} />
        </div>
        <div className="logement-details">
          <div className='logement-info'>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className='host_rating'>
            <div className="logement-host">
              <span className="host-name">{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
            </div>
            <div className="logement-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < logement.rating ? "filled-star" : "empty-star"}>★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="logement-collapse">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </Layout>
  );
};

export default Logement;
