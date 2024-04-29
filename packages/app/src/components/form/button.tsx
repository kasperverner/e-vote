import React, { ReactNode } from 'react';
import { Link } from "@tanstack/react-router";

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, className }) => {
  if (to) {
    return (
      <Link to={to}>
        <button
          onClick={onClick}
          className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
