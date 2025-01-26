import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  btnType?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

const Button = ({ 
  btnType = "button", 
  children, 
  className = "", 
  ariaLabel, 
  onClick 
}: ButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={`bg-rose-700 p-2 px-4 text-slate-200 rounded-xl hover:bg-rose-600 hover:text-zinc-200 transition delay-75 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;