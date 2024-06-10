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
});

export const iconList = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginBottom: 24,
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
      background: glowColor,
      boxShadow: `0 0 24px 16px ${glowColor}`,
      textShadow: '0 0 8px #ff9fcf',
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
})
  