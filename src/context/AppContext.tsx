import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {AppStackParamList} from '../App';

type AppContextType = {
  address: string;
  saveAddress: (lud16: string) => void;
};

const AppContext = React.createContext<AppContextType>({
  address: '',
  saveAddress: () => null,
});

export const AppProvider = ({children}: React.PropsWithChildren<any>) => {
  const [address, setAddress] = React.useState<string>('');

  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();

  const loadStoragedAddress = async () => {
    const storagedAddress = await AsyncStorage.getItem('lud16');
    if (!storagedAddress) return;

    setAddress(storagedAddress);
    navigate('Definir monto');
  };

  const saveAddress = async (lud16: string) => {
    setAddress(lud16);
    AsyncStorage.setItem('lud16', lud16);
    navigate('Definir monto');
  };

  React.useEffect(() => {
    loadStoragedAddress();
  }, []);

  const value = {
    address,
    saveAddress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
