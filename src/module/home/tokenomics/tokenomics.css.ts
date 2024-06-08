import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { manropeRegular, manropeSemiBold } from '@/style/config/font.css';
import { small, smallB, smallUp } from '@/style/config/breakpoints.css'

import { style } from '@vanilla-extract/css';
import { text } from 'stream/consumers';

export const title = style({
  fontWeight: 600,

  '@media': smallUp({
    fontSize: 56,
    lineHeight: '77px',
    textAlign: 'center',
    marginBottom: 48,
  })
})

export const box = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  marginBottom: 56,
  textAlign: 'left',

  '@media': {
    '(min-width: 940px)': {
      flexFlow: 'row',
    },

    // '(max-width: 600px)': {
    //   // flexDirection: 'column',
    //   gap: 8,
    //   textAlign: 'left',
    // },

    '(max-width: 1120px)': {
      gap: 16,
      marginInline: 'auto',
    }
  },
});

export const boxLeft = style({
  // flexBasis: 489,
  fontSize: 48,
  lineHeight: '66px',
  fontFamily: manropeSemiBold,
  color: colorWhite,

  '@media': {
    '(max-width: 600px)': {
      fontSize: 24,
      lineHeight: '33px',
      alignSelf: 'flex-start',
      flex: '0 1 48%',
      minWidth: 312,
    },
    '(min-width:940px)': {
      flex: '0 0 50%',
    }

  }
});

export const boxRight = style({
  fontFamily: manropeRegular,
  color: colorWhite,
  maxWidth: 768,

  '@media': {
    '(min-width: 600px)': {
        fontSize: 18,
        lineHeight: 1.7,
    },
    '(max-width: 720px)': {
      flex: '0 1 48%',
      minWidth: 312,    
    }
  }
});

export const infoBox = style({
  position: 'relative',
  width: '100%',
  padding: 48,
  borderRadius: 16,
  overflow: 'hidden',
  background: 'rgba(154, 9, 139, 0.10)',
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 56,
});

export const item = style({
  paddingRight: 56,
  borderRight: `1px solid ${colorPrimary}`,

  selectors: {
    '&:last-child': {
      borderRight: '1px solid transparent',
    },
  },
});

export const itemTitle = style({
  marginBottom: 16,
  fontSize: 16,
  lineHeight: '22px',
  fontFamily: manropeSemiBold,
  color: '#686868',
});

export const itemText = style({
  fontSize: 32,
  color: colorWhite,
  lineHeight: '44px',
  fontFamily: manropeSemiBold,
});

export const bgLeft = style({
  position: 'absolute',
  top: 0,
  left: 0,
});

export const bgRight = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});
