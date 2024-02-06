/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text} from 'react-native';
import nfcManager, {Ndef, NfcTech, TagEvent} from 'react-native-nfc-manager';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Divider from '../../components/Divider';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import Keyboard from '../../components/Keyboard';
import {useNumpad} from '../../hooks/useNumpad';

function AmountScreen(): React.JSX.Element {
  const numpadData = useNumpad('SAT', 10000000);

  useEffect(() => {
    nfcManager.isSupported().then(res => {
      if (res) nfcManager.start();
    });
  }, []);

  async function readNdef() {
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

  return (
    <Container size="small">
      <Flex flex={1} direction="column" align="center" justify="center">
        <Heading>{numpadData.intAmount['SAT']}</Heading>

        <Divider y={24} />

        <Keyboard numpadData={numpadData} />

        <Divider y={24} />
      </Flex>

      <Flex gap={8}>
        <Button onClick={() => null} disabled={false}>
          <Text>Generar</Text>
        </Button>
      </Flex>

      {/* <TouchableOpacity onPress={readNdef}>
        <Text>Scan</Text>
      </TouchableOpacity> */}
    </Container>
  );
}

export default AmountScreen;
