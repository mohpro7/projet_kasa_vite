import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import Layout from '../components/Layout';
import '../styles/pages/Logement.css';
import ErrorPage from './Error_404';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
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
                    <span>{logement.host.name}</span>
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
