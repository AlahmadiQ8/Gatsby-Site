import React from 'react';
import Helmet from 'react-helmet';

import 'styles/bootstrap-reboot.css';

import Nav from '../components/Nav';

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav location={location} />
    {children()}
  </div>
);

export default TemplateWrapper;
