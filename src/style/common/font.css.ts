import { manropeBold, manropeMedium, manropeRegular, manropeSemiBold } from '@/style/config/font.css';

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
  fontFamily: manropeBold,
});

export const h2 = style({
  marginBottom: 56,
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
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
  fontFamily: manropeMedium,
});

export const subtitle1 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeSemiBold,
});

export const subtitle2 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeMedium,
});

export const subText1 = style({
  fontSize: 30,
  fontFamily: manropeSemiBold,
});

export const subText2 = style({
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
});

export const subText3 = style({
  fontSize: 20,
  lineHeight: '22px',
  fontFamily: manropeBold,
});

export const subText4 = style({
  fontSize: 18,
  fontFamily: manropeBold,
});

export const subText5 = style({
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: manropeSemiBold,
});

export const subText6 = style({
  fontSize: 16,
  lineHeight: '24px',
  fontFamily: manropeMedium,
});

export const subText7 = style({
  fontSize: 15,
  fontFamily: manropeMedium,
});

export const subText8 = style({
  fontSize: 14,
  lineHeight: '19px',
  fontFamily: manropeMedium,
});

export const subText9 = style({
  fontSize: 13,
  fontFamily: manropeMedium,
});

export const subText10 = style({
  fontSize: 12,
  lineHeight: '18px',
  fontFamily: manropeMedium,
});

export const subText11 = style([
  f10,
  {
    lineHeight: '14px',
    fontFamily: manropeMedium,
  },
]);

export const subText12 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeRegular,
});

export const subText13 = style({
  fontSize: 15,
  fontFamily: manropeRegular,
});

export const subText14 = style({
  fontSize: 12,
  lineHeight: '18px',
  fontFamily: manropeRegular,
});

export const subText15 = style([
  f8,
  {
    fontFamily: manropeRegular,
  },
]);
