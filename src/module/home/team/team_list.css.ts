import { smallUp } from '@/style/config/breakpoints.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

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
  }),
});

export const list = style({
  position: 'relative',
  gap: 32,
  justifyContent: 'left',
  flexFlow: 'row',
  maxWidth: '100%',
  overflow: 'auto',
  padding: 32,

  '@media': {
    '(min-width: 1200px)': {
      paddingInline: 0,
      justifyContent: 'center',
      overflow: 'visible',
    },
  },
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
  fontWeight: 600,
  textAlign: 'center',
  color: colorWhite,
});

export const role = style({
  fontSize: 20,
  lineHeight: '27px',
  fontWeight: 500,
  color: colorWhite,
  textAlign: 'center',
  marginBottom: 38,
});

export const cardGrid = style({
  borderRadius: 8,
  backgroundColor: '#9A098B1A',
  maxWidth: 352,
  flexBasis: 288,
  flexGrow: 1,
});

export const infoList = style({
  padding: '0 16px 32px',
  gap: 28,
});

export const infoTitle = style({
  fontSize: 18,
  lineHeight: '27px',
  color: colorWhite,
  fontWeight: 600,
});

export const infoText = style({
  marginTop: 16,
  color: '#B5B5B5',
  fontSize: 14,
  lineHeight: '24px',
  fontWeight: 400,
  maxWidth: 320,
});

export const cardItemTitle = style({
  whiteSpace: 'nowrap',
  display: 'flex',
  flexFlow: 'row',
  cursor: 'pointer',
  userSelect: 'none',
});

export const cardContainer = style({
  width: '100%',
  minWidth: 312,
});
