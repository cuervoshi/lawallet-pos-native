import Flex from '../Flex';
import Button from '../Button';
import {IUseNumpad} from '../../hooks/useNumpad';
import {Text} from 'react-native';

const timeOut: Record<string, NodeJS.Timeout> = {};
type KeyboardProps = {
  numpadData: IUseNumpad;
};

export default function Keyboard({numpadData}: KeyboardProps) {
  const {handleNumpad, resetAmount, deleteNumber} = numpadData;

  const handleDeleteOnMouseDown = () =>
    (timeOut.reset = setTimeout(() => resetAmount(), 500));

  const handleDeleteOnMouseUp = () => clearTimeout(timeOut?.reset);

  return (
    <Flex direction="column" gap={64}>
      <Flex gap={8}>
        <Button variant="borderless" onClick={() => handleNumpad('1')}>
          <Text>1</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('2')}>
          <Text>2</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('3')}>
          <Text>3</Text>
        </Button>
      </Flex>
      <Flex gap={8}>
        <Button variant="borderless" onClick={() => handleNumpad('4')}>
          <Text>4</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('5')}>
          <Text>5</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('6')}>
          <Text>6</Text>
        </Button>
      </Flex>
      <Flex gap={8}>
        <Button variant="borderless" onClick={() => handleNumpad('7')}>
          <Text>7</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('8')}>
          <Text>8</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('9')}>
          <Text>9</Text>
        </Button>
      </Flex>
      <Flex gap={8}>
        <Button variant="borderless" onClick={() => handleNumpad('00')}>
          <Text>00</Text>
        </Button>
        <Button variant="borderless" onClick={() => handleNumpad('0')}>
          <Text>0</Text>
        </Button>
        <Button
          onTouchStart={handleDeleteOnMouseDown}
          onTouchEnd={handleDeleteOnMouseUp}
          onMouseDown={handleDeleteOnMouseDown}
          onMouseUp={handleDeleteOnMouseUp}
          variant="borderless"
          color="error"
          onClick={deleteNumber}>
          {/* <ClearCharacterIcon /> */}
          <Text>Borrar</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
