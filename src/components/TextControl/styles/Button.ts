import { Button as MuiButton, styled } from '@mui/material';

const Button = styled(MuiButton)`
  min-width: min-content;
  padding: 4px 8px;

  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  text-transform: none;

  background-color: rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
  }
`;

export default Button;
