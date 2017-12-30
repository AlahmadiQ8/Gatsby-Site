import React from 'react';
import Link from 'gatsby-link';
import cx from 'classnames';

import Flex from '../Flex';

import './index.scss';

const ProjectEntry = ({ title, desc, imgURl, alt, small, to, date }) => {
  const img = <img className="entry__img" src={imgURl} alt={alt} />;
  const h2ClassName = cx(
    'entry__h2',
    { 'entry__h2--small': small }
  );
  const p2ClassName = cx(
    'entry_p',
    { 'entry__p--small': small }
  );

  return (
    <Link to={to}>
      <div className="entry">
        <Flex valign="center">
          {imgURl ? img : null}
          <div style={{ width: '100%' }}>
            <div className="flex-col flex-md-row">
              <h2 className={h2ClassName}>{title}</h2>
              {date && <div className="gray-500">{date}</div>}
            </div>
            <p className={p2ClassName}>{!small && desc}</p>
          </div>
        </Flex>
      </div>
    </Link>
  );
};

ProjectEntry.defaultProps = {
  title: 'Test Entry',
  desc: 'This is only a test entry. It should not be viewable on production.',
  to: '#',
};

export default ProjectEntry;
