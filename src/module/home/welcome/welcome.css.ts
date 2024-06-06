import { smallUp } from '@/style/config/breakpoints.css';
import { colorBorder, colorWhite } from '@/style/config/color.css';
import {
  electrolizeRegular,
  manropeBold,
  manropeMedium,
  manropeRegular,
  manropeSemiBold,
} from '@/style/config/font.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  // position: 'absolute',
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
})

export const title1 = style({
  fontSize: 18,
  lineHeight: '25px',
  fontFamily: manropeMedium,
  // color: colorWhite,
  textAlign: 'center',
});

export const title2 = style({
  marginBottom: 8,
  fontSize: 48,
  lineHeight: '66px',
  fontFamily: manropeBold,
  // color: colorWhite,
  textAlign: 'center',

  '@media': smallUp({
    fontSize: 64,
    lineHeight: '88px',
  })
});

export const title3 = style({
  marginBottom: 32,
  // fontSize: 18,
  // lineHeight: '29px',
  // color: colorWhite,
  fontFamily: manropeRegular,
  textAlign: 'center',
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.6em',
  marginBottom: 40,
});

export const bob = style({
  textAlign: 'center',
})

// group of digits
export const itemValueList = style({
  gap: '0.14em',
  alignItems: 'center',
  fontFamily: electrolizeRegular,
  display: 'flex',
});

// digit in a box
export const itemValue = style({
  aspectRatio: '56/88',
  display: 'grid',
  placeContent: 'center',
  borderRadius: 6,
  border: `0.066em solid ${colorBorder}`,
  fontSize: 24,
  lineHeight: 1.14,
  color: colorWhite,
  width: '1.4em',

  '@media': smallUp({
    fontSize: 40,
  })
});

export const itemKey = style({
  marginTop: 16,
  textAlign: 'center',
  color: colorWhite,
  fontFamily: manropeRegular,
  display: 'block',

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '29px',
    // textTransform: 'capitalize',
  })
});

export const imgBox = style({
  marginTop: 64,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
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
});

export const founderTitle = style({
  marginBottom: 32,
  textAlign: 'center',
  fontSize: 28,
  lineHeight: '38px',
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const founderBold = style({
  textAlign: 'center',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 28,
  lineHeight: '38px',
  fontFamily: manropeSemiBold,
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
  })
});

export const logo = style({
  width: 'auto',
  height: 'auto',
})