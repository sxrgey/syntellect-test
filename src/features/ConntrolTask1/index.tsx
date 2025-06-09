import { FC } from 'react';
import Control1 from './Control1';
import Control2 from './Control2';
import Container from './styles/Container';

const ControlTask1: FC = () => {
  return (
    <Container>
      <Control1 />
      <Control2 />
    </Container>
  );
};

export default ControlTask1;
