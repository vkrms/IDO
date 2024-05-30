import { manropeMedium, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const teamItem = style({
  marginBottom: 56,
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const title = style({
  marginBottom: 48,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 32,
    lineHeight: '44px',
  })
});

export const list = style({
  position: 'relative',
  gap: 32,
  justifyContent: 'left',
  flexFlow: 'row',
  maxWidth: '100%',
  overflow: 'auto',
  paddingInline: 16,

  '@media': {
    '(min-width: 1200px)': {
      paddingInline: 0,
      justifyContent: 'center',
      overflow: 'visible',
    }
  }
});

export const header = style({
  transformStyle: 'preserve-3d',
  position: 'relative',
  width: '100%',
  height: 160,
  borderRadius: '8px 8px 0 0',
  background: 'linear-gradient(37deg, #9A098B 15.78%, #A81189 18.87%, #CC2484 27.66%, #E23080 35.02%, #EA347F 39.53%)',
});

export const imgBox = style({
  transformStyle: 'preserve-3d',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 80,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const name = style({
  marginTop: 112,
  marginBottom: 4,
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  textAlign: 'center',
  color: colorWhite,
});

export const role = style({
  fontSize: 20,
  lineHeight: '27px',
  fontFamily: manropeMedium,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 38,
});

export const bar = style({
  borderRadius: 8,
  backgroundColor: '#9A098B1A',
  maxWidth: 352,
  flexBasis: 288,
  flexGrow: 1,
})

export const infoList = style({
  padding: '0 16px 32px',
  gap: 28
});

export const infoTitle = style({
  fontSize: 18,
  lineHeight: '27px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
});

export const infoText = style({
  marginTop: 16,
  color: '#B5B5B5',
  fontSize: 14,
  lineHeight: '24px',
  fontFamily: manropeRegular,
  maxWidth: 320,
});

export const cardItemTitle = style({
  whiteSpace: 'nowrap',
  display: 'flex',
  flexFlow: 'row',
  cursor: 'pointer',
  userSelect: 'none',
})  

export const cardContainer = style({
  width: '100%',
})