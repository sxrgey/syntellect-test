import { FC } from 'react';
import CountryControl from '../../components/CountryControl';
import { CountryStore } from '../../store/CountryStore';
import Container from './styles/Container';

const ControlTask2: FC = () => {
  const storeFor3 = new CountryStore(3);
  const storeFor10 = new CountryStore(10);

  return (
    <Container>
      <CountryControl store={storeFor3} label='Страна (3)' />
      <CountryControl store={storeFor10} label='Страна (10)' />
    </Container>
  );
};

export default ControlTask2;
