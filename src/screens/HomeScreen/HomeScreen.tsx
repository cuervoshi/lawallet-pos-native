import React, {useEffect} from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Flex from '../../components/Flex';
import Button from '../../components/Button';
import {Text} from 'react-native';
import Divider from '../../components/Divider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const loadStorage = async () => {
    const lud16Storage = await AsyncStorage.getItem('lud16');
    if (!lud16Storage) return;

    // redirect to amount
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <Container size="small">
      <Flex flex={1} direction="column" align="center" justify="center">
        <Input placeholder="usuario@lawallet.ar" />

        <Divider y={24} />
        <Divider y={24} />

        <Flex>
          <Button onClick={() => null}>
            <Text>Guardar</Text>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HomeScreen;
