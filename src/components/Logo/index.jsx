import React from 'react';

import './index.scss';

const Logo = ({ mainClass, trianglesClass, circlesClass }) => {

  const strokeWidth = '.75';
  return (
    <div className={`logo-svg ${mainClass}`}>
      <svg width="65" height="34" viewBox="0 0 65 34" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <g className={`logo-svg__triangles ${trianglesClass}`}>
            <path d="M11.49 11.49L21.995.985 32.5 21.995 43.005.985 53.51 11.49 32.5 4.53z" />
            <path
              stroke="#FFF"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              d="M53.51 32.5V11.49h10.505zM11.49 32.5V11.49H.985zM53.51 11.49L43.005.985l21.01 10.505zM11.49 11.49L21.995.985.985 11.49z"
            />
            <path
              d="M24.996 6.988L21.995.985 32.5 4.487 43.005.985l-3.001 6.003L53.51 11.49 32.5 21.995 11.49 11.49l13.506-4.502zm0 0L32.5 21.995l7.504-15.007L32.5 4.487l-7.504 2.5z"
              stroke="#FFF"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
          </g>
          <g className={`logo-svg__circles ${circlesClass}`} fill="#FFF">
            <ellipse cx="11.484" cy="11.462" rx="1" ry="1" />
            <ellipse cx="1" cy="11.462" rx="1" ry="1" />
            <ellipse cx="21.968" cy=".998" rx="1" ry="1" />
            <ellipse cx="11.484" cy="32.39" rx="1" ry="1" />
            <ellipse cx="32.452" cy="21.926" rx="1" ry="1" />
            <ellipse cx="53.419" cy="11.462" rx="1" ry="1" />
            <ellipse cx="63.903" cy="11.462" rx="1" ry="1" />
            <ellipse cx="53.419" cy="32.39" rx="1" ry="1" />
            <ellipse cx="43" cy=".998" rx="1" ry="1" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
