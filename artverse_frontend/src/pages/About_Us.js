import React from 'react'
import '../styles/about_us.css';

import About_us_header from '../components/About_us_header.js';
import About_us_1st_sec from '../components/about_us_1st_sec.js';
import About_us_2nd_sec from '../components/about_us_2nd_sec.js';
import About_us_3rd_sec from '../components/About_us_3rd_sec.js';
import About_us_4th_sec from '../components/About_us_4th_sec.js';
import About_us_footer from '../components/about_us_footer.js';
function About_Us() {
  return (
    <div className='aboutUs'>
    <About_us_header />
    <About_us_1st_sec />
    <About_us_2nd_sec />
    <About_us_3rd_sec />
    <About_us_4th_sec />
    <About_us_footer />
    </div>
  )
}

export default About_Us