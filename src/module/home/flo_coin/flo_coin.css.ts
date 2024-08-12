import { medium, small, smallUp } from '@/style/config/breakpoints.css';
import { colorWhite, pinkTextGrad } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const bg = style({
  marginTop: 12,
  marginBottom: 56,
  position: 'relative',

  '@media': smallUp({
    marginBottom: 120,
  }),
});

export const title = style({
  marginBottom: 8,
  textAlign: 'center',
});

export const subtitle = style({
  marginBottom: 16,
  textAlign: 'center',

  ...pinkTextGrad,

  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 700,
});

export const text = style({
  maxWidth: 745,
  margin: '0 auto 40px',
  textAlign: 'center',
  fontWeight: 400,
  fontSize: 20,

  '@media': smallUp({
    fontSize: 'unset',
    margin: '0 auto 80px',
  }),
});

export const iconWrap = style({
  display: 'inline-block',
  marginBottom: 8,
});

export const list = style({
  display: 'flex',
  gap: 32,
  justifyContent: 'center',

  '@media': {
    '(max-width: 768px)': {
      textAlign: 'center',
    },
    '(min-width: 768px)': {
      gap: '72px 32px',
    },
  },
});

export const itemTitle = style({
  fontSize: 24,
  lineHeight: '33px',
  color: colorWhite,
  fontWeight: 600,
  marginBottom: 8,
  marginInline: 'auto',
});

export const itemText = style({
  color: colorWhite,
  fontWeight: 300,
  maxWidth: '40ch',
  marginInline: 'auto',
});

export const icon = style({
  marginBottom: 8,
});

export const item = style({
  flex: '1 1 312px',
  maxWidth: 352,
});
