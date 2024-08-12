import { type FC, type ReactNode, StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

import { colorPrimary, colorTextBlack, colorTextGrey, colorWhite } from '@/style/config/color.css';

const smallUp = '@media (min-width:600px)';

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
  typography: {
    fontFamily: 'var(--font-manrope)',
    fontWeightRegular: 400,
    fontSize: 15,

    body1: {
      fontSize: 16,
      lineHeight: 1.5,
    },

    h1: {
      fontSize: 40,
      color: colorWhite,
    },

    h2: {
      fontSize: 32,
      lineHeight: '44px',
      marginBottom: 32,
      textAlign: 'center',
      fontWeight: 600,

      [smallUp]: {
        fontSize: 56,
        lineHeight: '76px',
      },
      // styleOverrides: {
      //   root: {
      //     fontSize: 30,
      //     fontWeight: 500,
      //   },
      // },
    },
    h3: {
      fontSize: 24,
      lineHeight: '33px',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: '25px',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: 18,
      lineHeight: '25px',
      fontWeight: 600,
    },
    subText1: {
      fontSize: 30,
      fontWeight: 600,
    },
    subText2: {
      fontSize: 24,
      lineHeight: '33px',
      fontWeight: 600,
    },
    subText3: {
      fontSize: 20,
      fontWeight: 700,
    },
    subText4: {
      fontSize: 18,
      fontWeight: 700,
    },
    subText5: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 600,
    },
    subText6: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500,
    },
    subText7: {
      fontSize: 15,
      fontWeight: 500,
    },
    subText8: {
      fontSize: 14,
      lineHeight: '19px',
      fontWeight: 500,
    },
    subText9: {
      fontSize: 13,
      fontWeight: 500,
    },
    subText10: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 500,
    },
    subText11: {
      fontSize: 12,
      WebkitTransform: 'scale(0.84)',
      lineHeight: '14px',
      fontWeight: 500,
    },
    subText12: {
      fontSize: 18,
      lineHeight: '25px',
      fontWeight: 400,
    },
    subText13: {
      fontSize: 15,
      fontWeight: 400,
    },
    subText14: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 400,
    },
    subText15: {
      fontSize: 12,
      WebkitTransform: 'scale(0.66)',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorTextGrey,
    },

    text: {
      primary: colorWhite,
      secondary: colorTextGrey,
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: 424,
          marginBottom: 16,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subText1: 'p',
          subText2: 'p',
          subText3: 'p',
          subText4: 'p',
          subText5: 'p',
          subText6: 'p',
          subText7: 'p',
          subText8: 'p',
          subText9: 'p',
          subText10: 'p',
          subText11: 'p',
          subText12: 'p',
          subText13: 'p',
          subText14: 'p',
          subText15: 'p',
        },
      },
    },
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
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingInline: 20,
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
        root: {
          background: 'transparent',
        },
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
    // MuiTableHead: {
    //   styleOverrides: {
    //     root: {
    //       background: colorBgGreyDark,
    //     },
    //   },
    // },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       padding: '18px 40px',
    //       borderBottom: `1px solid ${colorBorder}`,
    //     },
    //     sizeMedium: {},
    //     sizeSmall: {
    //       padding: '12px 0',
    //     },
    //     head: {
    //       padding: '24px 16px',
    //       fontSize: 18,
    //       color: colorTextBlack,
    //       fontWeight: 500,
    //     },
    //     body: {
    //       padding: '18px 40px',
    //       fontSize: 15,
    //       lineHeight: '18px',
    //       color: colorWhite,
    //       fontWeight: 400,
    //     },
    //   },
    // },
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
          fontWeight: 500,
        },
        textSizeMedium: {
          fontSize: 16,
          lineHeight: '24px',
          fontWeight: 500,
        },
        textSizeSmall: {
          fontSize: 14,
          lineHeight: '24px',
          fontWeight: 700,
        },
      },
    },
  },
});

// ----------------------------------------------------------------------------------

export const CustomThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
};
