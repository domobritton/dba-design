import React from 'react';

import { MyProvider } from '../hooks';
import Layout from './layout';
import SEO from './seo';
import Hero from './hero';
import Work from './work';
import About from './about';
import Contact from './contact';

const Home = () => {
  return (
    <MyProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Work />
        <About />
        <Contact />
      </Layout>
    </MyProvider>
  );
};

export default Home;
