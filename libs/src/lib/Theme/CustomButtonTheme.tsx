// ButtonConfig.ts
import * as ThemeConstants from './ThemeConstants';
import { Components, Theme } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';
type ButtonType = 'outlined' | 'contained';
type ColorType = 'primary' | 'secondary';

export const CustomButtonTheme = (theme: ThemeMode): Components<Theme>['MuiButton'] => {
  // const getHoverBackground = (type: ButtonType) => {
  //   if (type === 'outlined') {
  //     return theme === 'light' 
  //       ? 'rgba(0, 0, 0, 0.04)' 
  //       : 'rgba(255, 255, 255, 0.08)';
  //   }
  //   return undefined;
  // };

// const getHoverColor = (color: ColorType) => {
//     // Using type assertion to tell TypeScript that the dynamic key will exist
//     return theme === 'light'
//       ? ThemeConstants[`COLOR_${color.toUpperCase()}_DARK`] as string
//       : ThemeConstants[`COLOR_${color.toUpperCase()}_LIGHT`] as string;
//   };

  // const getHoverColor = (color: ColorType): string => {
  //   const key = `COLOR_${color.toUpperCase()}_${theme.toUpperCase()}` as keyof typeof ThemeConstants;
  //   return ThemeConstants[key];
  // };

  return {
    defaultProps: {
      disableElevation: true, // Optional: removes shadow
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: ThemeConstants.BORDER_RADIUS_MD,
      },
      // Contained buttons
      containedPrimary: {
        backgroundColor: ThemeConstants.COLOR_PRIMARY_BUTTON,
        color: ThemeConstants.COLOR_PRIMARY_BUTTON_TEXT,
        '&:hover': {
          backgroundColor: ThemeConstants.COLOR_PRIMARY_BUTTON_HOVER,
          color: ThemeConstants.COLOR_PRIMARY_BUTTON_HOVER_TEXT,
        },
      },
      containedSecondary: {
        backgroundColor: ThemeConstants.COLOR_SECONDARY_BUTTON,
        color: ThemeConstants.COLOR_SECONDARY_BUTTON_TEXT,
        '&:hover': {
          backgroundColor: ThemeConstants.COLOR_SECONDARY_BUTTON_HOVER,
          color: ThemeConstants.COLOR_SECONDARY_BUTTON_HOVER_TEXT,
        },
      },
      // Outlined buttons
      outlinedPrimary: {
        backgroundColor: ThemeConstants.COLOR_PRIMARY_OUTLINED_BUTTON,
        color: ThemeConstants.COLOR_PRIMARY_OUTLINED_BUTTON_TEXT,
        borderColor: ThemeConstants.COLOR_PRIMARY_OUTLINED_BUTTON_BORDER,
        '&:hover': {
          backgroundColor: ThemeConstants.COLOR_PRIMARY_OUTLINED_BUTTON_HOVER,
          color: ThemeConstants.COLOR_PRIMARY_OUTLINED_BUTTON_HOVER_TEXT,
        },
      },
      outlinedSecondary: {
        backgroundColor: ThemeConstants.COLOR_SECONDARY_OUTLINED_BUTTON,
        color: ThemeConstants.COLOR_SECONDARY_OUTLINED_BUTTON_TEXT,
        borderColor: ThemeConstants.COLOR_SECONDARY_OUTLINED_BUTTON_BORDER,
        '&:hover': {
          backgroundColor: ThemeConstants.COLOR_SECONDARY_OUTLINED_BUTTON_HOVER,
          color: ThemeConstants.COLOR_SECONDARY_OUTLINED_BUTTON_HOVER_TEXT,
        },
      },

    },
  };
};
