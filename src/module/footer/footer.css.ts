import { linkToBtn } from '@/style/common/link.css';
import { colorWhite, glowColor } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';

export const disco = style({
  padding: '56px 0 40px',
});

export const box = style({
  justifyContent: 'space-between',
  gap: 40,
  borderBottom: '1px solid #fff3',
  paddingBottom: 16,
});

export const logo = style({
  marginBottom: 22,

  '@media': {
    'screen and (max-width: 767px)': {
      textAlign: 'center',
    },
  },
});

export const iconList = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginBottom: 24,

  '@media': {
    'screen and (max-width: 767px)': {
      justifyContent: 'center',
    },
  },
});

export const text = style({
  maxWidth: 705,
  fontSize: 18,
  lineHeight: '29px',
  color: colorWhite,
  fontWeight: 400,
});

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '@media': {
    'screen and (max-width: 767px)': {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
});

export const linkText = style([
  linkToBtn,
  {
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '22px',
    color: colorWhite,
    transition: 'all .35s ease-out',
    width: 'fit-content',

    ':hover': {
      color: '#e651d7',
    },
  },
]);

export const copyright = style({
  marginTop: 40,
  textAlign: 'center',
  color: colorWhite,
  fontSize: 16,
  fontWeight: 600,
});

export const container = style({
  zIndex: 1,
  position: 'relative',
});

export const overflow = style({
  height: '190vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: '-130vh',

  '@media': {
    '(min-width: 900px)': {
      marginTop: '-1100px',
      height: 1400,
    },
  },
});
