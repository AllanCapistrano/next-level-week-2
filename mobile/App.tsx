import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import AppStack from './src/routes/AppStack';

/*Para utilizar fontes externas (no terminal): 
expo install expo-font @expo-google-fonts/~nome da fonte~
*/

/*Necessário importar o useFonts uma vez.*/
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

/*Utiliza-se o "<>" e "</>" (fragment), pois no ReactNative, não é possível 
retornar mais de um componente, sem possuir algo entre eles, então coloca o 
fragment para não ser necessário criar um componente para isso (utilizando 
<View> por exemplo). */
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  /*Enquanto as fontes estão carregando, mostra o loading.*/
  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
