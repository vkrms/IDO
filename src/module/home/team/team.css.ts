import { small } from '@/style/config/breakpoints.css';
import { medium, smallUp } from '@/style/config/breakpoints.css';
import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  maxWidth: 740,
  margin: '0 auto 16px',
  fontSize: 56,
  lineHeight: '76px',
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': {
    [small]: {
      fontSize: 32,
      lineHeight: '44px',
    },
  },
});

export const subtitle = style({
  marginBottom: 48,
  fontWeight: 400,
  color: colorWhite,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '31px',
  }),
});

export const teamContainer = style({
  padding: 0,
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  }),
});
