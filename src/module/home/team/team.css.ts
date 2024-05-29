import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { small } from '@/style/config/breakpoints.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const title = style({
  maxWidth: 740,
  margin: '0 auto 16px',
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': {
    [small]: {
      fontSize: 32,
      lineHeight: '44px',
    },
  }
});

export const subtitle = style({
  marginBottom: 48,
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '31px',
  })
});
