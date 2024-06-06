import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallB, smallUp } from '@/style/config/breakpoints.css';
import { m } from 'framer-motion';

export const title = style({
  maxWidth: 700,
  margin: '0 auto 8px',
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',

  '@media': smallB({
    textAlign: 'left',
  })
});

export const subtitle = style({
  maxWidth: 895,
  margin: '0 auto 40px',
  color: colorWhite,
  fontFamily: manropeRegular,
  textAlign: 'left',

  '@media': smallUp({
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '29px',
  })
});

export const list = style({
  marginTop: 48,
  // display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 32,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(376px, 1fr))',

  '@media': smallUp({
    marginTop: 64,
  })
});

export const listItem = style({
  maxWidth: 544,
  marginInline: 'auto',
})

export const itemTitle = style({
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  fontFamily: manropeSemiBold,  
  marginBottom: 8,

  selectors: {
    '&:after': {
      content: ':',
      marginRight: '0.5ch',
    }
  },

  '@media': smallB({
    fontSize: 18,
    lineHeight: '27px',
    marginBottom: 4,
  })
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
})

export const imgWrap = style({
  position: 'relative',
})

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
    }
  }
})
