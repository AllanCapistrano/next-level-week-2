import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'; /*Botão retangular que se adapta ao SO.*/

import api from '../../services/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

/*A tag Text herda a estilização caso esteja dentro de outra tag Text.*/
/*Faz um Array [styles.one, styles.two] para passar mais de um estilo para o mesmo elemento.*/
function Landing() {
  const { navigate } = useNavigation(); /*Para poder navegar entre as páginas.*/
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
      /*Executando a rota connections da API. Mesma forma que fez na versão Web.*/
      api.get('connections').then(response => {
        const { total } = response.data;
  
        setTotalConnections(total);
      });
    }, []);

  function handleNavigateToGiveClasses() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          onPress={handleNavigateToStudyPages} 
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClasses} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;