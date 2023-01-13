/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images, data } from '../data';
import { DarkMode, Footer } from '../components';

function Home() {
  const [filterTab, setFilterTab] = useState(1);
  const [activeTab, setTab] = useState(1);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const toggleTab = item => {
    setFilterTab(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setTab(item);
    }, 500);
  };

  return (
    <>
      <header className="profile container">
        <DarkMode />

        <div className="profile__container grid">
          <div className="profile__data">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="profile__border">
              <div className="profile__perfil">
                <img src={images.ProfileImg} alt="profileimage" />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <h2 className="profile__name">Akmal Adnan</h2>
              <h3 className="profile__profession">Developer</h3>
            </motion.div>

            {/* <motion.ul
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="profile__social">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="profile__social-link"
                rel="noreferrer">
                <i className="ri-instagram-line" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="profile__social-link"
                rel="noreferrer">
                <i className="ri-linkedin-box-line" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="profile__social-link"
                rel="noreferrer">
                <i className="ri-github-line" />
              </a>
            </motion.ul> */}
          </div>

          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">2</h3>
              <p className="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">+10</h3>
              <p className="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">96</h3>
              <p className="profile__info-description">
                Satisfied <br /> customers
              </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1, delay: 1.1 }}
            viewport={{ once: true }}
            className="profile__buttons">
            <a download="" href="assets/pdf/Gianell-Cv.pdf" className="button">
              Download CV <i className="ri-download-line" />
            </a>

            <div className="profile__buttons-small">
              <a
                href="https://www.github.com"
                target="_blank"
                className="button button__small button__gray"
                rel="noreferrer">
                <i className="ri-github-line" />
              </a>

              <a
                href="https://www.github.com"
                target="_blank"
                className="button button__small button__gray"
                rel="noreferrer">
                <i className="ri-linkedin-line" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="main">
        <motion.section
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true }}
          className="filters container">
          {/* <ul className="filters__content">
            <button
              className={`filters__button ${
                filterTab === 1 && 'filter-tab-active'
              }`}
              onClick={() => toggleTab(1)}>
              Projects
            </button>
            <button
              className={`filters__button ${
                filterTab === 2 && 'filter-tab-active'
              }`}
              onClick={() => toggleTab(2)}>
              Skills
            </button>
          </ul> */}

          <div className="filters__sections">
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className={`projects__content grid ${
                activeTab === 1 ? 'filters__active' : 'filters__nonactive'
              }`}
              id="projects">
              {data.works.map(item => (
                <article className="projects__card" key={item.id}>
                  {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                  <img src={item.image} alt="" className="projects__img" />

                  <div className="projects__modal">
                    <div>
                      <span className="projects__subtitle">
                        {item.projectType}
                      </span>
                      <h3 className="projects__title">{item.projectName}</h3>
                      <a
                        href={item.linkUrl}
                        className="projects__button button button__small"
                        target="_blank"
                        rel="noreferrer">
                        <i className="ri-link" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className={`skills__content grid ${
                activeTab === 2 ? 'filters__active' : 'filters__nonactive'
              }`}
              id="skills">
              <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advance</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line" />

                      <div>
                        <h3 className="skills__name">Node Js</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
