import { smallUp } from '@/style/config/breakpoints.css';
import { colorWhite, pinkTextGrad } from '@/style/config/color.css';
import { electrolizeRegular } from '@/style/config/font.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  // position: 'absolute',
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
});

export const title1 = style({
  fontSize: 14,
  lineHeight: 1.35,
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: 24,
  color: '#fff',

  // ...pinkTextGrad,

  '@media': smallUp({
    fontSize: 25,
  }),
});

export const title2 = style({
  marginBottom: 12,
  fontSize: 48,
  lineHeight: 1,
  fontWeight: 700,
  // color: colorWhite,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 72,
    marginBottom: 16,
  }),
});

export const title3 = style({
  marginBottom: 50,
  fontWeight: 400,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 18,
    maxWidth: '64ch',
    marginInline: 'auto',
    marginBottom: 32,
  }),
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.6em',
  marginBottom: 32,

  '@media': {
    'screen and (min-width: 648px)': {
      gap: 32,
      marginBottom: 64,
    },
  },
});

// group of digits
export const itemValueList = style({
  gap: '0.14em',
  alignItems: 'center',
  fontFamily: electrolizeRegular,
  display: 'flex',

  '@media': {
    'screen and (min-width: 648px)': {
      gap: 8,
    },
  },
});

// digit in a box
export const itemValue = style({
  display: 'grid',
  placeContent: 'center',
  borderRadius: 6,
  border: '0.066em solid #fff',
  color: colorWhite,
  fontSize: 18,
  aspectRatio: '1/1',
  lineHeight: 1.77,
  width: '1.77em',
  height: 'auto',

  '@media': smallUp({
    fontSize: 40,
    width: '1.6em',
    height: '1.6em',
    lineHeight: '1.6em',
  }),
});

export const itemKey = style({
  textTransform: 'capitalize',
  textAlign: 'center',
  color: colorWhite,
  marginTop: 8,
  fontWeight: 400,
  display: 'block',
  fontSize: 14,
  lineHeight: 1.57,

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '29px',
  }),
});

export const imgBox = style({
  marginTop: 64,
  marginBottom: 64,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,

  '@media': smallUp({
    marginBottom: 120,
  }),
});

export const playBtn = style({
  transition: 'all 0.3s ease',

  selectors: {
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
});

export const iconBox = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  marginInline: 'auto',
  transition: 'all 0.3s ease',

  selectors: {
    '&.isVideoPlaying': {
      opacity: 0,
      visibility: 'hidden',
    },
  },
});

export const founderTitle = style({
  marginBottom: 32,
  textAlign: 'center',
  fontSize: 28,
  lineHeight: '38px',
  fontWeight: 600,
  color: colorWhite,

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: 20,
      lineHeight: '27px',
      marginBottom: 16,
    },
  },
});

export const founderBold = style({
  textAlign: 'center',

  ...pinkTextGrad,

  fontSize: 28,
  lineHeight: '38px',
  fontWeight: 600,
});

export const founderList = style({
  marginBottom: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 900,
  marginInline: 'auto',
  gap: 32,

  '@media': smallUp({
    gap: '28px 56px',
  }),
});

export const logo = style({
  width: 'auto',
  height: 'auto',
  maxWidth: 152,
});
