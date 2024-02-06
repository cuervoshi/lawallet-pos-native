import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Flex from '../../components/Flex';
import Button from '../../components/Button';
import {Text} from 'react-native';
import Divider from '../../components/Divider';
import {useAppContext} from '../../context/AppContext';

const HomeScreen = () => {
  const {receiverInfo, saveAddress} = useAppContext();
  const [newAddress, setNewAddress] = useState<string>(
    receiverInfo?.lud16 ?? '',
  );

  const handleChangeAddress = (text: string) => {
    setNewAddress(text);
  };

  return (
    <Container size="small">
      <Flex flex={1} direction="column" align="center" justify="center">
        <Input
          placeholder="usuario@lawallet.ar"
          value={newAddress}
          onChange={handleChangeAddress}
        />

        <Divider y={24} />
        <Divider y={24} />

        <Flex>
          <Button
            onClick={() => {
              if (!newAddress.length) return;
              saveAddress(newAddress);
            }}>
            <Text>Guardar</Text>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HomeScreen;
