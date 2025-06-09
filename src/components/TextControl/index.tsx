import { observer } from 'mobx-react-lite';
import { ButtonConfig } from '../../common/types/ButtonConfig';
import Button from './styles/Button';
import Container from './styles/Container';
import Input from './styles/Input';

type Props = {
  store: {
    value: string;
    setValue: (v: string) => void;
  };
  leftButtons?: ButtonConfig[];
  rightButtons?: ButtonConfig[];
  placeholder?: string;
};

export const TextControl = observer(({ store, leftButtons = [], rightButtons = [], placeholder }: Props) => {
  return (
    <Container>
      {leftButtons.map((button, i) => (
        <Button key={i} onClick={button.onClick}>
          {button.text}
        </Button>
      ))}

      <Input
        variant='standard'
        value={store.value}
        onChange={(e) => store.setValue(e.target.value)}
        placeholder={placeholder}
      />

      {rightButtons.map((button, i) => (
        <Button key={i} onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </Container>
  );
});
