
import Layout from '../components/Layout';
import Collapse from '../components/Collapse';
import aboutData from '../datas/aboutData'; 
import Banner from '../components/Banner';
import '../styles/pages/About.sass';
import bannerImage from '../assets/Banner_about.png';

const About = () => {
  return (
    <Layout>
      <div className="about-banner">
        {<Banner 
          image={bannerImage} 
          showOverlay={false} 
        />}
      </div>
      <section className="about-content">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </section>
    </Layout>
  );
};

export default About;
