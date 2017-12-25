import React from 'react';
import Helmet from 'react-helmet';

import 'styles/bootstrap-reboot.css';
import 'styles/base.scss';
import 'styles/prism-facebook.scss';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children, location }) => {
  const bgColor = location.pathname.includes('/blog/all') ? 'bg-gray-150' : '';
  return (
    <div className="root">
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className={`root__body ${bgColor}`}>
        <Nav location={location} />
        <div className="nav__margin">{children()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
