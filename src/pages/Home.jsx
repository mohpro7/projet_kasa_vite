import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Banner from '../components/Banner';
import '../styles/pages/home.sass';
import bannerImage from '../assets/Banner.png';

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('/datas/logements.json');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des logements');
        }
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error('Erreur de fetch:', error);
      }
    };

    fetchLogements();
  }, []);

  return (
    <Layout>
      <section className="home-content">
        <div className='banner'>
          <Banner 
            text="Chez vous, partout et ailleurs" 
            image={bannerImage} 
            showOverlay={true}  
          />
        </div>
        <div className="card-container">
          <div className="card-list">
            {logements.map((logement) => (
              <Card
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
