/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../../App';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import Keyboard from '../../components/Keyboard';
import {useAppContext} from '../../context/AppContext';
import {useNumpad} from '../../hooks/useNumpad';
import {generateInvoice} from '../../lib/utils';

function AmountScreen(): React.JSX.Element {
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();
  const {receiverInfo} = useAppContext();
  const numpadData = useNumpad('SAT', 10000000);

  const handleCreateInvoice = async () => {
    if (!receiverInfo || !receiverInfo.payRequest.callback) return;
    const mSats: number = numpadData.intAmount.SAT * 1000;

    if (mSats === 0 || mSats > receiverInfo.payRequest.maxSendable!) {
      return;
    }

    const pr: string = await generateInvoice(
      receiverInfo.payRequest.callback,
      numpadData.intAmount.SAT * 1000,
    );

    navigate('Pago', {pr, amount: mSats / 1000});
  };

  return (
    <Container size="small">
      <Flex flex={1} justify="center">
        <Text>{receiverInfo?.lud16 ?? ''}</Text>
      </Flex>

      <Flex flex={1} direction="column" align="center" justify="center">
        <Heading>{numpadData.intAmount.SAT}</Heading>

        <Divider y={24} />
        <Divider y={24} />

        <Keyboard numpadData={numpadData} />
      </Flex>

      <TouchableOpacity
        onPress={async () => {
          // CiontekPrinter.testPrint();
        }}>
        <Text>Scan</Text>
      </TouchableOpacity>

      <Divider y={24} />
      <Divider y={24} />
      <Divider y={24} />
      <Divider y={24} />

      <Flex flex={1} gap={16} justify="end" align="center">
        <Button onClick={handleCreateInvoice} disabled={false}>
          <Text>Generar</Text>
        </Button>
      </Flex>
    </Container>
  );
}

export default AmountScreen;
