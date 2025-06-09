import { observer } from 'mobx-react-lite';
import { CountryStore } from '../../store/CountryStore';
import { useState } from 'react';
import List from './styles/List';
import Input from './styles/Input';
import Container from './styles/Container';
import CircularProgress from './styles/CircularProgress';
import CountryItem from './CountryItem';

interface Props {
  store: CountryStore;
  label?: string;
}

const CountryControl = observer(({ store, label = 'Страна' }: Props) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <Input
        value={store.search}
        onChange={(e) => store.setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setTimeout(() => setFocus(false), 200)}
        label={label}
      />
      {store.isLoading && <CircularProgress size={20} />}
      {focus && store.results.length > 0 && (
        <List>
          {store.results.map((country, i) => (
            <CountryItem key={i} country={country} onClick={() => store.selectCountry(country)} />
          ))}
        </List>
      )}
    </Container>
  );
});

export default CountryControl;
