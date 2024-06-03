import { type FC, type ReactNode, StrictMode } from 'react';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';

import {
  colorBgButtonGrey,
  colorBgGreyDark,
  colorBgGreyLight,
  colorBlue1,
  colorBorder,
  colorError,
  colorGrey1,
  colorPrimary,
  colorSuccess,
  colorTextBlack,
  colorTextGrey,
  colorWhite,
} from '@/style/config/color.css';
import { manropeBold, manropeMedium, manropeRegular, manropeSemiBold } from '@/style/config/font.css';
import { line } from '@/module/home/token_allocation/token_allocation.css';

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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subText1?: React.CSSProperties;
    subText2?: React.CSSProperties;
    subText3?: React.CSSProperties;
    subText4?: React.CSSProperties;
    subText5?: React.CSSProperties;
    subText6?: React.CSSProperties;
    subText7?: React.CSSProperties;
    subText8?: React.CSSProperties;
    subText9?: React.CSSProperties;
    subText10?: React.CSSProperties;
    subText11?: React.CSSProperties;
    subText12?: React.CSSProperties;
    subText13?: React.CSSProperties;
    subText14?: React.CSSProperties;
    subText15?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subText1?: React.CSSProperties;
    subText2?: React.CSSProperties;
    subText3?: React.CSSProperties;
    subText4?: React.CSSProperties;
    subText5?: React.CSSProperties;
    subText6?: React.CSSProperties;
    subText7?: React.CSSProperties;
    subText8?: React.CSSProperties;
    subText9?: React.CSSProperties;
    subText10?: React.CSSProperties;
    subText11?: React.CSSProperties;
    subText12?: React.CSSProperties;
    subText13?: React.CSSProperties;
    subText14?: React.CSSProperties;
    subText15?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subText1?: true;
    subText2?: true;
    subText3?: true;
    subText4?: true;
    subText5?: true;
    subText6?: true;
    subText7?: true;
    subText8?: true;
    subText9?: true;
    subText10?: true;
    subText11?: true;
    subText12?: true;
    subText13?: true;
    subText14?: true;
    subText15?: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
  }
}

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 12,
      lineHeight: '23px',

      [smallUp]: {
        fontSize: 16,
        lineHeight: '24px',
      }
    },

    h1: {
      fontSize: 40,
      fontFamily: manropeBold,
      color: colorWhite,
    },

    h2: {
      fontSize: 32,
      lineHeight: '44px',
      marginBottom: 32,
      textAlign: 'center',
      fontFamily: manropeMedium,

      [smallUp]: {
        fontSize: 56,
        lineHeight: '76px',
      }
      // styleOverrides: {
      //   root: {
      //     fontSize: 30,
      //     fontFamily: manropeMedium,
      //   },
      // },
    },
    h3: {
      fontSize: 24,
      lineHeight: '33px',
      fontFamily: manropeMedium,
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: '25px',
      fontFamily: manropeSemiBold,
    },
    subtitle2: {
      fontSize: 18,
      lineHeight: '25px',
      fontFamily: manropeSemiBold,
    },
    subText1: {
      fontSize: 30,
      fontFamily: manropeSemiBold,
    },
    subText2: {
      fontSize: 24,
      lineHeight: '33px',
      fontFamily: manropeSemiBold,
    },
    subText3: {
      fontSize: 20,
      fontFamily: manropeBold,
    },
    subText4: {
      fontSize: 18,
      fontFamily: manropeBold,
    },
    subText5: {
      fontSize: 16,
      lineHeight: '24px',
      fontFamily: manropeSemiBold,
    },
    subText6: {
      fontSize: 16,
      lineHeight: '24px',
      fontFamily: manropeMedium,
    },
    subText7: {
      fontSize: 15,
      fontFamily: manropeMedium,
    },
    subText8: {
      fontSize: 14,
      lineHeight: '19px',
      fontFamily: manropeMedium,
    },
    subText9: {
      fontSize: 13,
      fontFamily: manropeMedium,
    },
    subText10: {
      fontSize: 12,
      lineHeight: '18px',
      fontFamily: manropeMedium,
    },
    subText11: {
      fontSize: 12,
      WebkitTransform: 'scale(0.84)',
      lineHeight: '14px',
      fontFamily: manropeMedium,
    },
    subText12: {
      fontSize: 18,
      lineHeight: '25px',
      fontFamily: manropeRegular,
    },
    subText13: {
      fontSize: 15,
      fontFamily: manropeRegular,
    },
    subText14: {
      fontSize: 12,
      lineHeight: '18px',
      fontFamily: manropeRegular,
    },
    subText15: {
      fontSize: 12,
      WebkitTransform: 'scale(0.66)',
      fontFamily: manropeRegular,
    },
  },
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorTextGrey,
    },
    success: {
      main: colorSuccess,
    },
    info: {
      main: colorBlue1,
    },
    error: {
      main: colorError,
    },
    text: {
      primary: colorWhite,
      secondary: colorTextGrey,
    },
    gray: {
      main: colorGrey1,
    },
    divider: colorBorder,
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
        }
      }
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
            border: `1px solid ${colorBorder}`,
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
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: colorBgGreyDark,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: '#fff',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '18px 40px',
          borderBottom: `1px solid ${colorBorder}`,
        },
        sizeMedium: {},
        sizeSmall: {
          padding: '12px 0',
        },
        head: {
          padding: '24px 16px',
          fontSize: 18,
          fontFamily: manropeMedium,
          color: colorTextBlack,
        },
        body: {
          padding: '18px 40px',
          fontSize: 15,
          lineHeight: '18px',
          color: colorWhite,
          fontFamily: manropeRegular,
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

          '&.MuiButton-colorGray': {
            color: colorTextBlack,
            background: colorBgButtonGrey,
            '&:hover': {
              boxShadow: 'none',
            },
          },

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
        outlinedPrimary: {
          color: colorTextBlack,
          background: colorWhite,
          border: `1px solid ${colorBorder}`,

          '&:hover': {
            background: colorBgGreyLight,
            border: `1px solid ${colorBorder}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-sizeSmall .MuiOutlinedInput-notchedOutline': {
            borderRadius: 6,
          },

          '&.MuiInputBase-sizeSmall .MuiSelect-icon': {
            top: 10,
          },
        },
        input: {
          padding: '14px',
          fontSize: '12px',
          lineHeight: '15px',
          fontWeight: '500',
          color: colorGrey1,

          '&.MuiInputBase-inputSizeSmall': {
            padding: 8,
          },
        },
        notchedOutline: {
          borderColor: colorBorder,
          borderRadius: 10,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow:
            '0px 5px 5px -3px rgba(0, 0, 0, 0.1), 0px 8px 10px 1px rgba(0, 0, 0, 0.1), 0px 3px 14px 2px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minWidth: '140px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: 'unset',
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
          flexShrink: 0,
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
