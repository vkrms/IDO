import { small } from '@/style/config/breakpoints.css';
import { colorPrimary, colorWhite } from '@/style/config/color.css';
import { style, styleVariants } from '@vanilla-extract/css';

const gapClamp = 'clamp(40px, 5vw, 64px)';

export const infoBox = style({
  position: 'relative',
  width: '100%',
  padding: 48,
  borderRadius: 16,
  overflow: 'hidden',
  background: 'rgba(154, 9, 139, 0.10)',
  textAlign: 'center',
});

export const list = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  gap: gapClamp,

  '@media': {
    '(min-width: 500px)': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },

    '(min-width: 1000px)': {
      display: 'flex',
      flexFlow: 'row nowrap',
    },
  },
});

export const item = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: 0,
  borderRight: 'none',
  gap: 40,
  whiteSpace: 'nowrap',

  // horizontal line
  ':after': {
    content: '',
    width: 56,
    height: 2,
    background: colorPrimary,
    display: 'block',
  },

  selectors: {
    '&:last-child:after': {
      content: 'none',
    },
  },

  '@media': {
    // when grid
    '(min-width: 500px) and (max-width: 999px)': {
      selectors: {
        '&:nth-last-child(-n + 2):after': {
          content: 'none !important',
        },
      },
    },

    // when row
    '(min-width: 1000px)': {
      flexFlow: 'row nowrap',
      gap: gapClamp,

      selectors: {
        // vertical line
        '&:after': {
          content: '',
          width: 2,
          height: 56,
          background: colorPrimary,
          display: 'block',
        },
      },
    },
  },
});

export const itemTitle = style({
  marginBottom: 16,
  fontSize: 16,
  lineHeight: '22px',
  fontWeight: 600,
  color: '#686868',
  textAlign: 'center',
});

export const itemText = style({
  fontSize: 32,
  color: colorWhite,
  lineHeight: '44px',
  fontWeight: 600,
});

export const bgPosVar = styleVariants({
  leftTop: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  leftBottom: {
    position: 'absolute',
    left: -7,
    bottom: 0,
    transform: 'rotate(90deg)',
  },
  rightTop: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  rightBottom: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
