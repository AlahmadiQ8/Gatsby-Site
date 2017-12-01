import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import Flex from '../Flex';

const ProjectEntry = ({ title, desc, imgURl, alt, small }) => {
  const img = <img className="entry__img" src={imgURl} alt={alt} />;
  const className = cx(
    'entry',
    { 'entry--border-bottom': !imgURl }
  );
  const h2ClassName = cx(
    'entry__h2',
    { 'entry__h2--small': small }
  );

  return (
    <div className={className}>
      <Flex valign="center">
        {imgURl ? img : null}
        <div>
          <Link to="#"><h2 className={h2ClassName}>{title}</h2></Link>
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
