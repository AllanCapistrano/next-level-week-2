import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

/*Desestruturando as "props, e utilizando o rest operator" */
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={ name }>{ label }</label>
      <textarea id={ name } { ...rest } />
    </div>
  );
}

export default Textarea;