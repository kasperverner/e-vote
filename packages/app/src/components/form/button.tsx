import React, { ReactNode } from 'react';
import { Link } from "@tanstack/react-router";

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, className, type = "button", disabled = false }) => {
  if (to) {
    return (
      <Link to={to}>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none ${className}`}
          type={type}
          disabled={disabled}
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
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
