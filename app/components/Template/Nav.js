import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Jiang</h2>
        <p><a href="mailto:kev2018@mit.edu">kev2018@mit.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I'm Kevin! I'm an <a href="https://web.mit.edu/">MIT</a> undergrad interested in entrepreneurship, ML/AI, and SWE :). 
        I'm currently working at <a href="https://www.odaportal.com/">Oda</a> (YC W20).
        Before Oda, I was at <a href="https://instrumental.com/">Instrumental</a>, <a href="https://mitsloan.mit.edu/">MIT Sloan School of Management</a>, <a href="https://quest.mit.edu/">MIT Quest for Intelligence</a>, <a href="http://www.rle.mit.edu/">MIT RLE</a>, and <a href="https://www.ford.com/">Ford</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/personal-site/resume" className="button">Learn More</Link> : <Link to="/personal-site/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Kevin Jiang <Link to="/">https://github.com/kev2010/personal-site</Link>.</p>
    </section>
  </section>
);

export default Nav;
