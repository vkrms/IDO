
import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { small } from '@/style/config/breakpoints.css';

import { style } from '@vanilla-extract/css';

export const f10 = style({
  fontSize: 12,
  WebkitTransform: 'scale(0.84)',
});

export const f8 = style({
  fontSize: 12,
  WebkitTransform: 'scale(0.66)',
});

export const h1 = style({
  fontSize: 40,
  fontWeight: 700,
});

export const h2 = style({
  marginBottom: 56,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': {
    [small]: {
      fontSize: 32,
      lineHeight: 44,
      marginBottom: 32,
    }
  }

})

export const h3 = style({
  fontSize: 24,
  lineHeight: '33px',
  fontWeight: 500,
});

export const subtitle1 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontWeight: 600,
});

export const subtitle2 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontWeight: 500,
});

export const subText1 = style({
  fontSize: 30,
  fontWeight: 600,
});

export const subText2 = style({
  fontSize: 24,
  lineHeight: '33px',
  fontWeight: 600,
});

export const subText3 = style({
  fontSize: 20,
  lineHeight: '22px',
  fontWeight: 700,
});

export const subText4 = style({
  fontSize: 18,
  fontWeight: 700,
});

export const subText5 = style({
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 600,
});

export const subText6 = style({
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 500,
});

export const subText7 = style({
  fontSize: 15,
  fontWeight: 500,
});

export const subText8 = style({
  fontSize: 14,
  lineHeight: '19px',
  fontWeight: 500,
});

export const subText9 = style({
  fontSize: 13,
  fontWeight: 500,
});

export const subText10 = style({
  fontSize: 12,
  lineHeight: '18px',
  fontWeight: 500,
});

export const subText11 = style([
  f10,
  {
    lineHeight: '14px',
    fontWeight: 500,
  },
]);

export const subText12 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontWeight: 400,
});

export const subText13 = style({
  fontSize: 15,
  fontWeight: 400,
});

export const subText14 = style({
  fontSize: 12,
  lineHeight: '18px',
  fontWeight: 400,
});

export const subText15 = style([
  f8,
  {
    fontWeight: 400,
  },
]);
