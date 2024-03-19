// TestimonialsCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../Assets/Styles/Alumni.css'
const Alumni = () => {
    const testimonials = [
        {
          name: 'Ronne Galle',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          comment: '“ It was an awesome experience which could be cherished forever. The serene environment surrounding this college gave the right ambience for an effective knowledge transfer. Beyond all what really made our lives was the knowledge which was imparted to us by the faculty.                            ”',
        },
        {
          name: 'Missy Limana',
          role: 'Engineer',
          image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          comment: '“The Department of Instrumentation & Control Engineering provides a vibrant atmosphere for overall personality enhancement. It has been a phenomenal place to study where everyday is an opportunity & learning experience. Graduates take with them experience & expertize .”',
        },
        {
          name: 'Martha Brown',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1623945194105-cd36c4433390?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          comment: '“My overall experience in Department of Instrumentation and control engineering is very positive.The department gave me a favorable circumstance to enhance my technical skills & soft skills and supported me in all possible way.They respect ideas & views of each individual.”',
        },
        {
          name: 'Hanna Lisem',
          role: 'Project Manager',
          image: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          comment: '“I strongly believe that there are better and rigorous ways of transforming novice students into expert Instrumentation and Control engineers. This department is like a family. Professors are very highly personable and also motivated. I felt like they really cared about me as a person. ”',
        },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    
      return (
        <div style={{ marginTop: '40px' }}> {/* Add margin-top style */}

        <div className='testimonials-container'>
        <div className="gtco-testimonials ">
        <h2 className="text-center">Alumni Feedback</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="card text-center">
                  <img className="card-img-top" src={testimonial.image} alt={`Testimonial ${index}`} />
                  <div className="card-body">
                    <h5>{testimonial.name} <br />
                      <span>{testimonial.role}</span>
                    </h5>
                    <p className="card-text">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        </div>
      );
    };
export default Alumni;
