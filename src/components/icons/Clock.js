import React from 'react';

const Clock = ({ size = 25 }) => {
  return (
    <div>
      <svg
        className="clock"
        viewBox="0 0 399 399"
        width={`${size}`}
        height={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#D8D8D8" cx="199.5" cy="199.5" r="199.5" />
          <path
            d="M200.5 202.5v-146M200.5 202.5L284 270"
            stroke="#fff"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default Clock;
