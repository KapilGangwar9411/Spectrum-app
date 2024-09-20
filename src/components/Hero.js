import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles.css';

const Hero = () => {
  return (
    <div class="hero-container">
        <section class="hero">
            <section class="hero-text-container">
                <div class="hero-text">
                    <h1 class="Unleash">unleash</h1>
                    <span class="Creativity">Creativity</span>
                    <span class="with">with</span>
                    <h1 class="highlight-text">Spectrum</h1>
                    <div class="find-passion">
                        <span>Join us in Our Creative Journey</span>
                        <button class="go-button">Join Now</button>
                    </div>
                </div>
            </section>

        <div className="image-container">
          <div className="image-wrapper">
            <img src="images/cinematography.png" alt="Writing Course" />
            <div className="image-info">
              <h2>Cinematography</h2>
            </div>
          </div>
          <div className="image-wrapper expanded">
            <img src="images/film-making.png" alt="Business" />
            <div className="image-info">
            <Link to="/short-films">
                <h2>Film Making</h2>
              </Link>
            </div>
          </div>
          <div className="image-wrapper">
            <img src="images/editing.png" alt="Placeholder" />
            <div className="image-info">
              <h2>Video Editing</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
