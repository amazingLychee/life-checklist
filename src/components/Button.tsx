import React, { useState, useEffect } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // className 是可选的
}
const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  const [btnClass, setBtnClass] = useState('');

  useEffect(() => {
    switch (className) {
      case '':
        setBtnClass('bg-slate-700 hover:bg-slate-800 text-white');
        break;
      case 'success':
        setBtnClass('bg-green-300 hover:bg-green-400 text-slate-700');
        break;
      case 'danger':
        setBtnClass('bg-red-500 hover:bg-red-600 text-white');
        break;
    }
  });

  return (
    <button
      className={`${btnClass} font-bold py-2 px-4 rounded shadow-md`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
