import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>Built during my virtual Zoom semester due to COVID-19. Courtesy of Michael D'Angelo's amazing <a href="https://github.com/mldangelo/personal-site">template</a>.</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to play around with the website to learn more about me!
      </p>
      <p> Source available <a href="https://github.com/kev2010/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
