import React from 'react';
import "./Button.module.css"

export default function Button({ label, onClick, type = 'button' }) {
  return (
      <button type={type} onClick={onClick} className='bg-black hover:bg-violet-600 text-white py-2 px-4 rounded-[10px] mr-[10px]'>
        {label}
      </button>
  );
};