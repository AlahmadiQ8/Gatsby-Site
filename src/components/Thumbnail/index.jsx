import React from 'react';

import './index.scss';
import thumbnail from './thumbnail.jpg';

const Thumbnail = () => (
  <div className="thumbnail">
    <img className="thumbnail__img" src={thumbnail} alt="Mohammad Alahmadi" />
  </div>
);

export default Thumbnail;
