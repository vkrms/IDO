import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { line } from '../token_allocation/token_allocation.css';
import { smallB } from '@/style/config/breakpoints.css';


export const quesItem = style({
  display: 'block',
  padding: '32px 40px',
  borderRadius: 16,
  background: '#100420',
  marginBottom: 32,
  zIndex: 1,
  overflow: 'hidden',

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const itemTitle = style({
  fontSize: 24,
  lineHeight: '36px',
  color: colorWhite,
  fontWeight: 500,

  '@media': smallB({
    fontSize: 18,
    lineHeight: '27px',
  })
});

export const itemInfo = style({
  fontSize: 18,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,
  marginBottom: 24,
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
  aspectRatio: '1',
  width: 40,
  marginLeft: 16,
})
