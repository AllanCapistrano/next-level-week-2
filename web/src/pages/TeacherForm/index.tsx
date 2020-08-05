import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'; /*Para poder redirecionar o usuário depois que uma ação acontece.*/

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  /*Para que o React crie os componentes de forma dinâmica, utiliza-se objetos com useState */
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  /*Necessário desestruturar, pois o useState retorna um Array, e o primeiro item é o objetos que queremos, e o segundo item é uma função para podermos alterar esse objeto.*/
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  /*Função que criar uma novo horário.*/
  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, /*Copiando o array, e depois adicionando um novo item.*/
      { week_day: 0, from: '', to: '' }
    ]);

  }

  /*Função para alterar os campos dos horários disponíveis.*/
  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      /*Se a posição corresponde ao índice do item no map, altera o campo com o valor recebido.*/
      if(index === position) {
        return { ...scheduleItem, [field]: value }; /*Utiliza os colchetes para não alterar o nome da propriedade.*/
      }

      return scheduleItem; /*Caso o índice seja diferente da posição.*/
    });

    setScheduleItems(updatedScheduleItems);
  }

  /*Função que cria uma nova aula.*/
  function handleCreateClass(e: FormEvent) {
    e.preventDefault(); /*Não dar reload na página ao clicar em salvar.*/

    /*Parâmetros: rota, informações a serem passadas.*/
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost), /*Pois a API recebe o cost como número.*/
      schedule: scheduleItems /*Como o nome e o valor não são os mesmos, é necessário usar o dois pontos, e informar o valor.*/
    }).then(() => { /*Caso ocorra tudo certo.*/
      alert('Cadastro realizado com sucesso!')

      history.push('/'); /*Redirecionar o usuário para a página inicial.*/
    }).catch(() => { /*Caso ocorra algum erro.*/
      alert('Erro ao tentar realizar o cadastro!')
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
            </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />

                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                  />

                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;