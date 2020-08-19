import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeHolder: string;
}

/*Desestruturando as "props, e utilizando o rest operator" */
const Input: React.FC<InputProps> = ({ placeHolder, name, ...rest }) => {
  return (
    <div className="input-block">
      <input type="text" id={ name } placeholder={placeHolder} { ...rest } />
    </div>
  );
}

export default Input;