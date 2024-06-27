import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallB, smallUp } from '@/style/config/breakpoints.css';


export const quesItem = style({
  display: 'block',
  padding: '24px 16px',
  borderRadius: 16,
  background: '#100420',
  marginBottom: 32,
  zIndex: 1,
  overflow: 'hidden',

  '@media': smallUp({
    padding: '32px 40px',
  }),

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const itemTitle = style({
  lineHeight: 1.3,
  fontSize: 21,

  color: colorWhite,
  fontWeight: 500,

  '@media': {
    '(min-width: 600px)': {
      fontSize: 24,
      lineHeight: '36px',
    }  
  }
});

export const itemInfo = style({
  fontSize: 16,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,
  margin: '1.69em 0 24px',
});

export const innerList = style({
  margin: 0,
  padding: 0,
});

export const innerItem = style({
  margin: '0 0 24px 0',
  padding: 0,

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const innerIdx = style({
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 20,
  lineHeight: '30px',
  fontWeight: 700,
});

export const innerName = style({
  fontSize: 20,
  lineHeight: '30px',
  color: colorWhite,
  fontWeight: 600,
});

export const innerText = style({
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontWeight: 400,
});

export const itemTitleWrap = style({
  flexFlow: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
})

export const btn = style({
  aspectRatio: '1/1',
  padding: 4,
  marginLeft: 16,
  flex: '0 0 32px',
  width: 32,

  '@media': {
    '(min-width: 900px)': {
      flex: '0 0 48px',
      width: 48,
      padding: 0,
    },
  }
})
