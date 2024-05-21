import { type FC, type ReactNode, StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

import { colorPrimary, colorTextBlack, colorTextGrey, colorWhite } from '@/style/config/color.css';
import { manropeBold, manropeMedium } from '@/style/config/font.css';

/**
 * ----------------------------------------------------------------------------------
 * theme_provider.tsx
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2023/3/10
 * @change zhangmao 2023/3/10
 */

// ----------------------------------------------------------------------------------

const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorTextGrey,
    },

    text: {
      primary: colorTextBlack,
      secondary: colorTextGrey,
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: '44px',
          height: '44px',
          padding: 0,
          borderRadius: '50% !important',

          '& .MuiCardHeader-action': {
            margin: 0,
          },
        },
        sizeSmall: {
          width: 24,
          height: 24,
        },
        sizeMedium: {
          width: 44,
          height: 44,
        },

        sizeLarge: {
          width: 48,
          height: 48,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          '& .MuiCardHeader-avatar': {
            marginRight: 8,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          width: 500,
          padding: '0 32px 40px 32px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {},
        outlined: {
          '&.MuiTableContainer-root': {
            width: 'auto',
            boxShadow: 'none',
            border: `1px solid ${colorWhite}`,
            borderRadius: '16px',
          },
        },
        elevation: {
          '&.MuiTableContainer-root': {
            width: 'auto',
            boxShadow: 'none',
            padding: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          boxShadow: 'none',
          textTransform: 'none',
          height: 44,
          borderRadius: 8,

          '&.MuiButton-colorWhite': {
            color: colorTextBlack,
            background: colorWhite,
            '&:hover': {
              boxShadow: 'none',
              background: colorWhite,
            },
          },
        },
        sizeLarge: {
          padding: '12px 24px',
          height: 48,
          borderRadius: 8,
        },
        sizeMedium: {
          padding: '10px 24px',
          height: 44,
          borderRadius: 6,
        },
        sizeSmall: {
          height: 40,
          padding: '8px 24px',
          borderRadius: 4,
        },
        textSizeLarge: {
          fontSize: 16,
          lineHeight: '24px',
          fontFamily: manropeMedium,
        },
        textSizeMedium: {
          fontSize: 16,
          lineHeight: '24px',
          fontFamily: manropeMedium,
        },
        textSizeSmall: {
          fontSize: 14,
          lineHeight: '24px',
          fontFamily: manropeBold,
        },
      },
    },
  },
});

// ----------------------------------------------------------------------------------

export const CustomThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StrictMode>
      <CssBaseline />

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
};
