import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AmountScreen from './screens/AmountScreen/AmountScreen';
import {StatusBar, useColorScheme} from 'react-native';
import {CustomDarkTheme, CustomLightTheme} from './constants/themes';
import {AppProvider} from './context/AppContext';

export type AppStackParamList = {
  Inicio: undefined;
  'Definir monto': undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer
      theme={isDarkMode ? CustomDarkTheme : CustomLightTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={CustomDarkTheme.colors.background}
      />

      <AppProvider>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Definir monto" component={AmountScreen} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
