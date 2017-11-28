import React from 'react';

import Flex from '../Flex';

const ProjectEntry = ({ imgURl, alt }) => {
  const img = <img className="entry__img" src={imgURl} alt={alt} />;
  return (
    <div className="entry">
      <Flex valign="center">
        {imgURl ? img : null}
        <div>
          <h2 className="entry__h2">Connect 4</h2>
          <p className="entry__p">Now go build something great.</p>
        </div>
      </Flex>
    </div>
  );
};
// style={{ borderRadius: '20%', marginRight: '30px' }}
export default ProjectEntry;
