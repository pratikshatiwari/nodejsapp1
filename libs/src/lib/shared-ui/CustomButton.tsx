import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import '../Theme/index.scss';

const CustomButton = styled(Button)<ButtonProps>(({ theme, variant, color }) => ({
  backgroundColor: color === 'secondary' ? purple[700] : purple[500],
  color: theme.palette.getContrastText(color === 'secondary' ? purple[700] : purple[500]),
  '&:hover': {
    backgroundColor: color === 'secondary' ? purple[900] : purple[700],
  },

  // Outlined style
  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    color: color === 'secondary' ? purple[700] : purple[500],
    borderColor: color === 'secondary' ? purple[700] : purple[500],
    '&:hover': {
      backgroundColor: color === 'secondary' ? purple[100] : purple[300],
    },
  }),
}));

export default CustomButton;
// export default function CustomizedButtons() {
//   return (
//     <Stack spacing={2} direction="row">
//       <ColorButton variant="contained">Custom CSS</ColorButton>
//     </Stack>
//   );
// }
