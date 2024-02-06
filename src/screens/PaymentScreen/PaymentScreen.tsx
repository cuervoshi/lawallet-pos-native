import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Divider from '../../components/Divider';
import {QRCode} from '../../components/QRCode';
import nfcManager, {Ndef, NfcTech, TagEvent} from 'react-native-nfc-manager';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../../App';

const PaymentScreen = ({
  route,
}: {
  route?: {params: {pr: string; amount: number}};
}) => {
  const [nfcSupported, setNfcSupported] = useState<boolean>(false);
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();

  useEffect(() => {
    if (!route || !route.params || !route.params.pr) {
      navigate('Monto');
      return;
    }
  }, [route]);

  useEffect(() => {
    nfcManager
      .isSupported()
      .then(res => {
        setNfcSupported(res);
        if (res) nfcManager.start();
      })
      .catch(err => console.log(err));
  }, []);

  async function readNdef() {
    if (nfcSupported) {
      try {
        console.log('start read');
        await nfcManager.requestTechnology(NfcTech.Ndef);

        const tag: TagEvent | null = await nfcManager.getTag();
        const payload: number[] = tag?.ndefMessage[0].payload ?? [];
        const msgBuffer: Uint8Array = Uint8Array.from(payload);

        console.log(Ndef.text.decodePayload(msgBuffer));
      } catch (ex) {
        console.warn('Oops!', ex);
      } finally {
        nfcManager.cancelTechnologyRequest();
      }
    }
  }

  if (!route || !route.params || !route.params.pr) return;

  return (
    <Container size="small">
      <Divider y={24} />

      <Flex flex={1} justify="center" align="center">
        <QRCode size={300} value={route.params.pr} />
      </Flex>

      <Divider y={24} />

      <Flex direction="column" justify="center" align="center" flex={1} gap={8}>
        <Text>Esperando pago de {route.params.amount} SATs...</Text>

        <Divider y={24} />

        <ActivityIndicator />
      </Flex>
    </Container>
  );
};

export default PaymentScreen;
