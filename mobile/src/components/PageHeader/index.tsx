import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode; /*ReactNode significa que pode receber um componente como uma propriedade.*/
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() { /*Nesse caso não usa o goBack(), pois ele pode ficar alternando as abas.*/
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>

        <Image source={logoImg} resizeMode='contain' />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;