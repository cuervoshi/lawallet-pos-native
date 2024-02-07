import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {AppStackParamList} from '../App';
import {LNRequestResponse, parseLUD16Info, validateEmail} from '../lib/utils';

export type ReceiverInformation =
  | {
      lud16: string;
      payRequest: LNRequestResponse;
    }
  | undefined;

type AppContextType = {
  receiverInfo: ReceiverInformation;
  saveAddress: (lud16: string) => void;
};

const AppContext = React.createContext<AppContextType>({
  receiverInfo: undefined,
  saveAddress: () => null,
});

export const AppProvider = ({children}: React.PropsWithChildren<any>) => {
  const [receiverInfo, setReceiverInfo] =
    React.useState<ReceiverInformation>(undefined);

  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();

  const loadStoragedAddress = async () => {
    const storagedInfo = await AsyncStorage.getItem('receiver');
    if (!storagedInfo) return;

    const receiver = JSON.parse(storagedInfo);
    setReceiverInfo(receiver);
    navigate('Monto');
  };

  const saveAddress = async (lud16: string) => {
    const isValidAddress = validateEmail(lud16);
    if (!isValidAddress) return false;

    const recInfo: ReceiverInformation = await parseLUD16Info(lud16);
    AsyncStorage.setItem('receiver', JSON.stringify(recInfo));
    setReceiverInfo(recInfo);
    navigate('Monto');
    return true;
  };

  React.useEffect(() => {
    loadStoragedAddress();
  }, []);

  const value = {
    receiverInfo,
    saveAddress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);
