import { styled, TextField } from '@mui/material';

const borderColor = 'rgb(48, 125, 64)';

const Input = styled(TextField)`
  width: 320px;

  input {
    height: 1.5rem;
    font-size: 1.2rem;
  }

  label.Mui-focused {
    color: ${borderColor};
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${borderColor};
    }
  }
`;

export default Input;
