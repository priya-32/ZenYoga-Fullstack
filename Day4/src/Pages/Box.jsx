import React from 'react';

function Box({ className, background, description }) {
  return (
    <div className={`relative box ${className}`} style={{ backgroundImage: `url(${background})` }}>
      <p className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-lg">{description}</p>
    </div>
  );
}

function Section() {
  return (
    <div className="myContainer">
      <div className="text-3xl font-bold text-center mt-6 mb-6">ENGAGING AND CONVENIENT ONLINE YOGA CLASSES</div>
      <p className="text-lg text-center mb-12">Thousands of high-quality yoga classes to meet you where<br/> you are, on your schedule.</p>
      <div className="mySection">
        <Box
          className="box-1"
          background="https://images.hindustantimes.com/img/2022/11/09/1600x900/full-shot-kid-meditating-grass_1668001775077_1668001784319_1668001784319.jpg"
          description="Begin your day feeling rejuvenated and connected."
        />
        <Box
          className="box-2"
          background="https://www.yogabaron.com/wp-content/uploads/2021/04/yoga-meditation-readings-April212021-min.jpg"
          description="Utilize the support of props to recognize the sensations."
        />
        <Box
          className="box-3"
          background="https://media.istockphoto.com/id/883644186/photo/gaining-a-healthier-physical-and-mental-wellbeing.jpg?s=612x612&w=0&k=20&c=gySPzGh8sL7SXpFghtNbIgerNK9zyEJCCN_d6J21rtY="
          description="Indulge in a gentle sequence of body stretches & twists."
        />
        <Box
          className="box-4"
          background="https://storage.googleapis.com/mv-prod-blog-en-assets/2022/03/4f41538c-mantra-meditation-mindvalley-blog-04-midjourney-seo-team.webp"
          description="Meet yourself where you are when you're feeling low."
        />
        <Box
          className="box-5"
          background="https://media.istockphoto.com/id/1202729719/photo/young-woman-sitting-in-the-lotus-pose-outside-on-her-patio.webp?b=1&s=170667a&w=0&k=20&c=BsEeRFzco8U5_ERmd1qM-5qc-3Bhd0vHm5sLzqE-cZg="
          description="Conclude the practice with a series of standing postures "
        />
      </div>
    </div>
  );
}

export default Section;
