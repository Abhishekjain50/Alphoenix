import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//Import the css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Import all images
import appIcon from './assets/appIcon/logoalphoenix.png';
import featuresImage from './assets/img/features.jpg';
import aboutImage from './assets/img/about.png';
import antrapreneur from './assets/img/supportedBy/antrapreneur.jpg';
import SSIP from './assets/img/supportedBy/SSIP.jpg';
import iCreation from './assets/img/supportedBy/iCreation.jpg';
import iHub from './assets/img/supportedBy/iHub.jpg';
import startupIndia from './assets/img/supportedBy/startupIndia.jpg';
import portfolioImage1 from './assets/img/portfolio/portfolio-1.jpg';
import portfolioImage2 from './assets/img/portfolio/portfolio-2.jpg';
import portfolioImage3 from './assets/img/portfolio/portfolio-3.jpg';
import portfolioImage4 from './assets/img/portfolio/portfolio-4.jpg';
import portfolioImage5 from './assets/img/portfolio/portfolio-5.jpg';
import portfolioImage6 from './assets/img/portfolio/portfolio-6.jpg';
import portfolioImage7 from './assets/img/portfolio/portfolio-7.jpg';
import portfolioImage8 from './assets/img/portfolio/portfolio-8.jpg';
import portfolioImage9 from './assets/img/portfolio/portfolio-9.jpg';
import testimonialImage1 from './assets/img/testimonials/testimonials-1.jpg';
import testimonialImage2 from './assets/img/testimonials/testimonials-2.jpg';
import testimonialImage3 from './assets/img/testimonials/testimonials-3.jpg';
import testimonialImage4 from './assets/img/testimonials/testimonials-4.jpg';
import testimonialImage5 from './assets/img/testimonials/testimonials-5.jpg';
import dharmik from './assets/img/team/dharmik.jpg';
import dhrumee from './assets/img/team/dhrumee.jpg';
import hardik from './assets/img/team/hardik.jpg';
import paranv from './assets/img/team/pranav.jpg';
import sahil from './assets/img/team/sahil.jpg';
import anisha from './assets/img/team/anisha.jpg';
import productDesign from './assets/img/services/productDesign.jpg'
import machingService from './assets/img/services/machingService.jpg'
import bldcMotor from './assets/img/services/bldcMotor.jpg'
import prototype from './assets/img/services/prototype.jpg'
import projectManagement from './assets/img/services/projectManagement.jpg'
import electronics from './assets/img/services/electronics.jpg'
import partners1 from './assets/img/partners/partners1.png';
import partners2 from './assets/img/partners/partners2.png';
import partners3 from './assets/img/partners/partners3.png';
import partners4 from './assets/img/partners/partners4.png';
import partners5 from './assets/img/partners/partners5.png';
import partners6 from './assets/img/partners/partners6.png';
import partners7 from './assets/img/partners/partners7.gif';
import partners8 from './assets/img/partners/partners8.png';
import partners9 from './assets/img/partners/partners9.png';
import patentMotor from './assets/img/subPart/patentMotor.JPG';
import recognization from './assets/img/subPart/recognization.jpg';
import developmentPath from './assets/img/subPart/developmentPath.jpg';


