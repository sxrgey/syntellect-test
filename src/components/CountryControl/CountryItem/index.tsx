import { FC } from 'react';
import ListItem from './styles/ListItem';
import { ListItemText } from '@mui/material';
import Flag from './styles/Flag';
import { CountryInfo } from '../../../api/apiService';

type Props = {
  country: CountryInfo;
  onClick: () => void;
};

const CountryItem: FC<Props> = ({ country, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <ListItemText primary={country.name} secondary={`${country.fullName}`} />
      <Flag src={country.flag} />
    </ListItem>
  );
};

export default CountryItem;
