import { createTheme } from '@mui/material/styles';
import * as ThemeConstants from './ThemeConstants';
import { CustomButtonTheme } from './CustomButtonTheme';
import  {CustomInputTheme}  from './CustomInputTheme';
const baseTheme = {
  typography: {
    fontFamily: ThemeConstants.PRIMARY_FONT,
    fontSize: 16, // 16px

    h1: {
      fontSize: ThemeConstants.FONT_SIZE_H1, // 32px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    h2: {
      fontSize: ThemeConstants.FONT_SIZE_H2, // 20px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    h3: {
      fontSize: ThemeConstants.FONT_SIZE_H3, // 18px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    h4: {
      fontSize: ThemeConstants.FONT_SIZE_H4, // 16px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    h5: {
      fontSize: ThemeConstants.FONT_SIZE_H5, // 14px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    h6: {
      fontSize: ThemeConstants.FONT_SIZE_H6, // 12px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
    caption: {
      fontSize: ThemeConstants.FONT_SIZE_XL, // 26px
      fontWeight: ThemeConstants.FONT_WEIGHT_MEDIUM,
    },
  },
};

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: ThemeConstants.COLOR_PRIMARY,
    },
    secondary: {
      main: ThemeConstants.COLOR_SECONDARY,
    },
    background: {
      default: ThemeConstants.COLOR_WHITE,
    },
    text: {
      primary: ThemeConstants.COLOR_BODY_TEXT,
      secondary: '#747474',
    },
  },
  components: {
    MuiButton: CustomButtonTheme('light'),
    ...CustomInputTheme('light'), 
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: ThemeConstants.COLOR_PRIMARY,
    },
    secondary: {
      main: ThemeConstants.COLOR_SECONDARY,
    },
    background: {
      default: '#303030',
    },
    text: {
      primary: ThemeConstants.COLOR_WHITE,
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiButton: CustomButtonTheme('dark'),
    ...CustomInputTheme('dark'), 
  },
});

export { lightTheme, darkTheme };

