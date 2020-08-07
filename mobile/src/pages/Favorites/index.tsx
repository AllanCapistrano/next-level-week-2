import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  
  function loadFavorites() {
    /*Nessa storage só é possível salvar dados em formato de texto, por isso converte pra JSON.*/
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        

        setFavorites(favoritedTeachers);
      }
    });
  }

  /*Executa a ação toda vez que a tela entra em foco. Nesse caso não usa o UseEffect, pois ele não faz isso.*/
  useFocusEffect(() => {
    loadFavorites();
  });
  
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ /*Forma melhor de fazer o padding para esse componente.*/
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id}
              teacher={teacher}
              favorited={true} /*Como ta na aba de favoritos, todos os que estão já são favoritos.*/
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;