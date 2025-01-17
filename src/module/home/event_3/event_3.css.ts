import { smallB, smallUp } from '@/style/config/breakpoints.css';
import { colorWhite, pinkTextGrad } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const section = style({
  marginBottom: 56,
});

export const title = style({
  maxWidth: 700,
  margin: '0 auto 8px',
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',

  '@media': smallB({
    textAlign: 'left',
  }),
});

export const subtitle = style({
  maxWidth: 895,
  margin: '0 auto 40px',
  color: colorWhite,
  fontWeight: 400,
  textAlign: 'left',

  '@media': smallUp({
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '29px',
  }),
});

export const list = style({
  marginTop: 48,
  // display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 32,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(var(--minWidth), 1fr))',

  vars: {
    '--minWidth': '264px',
  },

  '@media': {
    '(min-width: 900px)': {
      marginTop: 64,
      paddingInline: 16,
      vars: {
        '--minWidth': '360px',
      },
    },
  },
});

export const listItem = style({
  maxWidth: 544,
  marginInline: 'auto',
});

export const itemTitle = style({
  ...pinkTextGrad,

  fontSize: 24,
  fontWeight: 600,
  marginBottom: 8,

  selectors: {
    '&:after': {
      content: ':',
      marginRight: '0.5ch',
    },
  },

  '@media': smallB({
    fontSize: 18,
    lineHeight: '27px',
    marginBottom: 4,
  }),
});

export const itemText = style({
  maxWidth: 544,
  fontSize: 16,
  lineHeight: '24px',
  color: colorWhite,
  fontWeight: 300,
});

export const img = style({
  maxWidth: 960,
  marginInline: 'auto',
  borderRadius: 16,
  display: 'block',
  zIndex: 1,
  position: 'relative',
});

export const imgWrap = style({
  position: 'relative',
});

export const flare = style({
  position: 'absolute',
  zIndex: 0,

  selectors: {
    '&.--blue': {
      top: -160,
      left: -128,
    },

    '&.--pink': {
      bottom: -192,
      right: -128,
    },
  },
});
