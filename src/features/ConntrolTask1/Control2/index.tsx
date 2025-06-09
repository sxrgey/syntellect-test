import { FC } from 'react';
import { TextControl } from '../../../components/TextControl';
import { TextControlStore } from '../../../store/TextControlStore';
import Label from '../styles/Label';
import Wrapper from '../styles/Wrapper';

const Control2: FC = () => {
  const store = new TextControlStore();

  const handleCheckNumber = () => {
    const val = Number(store.value);
    if (!isNaN(val)) {
      alert(`Это число: ${val}`);
    }
  };

  return (
    <Wrapper>
      <Label>Контрол 2</Label>
      <TextControl
        store={store}
        placeholder='Введите текст'
        leftButtons={[
          {
            text: 'Число?',
            onClick: handleCheckNumber,
          },
        ]}
        rightButtons={[
          {
            text: 'Alert',
            onClick: () => {
              alert(store.value);
            },
          },
        ]}
      />
    </Wrapper>
  );
};

export default Control2;
