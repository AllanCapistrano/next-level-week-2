import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; /*Ícones que serão utilizados.*/

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  /*Não usa o <NavigationContainer> pois isso já vai ficar dentro de um.*/
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0, /*Retirar as sombras Android*/
          shadowOpacity: 0, /*Retirar as sombras IOS*/
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        inactiveTintColor: '#c1bccc', /*Cor do texto inativo.*/
        activeBackgroundColor: '#ebebf5',
        activeTintColor: '#32264d' /*Cor do texto ativo.*/
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={focused? '#8257e5' : color} />
            );
          }
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={focused? '#8257e5' : color} />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;