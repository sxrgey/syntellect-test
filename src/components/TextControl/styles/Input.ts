import { styled, TextField } from '@mui/material';

const Input = styled(TextField)`
  input {
    height: 2rem;
    font-size: 1.5rem;
  }

  & ::placeholder {
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;

    color: black;
    opacity: 0.2;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid rgb(48, 125, 64);
  }
`;

export default Input;
