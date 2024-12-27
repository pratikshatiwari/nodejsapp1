import { Components, Theme } from '@mui/material/styles';
import * as ThemeConstants from './ThemeConstants';
type ThemeMode = 'light' | 'dark';

export const CustomInputTheme = (theme: ThemeMode): Components<Theme> => ({
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: ThemeConstants.INPUT_BG_COLOR,
          border: '1px solid',
          borderColor: ThemeConstants.INPUT_BORDER_COLOR,
          borderRadius: ThemeConstants.INPUT_BORDER_RADIUS,
          padding: '5px 6px',
          fontSize: ThemeConstants.INPUT_TEXT_FONT_SIZE,
          fontFamily: ThemeConstants.PRIMARY_FONT,
          color: ThemeConstants.INPUT_TEXT,
          marginTop: '6px',
          width: '100%',
          height: ThemeConstants.INPUT_FIELD_HEIGHT,
        },
        '&:hover fieldset': {
          borderColor: ThemeConstants.INPUT_BORDER_COLOR,
        },
        
        '&.primary': {
            '& .MuiOutlinedInput-root': {
              borderColor: ThemeConstants.PRIMARY_INPUT_BORDER,
              backgroundColor: ThemeConstants.PRIMARY_INPUT_BG,
              color: ThemeConstants.PRIMARY_INPUT_TEXT,
            },
            
            '&.Mui-focused fieldset': {
              borderColor: ThemeConstants.PRIMARY_INPUT_BORDER,
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: ThemeConstants.PRIMARY_INPUT_BORDER,
            },
        },
        '&.primaryBlue': {
          '& .MuiOutlinedInput-root': {
            borderColor:ThemeConstants.COLOR_PRIMARY_BORDER,  
            backgroundColor: ThemeConstants.INPUT_FIELD_COLOR,  
            color: ThemeConstants.INPUT_TEXT_COLOR,        
          },
          '& .MuiInputBase-input': {
            color: ThemeConstants.INPUT_TEXT_COLOR,        
          },
          '&.Mui-focused fieldset': {
            borderColor: ThemeConstants.INPUT_BORDER_COLOR,    
            borderWidth: '2px',
          }
        },
        '&.secondary': {
            '& .MuiOutlinedInput-root': {
              borderColor: "#FF5722",
              backgroundColor: "#FFE7D9",
              color: ThemeConstants.PRIMARY_INPUT_TEXT,
            },

            '&.Mui-focused fieldset': {
              borderColor: '#FF5722',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#FF5722',
            },
        },

        '& input': {
          color: ThemeConstants.INPUT_TEXT,
          opacity: 1,
        },
        '&::placeholder': {
          fontWeight: ThemeConstants.INPUT_FONT_WEIGHT,
          fontSize: ThemeConstants.INPUT_TEXT_FONT_SIZE,
          color: ThemeConstants.PLACEHOLDER_TEXT_COLOR,
          opacity: 1,
        },
        '&.Mui-focused': {
          border: '2px solid',
          borderColor: ThemeConstants.INPUT_BORDER_COLOR,
          outline: 'none'
        },
        
        
        // '&.Mui-error': {
        //   '& fieldset': {
        //     borderColor: '#FF4842',
        //   },
        //   '&:hover fieldset': {
        //     borderColor: '#FF4842',
        //   },
        //   '&.Mui-focused fieldset': {
        //     borderColor: '#FF4842',
        //   },
        // },
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        padding: 0,
        fontSize: ThemeConstants.LABEL_FONT_SIZE,
        fontFamily: ThemeConstants.PRIMARY_FONT,
        fontWeight: ThemeConstants.LABEL_FONT_WEIGHT,
        color: ThemeConstants.COLOR_BODY_TEXT,
        opacity: 1,
        transform: 'none',
        position: 'relative',
        '&.Mui-focused': {
          color: ThemeConstants.COLOR_BODY_TEXT,
        },
      },
    },
  },
});


