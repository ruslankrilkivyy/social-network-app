import React from 'react';

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={!disabled ? `button ${className}` : `button ${className} disabled`}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
