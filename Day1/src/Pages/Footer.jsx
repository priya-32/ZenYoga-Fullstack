import React from 'react';
// import '../Assets/Styles/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
              <div className="cta-icon">
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Via Università, 40, 09124 Cagliari CA, Italy</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
              <div className="cta-icon">
                <i className="fas fa-phone"></i>
                </div>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+39 070 6751</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-0">
              <div className="single-cta">
              <div className="cta-icon">
                <i className="far fa-envelope-open"></i>
                </div>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>info@unica.edu.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src="https://logopond.com/logos/90d2cf99fa1f3a0152620d831d0d9b96.png" className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>The University of Cagliari is a public research university in Cagliari, Sardinia, Italy. It was founded in 1606 .</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <Link to="https://www.facebook.com/" target="_blank">
  <i className="fab fa-facebook-f facebook-bg"></i>
</Link>
<Link to="https://twitter.com/" target="_blank">
  <i className="fab fa-twitter twitter-bg"></i>
</Link>
<Link to="https://plus.google.com/" target="_blank">
  <i className="fab fa-google-plus-g google-bg"></i>
</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/about">about</Link></li>
                  <li><Link to = "/">services</Link></li>
                  <li><Link to = "/">portfolio</Link></li>
                  <li><Link to = "/contact">Contact</Link></li>
                  <li><Link to = "/about">About us</Link></li>
                  <li><Link to = "/">Our Services</Link></li>
                  <li><Link to = "/">Expert Team</Link></li>
                  <li><Link to = "/">Contact us</Link></li>
                  <li><Link to = "/">Latest News</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved @ unica</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/terms">Terms</Link></li>
                  <li><Link to = "/privacy">Privacy</Link></li>
                  <li><Link to = "/faq">FAQ</Link></li>
                  <li><Link to = "/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
