import { FC } from 'react';
import { TextControl } from '../../../components/TextControl';
import { TextControlStore } from '../../../store/TextControlStore';
import { ButtonConfig } from '../../../common/types/ButtonConfig';
import Label from '../styles/Label';
import Wrapper from '../styles/Wrapper';

const Control1: FC = () => {
  const store = new TextControlStore();

  const rightButtons: ButtonConfig[] = [
    {
      text: 'Очистить',
      onClick: () => store.clear(),
    },
    {
      text: 'Hello',
      onClick: () => store.setHelloWorld(),
    },
  ];

  return (
    <Wrapper>
      <Label>Контрол 1 </Label>
      <TextControl store={store} rightButtons={rightButtons} placeholder='Введите текст' />
    </Wrapper>
  );
};

export default Control1;
