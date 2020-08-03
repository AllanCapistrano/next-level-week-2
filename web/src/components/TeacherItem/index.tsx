import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/43974590?s=460&u=442fc6747969221765b68c17c9b697f4ff34e11d&v=4" alt="Allan Capistrano"/>
                        <div>
                            <strong>Allan Capistrano</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 250,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;