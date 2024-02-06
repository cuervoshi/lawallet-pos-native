import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Divider from '../../components/Divider';
import {QRCode} from '../../components/QRCode';

const PaymentScreen = () => {
  return (
    <Container size="small">
      <Divider y={24} />

      <Flex flex={1} justify="center" align="center">
        <QRCode size={300} value={`asdasd`} />
      </Flex>

      <Divider y={24} />

      <Flex direction="column" justify="center" align="center" flex={1} gap={8}>
        <Text>Esperando pago...</Text>

        <Divider y={24} />

        <ActivityIndicator />
      </Flex>
    </Container>
  );
};

export default PaymentScreen;
