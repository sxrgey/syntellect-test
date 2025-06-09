import { List as MuiList, styled } from '@mui/material';

const List = styled(MuiList)`
  max-height: 260px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;

  border: 1px solid #ccc;
  background-color: rgba(0, 0, 0, 0.05);

  overflow-y: auto;
  z-index: 1;
`;

export default List;
