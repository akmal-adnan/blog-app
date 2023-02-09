import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { images } from '../data';

function Home() {
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // for scrolling to section
    if (location.hash === '#about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <main className="main">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <section className="home" id="home">
          <div className="container grid home__grid">
            {/* Profile pic */}
            <div className="profile__border">
              <div className="profie__container">
                <img
                  src={images.ProfileImg}
                  alt="logo"
                  className="profile__img"
                />
              </div>
            </div>

            <div className="hello__box">
              <h3 className="hello__text">
                Hello there, I am Developer from Malaysia
              </h3>
            </div>

            <div className="home__box">
              <h1>I am, Akmal Adnan</h1>
              <p className="home__description">
                Software Engineer ( Developer / Designer )
              </p>

              {/* <a href="/#" className="button">
              Download Now <i className="ri-arrow-right-line" />
            </a> */}
            </div>

            <div className="profile__social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="profile__social-link"
                rel="noreferrer">
                <i className="ri-linkedin-box-fill" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="profile__social-link"
                rel="noreferrer">
                <i className="ri-github-fill" />
              </a>
            </div>
          </div>
        </section>

        <section ref={aboutRef} className="about" id="about">
          <div className="container">
            <h3 className="about__title">About Me</h3>
            <p>
              This is the story of Akmal, a guy who&apos;s shaking things up in
              the tech world. From his humble beginnings as a computer science
              student at{' '}
              <a href="/#" className="about__subtitle">
                Universiti Teknikal Malaysia Melaka
              </a>
              , to his current role as a developer at{' '}
              <a href="/#" className="about__subtitle">
                OK Blockchain Centre Sdn. Bhd
              </a>
              , Akmal has been on a journey like no other. With a passion for
              coding that burns brighter than a thousand suns, he&apos;s been
              building mobile apps using{' '}
              <a href="/#" className="about__subtitle">
                React Native
              </a>{' '}
              and other technologies. But this isn&apos;t just a story about
              tech. This is a story about a person who&apos;s not afraid to
              dream big and put in the hard work to make it happen. So sit back,
              relax, and get ready to be inspired by.
            </p>
          </div>
        </section>

        <section className="journey">
          <div className="container">
            <h3 className="journey__title">My Journey</h3>

            <div className="journey_box">
              <p className="journey__year">2017</p>
              <p className="journey__desc">
                Bachelor&apos;s Degree in Computer Science Major in Artificial
                Intelligence
              </p>
              <p className="journey__year">2020</p>
              <p className="journey__desc">Web developer intern</p>
              <p className="journey__year"> 2021 - Now</p>
              <p className="journey__desc">
                Graduate from UTeM. <br />
                Got Hired as Junior IT Engineer
              </p>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <h3 className="about__title">My Works</h3>

            {/* Project */}
            <div className="projects__content grid">
              <article className="projects__card">
                {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                <img src={images.project1} alt="" className="projects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Mobile</span>
                    <h3 className="projects__title">Davia</h3>
                    <a
                      href="/#"
                      className="projects__button button button__small"
                      target="_blank"
                      rel="noreferrer">
                      <i className="ri-link" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="projects__card">
                {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                <img src={images.project1} alt="" className="projects__img" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">Mobile</span>
                    <h3 className="projects__title">Davia</h3>
                    <a
                      href="/#"
                      className="projects__button button button__small"
                      target="_blank"
                      rel="noreferrer">
                      <i className="ri-link" />
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="button__container">
              <a href="/#" className="more__button">
                See More <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}

export default Home;
