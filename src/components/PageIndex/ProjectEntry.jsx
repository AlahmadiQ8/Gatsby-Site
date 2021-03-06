import React from 'react';
import Link from 'gatsby-link';

import Flex from '../Flex';

const ProjectEntry = ({ title, desc, imgURl, alt }) => {
  const img = <img className="entry__img" src={imgURl} alt={alt} />;
  return (
    <div className="entry">
      <Flex valign="center">
        {imgURl ? img : null}
        <div>
          <Link to="#"><h2 className="entry__h2">{title}</h2></Link>
          <p className="entry__p">{desc}</p>
        </div>
      </Flex>
    </div>
  );
};

ProjectEntry.defaultProps = {
  title: 'Test Entry',
  desc: 'This is only a test entry. It should not be viewable on production.'
}

export default ProjectEntry;