// // Import all icons
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const portfolioItems = [
  {
    title: "App 1",
    category: "app",
    image: portfolioImage1,
    gallery: "assets/img/portfolio/portfolio-1.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Web 3",
    category: "web",
    image: portfolioImage2,
    gallery: "assets/img/portfolio/portfolio-2.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "App 2",
    category: "app",
    image: portfolioImage3,
    gallery: "assets/img/portfolio/portfolio-3.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Card 2",
    category: "card",
    image: portfolioImage4,
    gallery: "assets/img/portfolio/portfolio-4.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Web 2",
    category: "web",
    image: portfolioImage5,
    gallery: "assets/img/portfolio/portfolio-5.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "App 3",
    category: "app",
    image: portfolioImage6,
    gallery: "assets/img/portfolio/portfolio-6.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Card 1",
    category: "card",
    image: portfolioImage7,
    gallery: "assets/img/portfolio/portfolio-7.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Card 3",
    category: "card",
    image: portfolioImage8,
    gallery: "assets/img/portfolio/portfolio-8.jpg",
    details: "portfolio-details.html"
  },
  {
    title: "Web 3",
    category: "web",
    image: portfolioImage9,
    gallery: "assets/img/portfolio/portfolio-9.jpg",
    details: "portfolio-details.html"
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjusted to highlight the section a bit earlier
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const swiper = new Swiper('.swiper-container', {
  //     direction: 'horizontal',
  //     loop: true,
  //     autoplay: {
  //       delay: 3000, // Adjust the delay as needed
  //       disableOnInteraction: false
  //     },
  //     slidesPerView: 'auto',
  //     spaceBetween: 20,
  //     centeredSlides: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   });

  //   // Cleanup function to destroy swiper instance
  //   return () => {
  //     swiper.destroy(true, true);
  //   };
  // }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [filter, setFilter] = useState('all');
  const filteredItems = filter == 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
  console.log("filteredItem=>>>>", filteredItems)

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="d-flex align-items-center justify-content-lg-between">
          <a href="index.html"><img src={appIcon} className="logo me-auto me-lg-0" alt="" style={{ height: 40, width: 140, marginLeft: 30 }} /></a>
          <nav id="navbar" className="navbar order-last order-lg-0" style={{ marginRight: 70 }}>
            <ul>
              <li><a className={activeSection === 'hero' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#hero">Home</a></li>
              <li><a className={activeSection === 'about' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#about">About</a></li>
              <li><a className={activeSection === 'services' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#services">Services</a></li>
              <li><a className={activeSection === 'portfolio' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#portfolio">Portfolio</a></li>
              <li><a className={activeSection === 'team' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#team">Team</a></li>
              <li><a className={activeSection === 'contact' ? 'active' : ''} style={{ textDecoration: 'none' }} href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            {/* col-xl-6 */}
            <div className="col-lg-8">
              <h1><span>“</span>Innovation Meets Precision With Alphoenix Design<span>”</span></h1>
              {/* <h2>We are team of talented digital marketers</h2> */}
            </div>
          </div>

          {/* <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line"></i>
            <h3><a href="">Dolor Sitema</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-calendar-todo-line"></i>
            <h3><a href="">Sedare Perspiciatis</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-paint-brush-line"></i>
            <h3><a href="">Magni Dolores</a></h3>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
            <i className="ri-database-2-line"></i>
            <h3><a href="">Nemos Enimade</a></h3>
          </div>
        </div>
      </div> */}

        </div>
      </section>
      {/* <!-- End Hero --> */}


      <main id="main">

        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About Us</h2>
              <p>Brief about startup</p>
            </div>

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2 ps-0 ps-md-5" data-aos="fade-left" data-aos-delay="100">
                <img src={aboutImage} className="about-pic" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                {/* <h3>About Us</h3> */}
                <p style={{ fontSize: 18, textAlign: 'justify', lineHeight: 2 }}>
                  At <strong>“Alphoenix Design Pvt.Ltd.”</strong> We provide custom design
                  and development of high-efficiency <strong>BLDC motors</strong> for different
                  sectors like <strong>EVs, Aviation and Drones, Industrial machinery
                    and Household appliances</strong>. We've designed our motors in such
                  a way that its manufacturing process would reduce <strong>material
                    waste of motors by 70%</strong> and <strong>increase efficiency by 5-8%</strong>. Our
                  flagship motors provide an efficiency of around <strong>92%-95%</strong>. The
                  motor will be <strong>manufactured</strong> with the capability to utilize <strong>CRGO
                    (Cold-Rolled Grain-Oriented)</strong> material in its construction. Our
                  radial flux motors can provide such efficiency with easy
                  manufacturing processes. Utilizing our new motor makes it
                  feasible to achieve an efficiency rating exceeding 95%.
                </p>
                {/* <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul> */}
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End About Section --> */}

        <section id="vision" className="about">
          <div className="container vision-container" data-aos="fade-up">
            <div className="section-title" style={{ paddingBottom: 0, marginLeft: 30, marginRight: 30 }}>
              {/* <h2>About Us</h2> */}
              <p>Vision</p>
            </div>
            <p style={{ fontSize: 18, textAlign: 'justify', lineHeight: 2, marginLeft: 30, marginRight: 30 }}><span style={{ color: '#91c27d' }}>"</span>Alphoenix Design envisions a world where every electic motor embodies efficiency and sustainbility. We drive the next generation of BLDC moters, setting benchmarks
              for performance and environmental impact. Inspiring positive change globally, we foster a future where technology and sustainbility seamlessly coexist, leaving a
              lasting legacy of innovation and eco-conscious design.<span style={{ color: '#91c27d' }}>"</span>
            </p>
          </div>
        </section>

        {/* <!-- ======= Features Section ======= --> */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-around', }}>
              <div className='startup-btn' data-aos="zoom-in" data-aos-delay="150">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#petendedMotors">
                  <h4>Petended motors</h4>
                </button>
              </div>
              <div className='startup-btn' data-aos="zoom-in" data-aos-delay="150">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#developmentPath">
                  <h4>Development Path</h4>
                </button>
              </div>
              <div className='startup-btn' data-aos="zoom-in" data-aos-delay="150">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#recognizations">
                  <h4>Recognizations</h4>
                </button>
              </div>
            </div>
          </div>
        </section>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="staticBackdropLabel">Design of petended motor</h5> */}
                <h5 className="modal-title" id="staticBackdropLabel">Recognization</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={recognization} className="about-pic" alt="" />
                {/* <img src={patentMotor} className="about-pic" alt="" /> */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Understood</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="petendedMotors" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Petended Motors</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={patentMotor} alt="" class='model-img' />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="developmentPath" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Development Path</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={developmentPath} alt="" class='model-img' />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="recognizations" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Recognizations</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={recognization} alt="" class='model-img' />
              </div>
            </div>
          </div>
        </div>




        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Services</h2>
              <p>Check our Services</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bxl-dribbble"></i> */}
                    <img src={productDesign} alt="" style={{ height: 110, width: 110 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Product design and development</a></h4>
                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bx-file"></i> */}
                    <img src={bldcMotor} alt="" style={{ height: 90, width: 130, marginBottom: 10 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>BLDC motor design and development</a></h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bx-tachometer"></i> */}
                    <img src={machingService} alt="" style={{ height: 150, width: 150 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Machining services</a></h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bx-world"></i> */}
                    <img src={prototype} alt="" style={{ height: 110, width: 130, marginBottom: 10 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Prototyping</a></h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon"><i className="bx bx-slideshow"></i></div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Mass Mfg.</a></h4>
                  <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                </div>
              </div> */}

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bx-arch"></i> */}
                    <img src={electronics} alt="" style={{ height: 110, width: 140, marginBottom: 10 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Electornics R&D</a></h4>
                  <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box" style={{ borderRadius: 30 }}>
                  <div className="icon">
                    {/* <i className="bx bx-arch"></i> */}
                    <img src={projectManagement} alt="" style={{ height: 110, width: 130, marginBottom: 10 }} />
                  </div>
                  <h4><a href="" style={{ textDecoration: 'none' }}>Project management</a></h4>
                  <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        {/* <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="#">Call To Action</a>
        </div>

      </div>
    </section> */}
        {/* <!-- End Cta Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check our Portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li onClick={() => setFilter('all')} className={filter === 'all' ? 'filter-active' : ''}>All</li>
                  <li onClick={() => setFilter('product')} className={filter === 'product' ? 'filter-active' : ''}>Product</li>
                  <li onClick={() => setFilter('app')} className={filter === 'app' ? 'filter-active' : ''}>App</li>
                  {/* <li onClick={() => setFilter('web')} className={filter === 'web' ? 'filter-active' : ''}>Web</li> */}
                  <li onClick={() => setFilter('card')} className={filter === 'card' ? 'filter-active' : ''}>card</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
              {console.log('filteredItems:', filteredItems)}
              {filteredItems.map((item, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}>
                  <div className="portfolio-wrap">
                    <img src={item.image} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.category}</p>
                      <div className="portfolio-links">
                        <a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.name}><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section className="clients vision-container" style={{ borderRadius: 0, paddingLeft: 100, paddingRight: 100 }}>
          <div className="section-title" style={{ textAlign: 'center' }}>
            {/* <h2>Supported By</h2> */}
            <p>Supported By</p>
          </div>
          <div className="client-images">
            <img src={startupIndia} alt="" style={{ height: 80, width: 185 }} />
            <img src={SSIP} alt="" style={{ height: 120, width: 120 }} />
            <img src={iHub} alt="" style={{ height: 80, width: 150 }} />
            <img src={iCreation} alt="" style={{ height: 105, width: 145 }} />
            <img src={antrapreneur} alt="" style={{ height: 60, width: 165 }} />
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section className="partners vision-container" style={{ marginTop: 30, borderRadius: 0, paddingLeft: 130, paddingRight: 130, marginBottom: 30, }}>
          {/* <section className="partners vision-container" style={{marginTop: 30, borderRadius: 0, paddingLeft: 60, paddingRight: 60, marginBottom: 30,}}> */}
          <div className="section-title" style={{ textAlign: 'center' }}>
            {/* <h2>Supported By</h2> */}
            <p>Our partners</p>
          </div>
          <div className="partner-images">
            {/* <img src={partners1} alt="" style={{height: 80, width: 115}}/> */}
            <img src={partners2} alt="" style={{ height: 80, width: 125 }} />
            {/* <img src={partners3} alt="" style={{height: 80, width: 145}}/> */}
            <img src={partners5} alt="" style={{ height: 100, width: 135 }} />
            <img src={partners6} alt="" style={{ height: 80, width: 105 }} />
            <img src={partners7} alt="" style={{ height: 80, width: 125 }} />
            <img src={partners8} alt="" style={{ height: 80, width: 195 }} />
            <img src={partners9} alt="" style={{ height: 80, width: 175 }} />
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        {/* <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div className="swiper-container" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonialImage1} className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonialImage2} className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonialImage3} className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonialImage4} className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonialImage5} className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Team</h2>
              <p>Check our Team</p>
            </div>

            <div className="row">
              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100" style={{ borderRadius: 30 }}>
                  <div className="member-img" >
                    <img src={paranv} className="img-fluid common-image" alt="" />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Pranav Patel</h4>
                    <span>CEO & Founder</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200" style={{ borderRadius: 30 }}>
                  <div className="member-img">
                    <img src={dhrumee} className="img-fluid common-image" alt="" />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Dhrumee Patel</h4>
                    <span>Co-Founder & Marketing HR Head</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300" style={{ borderRadius: 30 }}>
                  <div className="member-img">
                    <img src={hardik} className="img-fluid common-image" alt="" />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Hardik Patel</h4>
                    <span>Business Development Executive</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300" style={{ borderRadius: 30 }}>
                  <div className="member-img">
                    <img src={sahil} className="img-fluid common-image" alt="" />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sahil Balani</h4>
                    <span>Product Design & Adivsor</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300" style={{ borderRadius: 30 }}>
                  <div className="member-img">
                    <img src={dharmik} className="img-fluid common-image" alt="" />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Dharmik Prajapati</h4>
                    <span>Freelancer (EC)</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300" style={{ borderRadius: 30 }}>
                  <div className="member-img">
                    <img src={anisha} className="img-fluid common-image" alt="" style={{ backgroundColor: 'red', }} />
                    <div className="social">
                      {/* <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a> */}
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Anisha Patel</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>

            {/* <div>
          <iframe
           style={{border: '0',
    width: '100%',
    height: '270px',
    }} 
    // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        src={mapUrl} frameborder="0" allowfullscreen></iframe>

        </div> */}

            <div>
              <iframe style={{
                border: '0',
                width: '100%',
                height: '270px',
              }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14681.272186443246!2d72.5586216!3d23.0854504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83a9e2cd992f%3A0x58ea1eeb5d460835!2sDHARTI%201%20APPARTMENT!5e0!3m2!1sen!2sin!4v1709462764850!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address d-flex">
                    <FaLocationDot style={{ color: '#318d4d', fontSize: '44px' }} />
                    <div>
                      <h4 className='ps-3'>Location:</h4>
                      <p className='ps-3'>A202, Dharti - 1, New Ranip, Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="email d-flex">
                    <MdEmail style={{ color: '#318d4d', fontSize: '44px' }} />
                    <div>
                      <h4 className='ps-3'>Email:</h4>
                      <p className='ps-3'>alphoenix.design@gmail.com</p>
                    </div>
                  </div>

                  <div className="phone d-flex">
                    <FaMobileAlt style={{ color: '#318d4d', fontSize: '44px' }} />
                    <div>
                      <h4 className='ps-3'>Call:</h4>
                      <p className='ps-3'>+91 8141251240</p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name*" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email*" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="company name" className="form-control" id="name" placeholder="Your Company Name" />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="number" className="form-control" name="phone number" id="email" placeholder="Your Phone Number*" required />
                    </div>
                  </div>
                  {/* <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div> */}
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message*" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Submit</button></div>
                </form>

              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">


              <div style={{ display: 'flex' }}>
                <div className="col-lg-6" style={{ width: '50%' }}>
                  <div className="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>Product design and development</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>BLDC motor design and development</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>Machining services</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>Prototyping</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>Electronics R&D</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#" style={{ textDecoration: 'none' }}>Project management</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6" style={{ width: '50%', paddingLeft: '20%' }}>
                  <div className="footer-links">
                    <h4>Privacy Policy</h4>
                  </div>
                </div>
              </div>



              <div className="col-lg-4 col-md-6 footer-newsletter">

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Alphoenix Design</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by Anisha Patel
            {/* Designed by <a href="">Webwizard</a> */}
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <div id="preloader"></div> */}
      {isVisible && (
        <a href="#" className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
          <span style={{ color: '#318d4d' }}>&#9650;</span> {/* Unicode arrow character for up arrow */}
        </a>
      )}
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

      {/* <!-- Vendor JS Files --> */}
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="assets/js/main.js"></script>

    </div>
  );
}

export default App;
