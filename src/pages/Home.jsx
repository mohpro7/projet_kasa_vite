
import Layout from '../components/Layout';
import Card from '../components/Card';
import logements from '../datas/logements.json';
import Banner from '../components/Banner';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <Layout>
      <section className="home-content">
        <div className='banner'>
          <Banner text="Chez vous, partout et ailleurs" />
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