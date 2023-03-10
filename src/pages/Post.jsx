import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

function Post() {
  return (
    <main className="main">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <section className="projects projects__post">
          <div className="container">
            <h3 className="projects__bigtitle">My Works</h3>

            {/* Project */}
            <div className="projects__content grid">
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
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}

export default Post;
