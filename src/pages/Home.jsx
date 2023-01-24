import React from 'react';
import { images } from '../data';

function Home() {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="container grid">
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
            <h3>Hello there, I am Developer from Malaysia</h3>
            <img src={images.myflag} alt="logo" />
          </div>

          <div className="">
            <h1 className="">I am, Akmal Adnan</h1>
            <p className="home__description">
              Software Engineer ( Developer / Designer )
            </p>

            {/* <a href="/#" className="button">
              Download Now <i className="ri-arrow-right-line" />
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
