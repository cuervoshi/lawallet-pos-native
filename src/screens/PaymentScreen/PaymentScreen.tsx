import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {AppStackParamList} from '../../App';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import Flex from '../../components/Flex';
import {QRCode} from '../../components/QRCode';
import {useNdef} from '../../hooks/useNdef';
import {claimLNURLw, getPayRequest} from '../../lib/utils';

const lnurlwToHttps = (lnurlw: string) => {
  const URLWithdrawRequest: string = lnurlw.replace('lnurlw://', 'https://');
  return URLWithdrawRequest;
};

const PaymentScreen = ({
  route,
}: {
  route?: {params: {pr: string; amount: number}};
}) => {
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();

  const handleScanNdef = async (decodedPayload: string) => {
    if (!decodedPayload.startsWith('lnurlw://')) return;

    const wRequest = await getPayRequest(lnurlwToHttps(decodedPayload));
    if (
      !wRequest ||
      !wRequest.callback ||
      !wRequest.k1 ||
      wRequest.maxWithdrawable! < route!.params.amount
    )
      return;

    const claimed: boolean = await claimLNURLw(
      wRequest.callback,
      wRequest.k1,
      route!.params.pr,
    );

    if (claimed) navigate('Monto');
  };

  const handleScanError = (err?: string) => {
    console.log('error on scan tag: ', err);
  };

  const {nfcSupported, startReadTag, stopReadTag, isReading} = useNdef({
    onScan: handleScanNdef,
    onError: handleScanError,
  });

  useEffect(() => {
    if (!route || !route.params || !route.params.pr) {
      navigate('Monto');
      return;
    }
  }, [route]);

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

        {isReading ? (
          <>
            <Text>Acerque la tarjeta al lector nfc</Text>
            <TouchableOpacity onPress={stopReadTag}>
              <Text>Stop scan</Text>
            </TouchableOpacity>
          </>
        ) : (
          nfcSupported && (
            <TouchableOpacity onPress={startReadTag}>
              <Text>Scan NFC</Text>
            </TouchableOpacity>
          )
        )}

        <Divider y={24} />

        <ActivityIndicator />
      </Flex>
    </Container>
  );
};

export default PaymentScreen;
