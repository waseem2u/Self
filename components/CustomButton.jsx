import React from 'react';

const CustomButton = ({ children, onClick, className }) => {
  return (
    <button
    className={`pool_wrap ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
  );
};

export default CustomButton;
