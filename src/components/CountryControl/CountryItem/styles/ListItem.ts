import { ListItem as MuiListItem, styled } from '@mui/material';

const ListItem = styled(MuiListItem)`
  display: flex;
  padding: 4px 8px;
  gap: 4px;

  cursor: pointer;

  &:hover {
    border-left: 1px solid black;
    & img {
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
      animation: pulse 1.5s ease-in-out infinite;
    }
  }
`;

export default ListItem;
