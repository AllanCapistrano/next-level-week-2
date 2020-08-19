import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import NewInput from '../../components/NewInput';

import './styles.css';

function Register() {
  return(
    <div id="page-register">
      <div id="page-register-content" className="container">
        <div className="register-container">
          <div className="title">
            <h2>Cadastro</h2>
            Preencha os dados abaixo para começar.
          </div>
          <div className="register-fields">
            <NewInput 
              name="name"
              placeHolder="Nome"
            />
            <NewInput 
              name="lastName"
              placeHolder="Sobrenome"
            />
            <NewInput 
              name="email"
              placeHolder="E-mail"
            />
            <NewInput 
              name="password"
              placeHolder="Senha"
            />
          </div>

          <button type="submit" >Concluir cadastro</button>
        </div>

        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de estudos online.</h2>
        </div>
      </div>
    </div>
  );
}

export default Register;