import React, { useEffect, useState } from 'react';
import PageSection from '../Components/Home/PageSection';
import Navbar from '../Components/Home/Navbar';
import { Link } from 'react-router-dom';
const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url('https://yeditepehastaneleri.com/sites/default/files/2022-03/yoga.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '92vh', // Ensure the background covers the entire viewport height
        position: 'relative', // Necessary for positioning the overlay div
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(218, 218, 218, 0.4)', // Peach purple color with 50% opacity
    };
    const quoteStyle = {
        
        color: 'white', // Text color
        fontSize: '3rem', // Font size
        // textAlign: 'center', // Text alignment
        // marginTop: '2vh', // Adjust vertical margin as needed
    };
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["peace", "hope","strength","balance","joy","healing","longitivity"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className='full-page131'>
            <Navbar/>
        <div className="home-container" style={backgroundStyle}>
            {/* <div style={overlayStyle}></div> */}
            <br/>
            <br/>
            <h1 className='yoga-quote' style={quoteStyle}>YOGA HAS MANY MEANING...</h1>
            <h1 className='yoga-quote uppercase font-bold' style={quoteStyle}>{words[wordIndex]}</h1>
            <h1 className='yoga-quote ' style={quoteStyle}>what will it mean to YOU?</h1>
            <h1 className='yoga-quote text-center font-bold' style={quoteStyle}>Begin your journey here with access to:</h1>

            <ul className="text-white text-center font-bold text-xl">
                <li>3000+ on-demand yoga practices ranging from 3-90 minutes to enhance all aspects of life</li>
                <li>700+ meditations to hone your mind and reach your potential</li>
                <li>100+ pranayama practices to help you get centered</li>
                <li>2700+ articles to expand your knowledge</li>
                {/* <li>300+ courses and challenges to help your journey</li> */}
            </ul>
            <div className="text-center"> {/* Apply text-center class here */}
      <Link to="/login">
        <button className="get-starter-button1">Get Started</button>
      </Link>
    </div>
        </div>
        <h1></h1>
        </div>
          
        </>
    );
}

export default Home;
