import React from 'react';
import Navbar from '../Components/Home/Navbar';

const Aboutus = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <section className="about-us">
        <div className="about">
          {/* Uncomment the line below if you have an image */}
          <img src="https://images.squarespace-cdn.com/content/v1/6221293841ec3a06ecd3ee9c/3f4138a9-c0df-4928-92b8-d2cd23a56cd1/BBP_2022_Yoga_Sanctuary_Minneapolis_0390.jpg" className="pic w-50 h-10" alt="Girl" />
          <div className="text">
            <h2 className='abt'>About Us</h2>
            <h5 className='college'>Vision</h5>
            <p className='para'>
            At our yoga academy, we envision a world where individuals embrace holistic well-being, connecting mind, body, and spirit. We strive to be a beacon of light, guiding people towards a balanced and harmonious life through the teachings and practices of yoga. Our vision is to empower individuals to cultivate inner peace, physical vitality, and spiritual awakening, fostering a community that radiates positivity, compassion, and mindfulness            </p>
            <h5 className='college'>Mission</h5>
            <p className='para'>
            Our mission at the yoga academy is to provide accessible, authentic, and transformative yoga education rooted in ancient wisdom and tailored to modern lifestyles. Through expert instruction, comprehensive curriculum, and supportive community, we aim to inspire and empower individuals at every stage of their yoga journey. We are committed to upholding the highest standards of teaching excellence, promoting inclusivity, and honoring the diversity of yoga traditions.            </p>
            <div className="data">
              <a href="#" className="hire">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
