import { colorBorder, colorWhite, glowColor } from '@/style/config/color.css';

import { zIndexHeader } from '@/style/config/zindex.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { smallUp, medium } from '@/style/config/breakpoints.css';

export const header = style({
  width: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  zIndex: zIndexHeader,
  padding: '16px 32px',
  marginInline: 'auto',
  
  '@media': medium({
    padding: 32,
    maxWidth: 1066,
  }),
});

export const headerCont = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 24,
});

export const list = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,
});

export const item = style({
  padding: 0,
});

export const itemText = style({
  fontSize: 16,
  color: colorWhite,
  whiteSpace: 'nowrap',
  transition: 'all .35s ease-out',
  display: 'block',
  borderBottom: `2px solid transparent`,
  position: 'relative',
  borderRadius: 12,

  selectors: {
    // '&:after': {
    //   content: '',
    //   width: '100%',
    //   height: 3,
    //   borderRadius: 8,
    //   background: '#fff',
    //   transition: 'all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    //   opacity: 0,
    //   position: 'absolute',
    //   left: 0,
    //   bottom: 0,
    //   zIndex: -1,
    //   transform: 'scale(0.85) translateY(50%) rotate(-3deg)',      
    // },

    // '&:hover:after': {
    //   // borderColor: '#f352e3',
    //   opacity: 1,
    //   transform: 'scale(1) translateY(0) rotate(3deg) scale(1)',
    //   boxShadow: '0 0 0 16px #851771',
    // }

    '&:hover': {
      background: glowColor,
      boxShadow: `0 0 24px 16px ${glowColor}`,
      textShadow: '0 0 8px #ff9fcf',
    }
  }
});


export const menuBtn = style({
  display: 'grid',
  placeItems: 'center',
  color: colorWhite,
  fontSize: 24,
  cursor: 'pointer',
  width: 40,
  padding: 0,
  
  '@media': medium({
    display: 'none',
  }),
})

export const menuWide = style({
  display: 'none',
  
  '@media': medium({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: '0 1 calc(9/12 * 100%)',
    gap: 24,
  }),
})

export const menuMobile = style({
  // display: 'flex',
  // flexFlow: 'column',
  // alignItems: 'center',
  textAlign: 'center',
});

globalStyle(`${menuMobile} .doo`, {
  paddingTop: 76,
  flexFlow: 'column',
  gap: 32,
  fontSize: 16,
  lineHeight: '22px',
  marginBottom: 48,
})

export const drawer = style({
  width: '100%',
})  

export const drawerPaper = style({
  width: '100%',
  background: 'rgba(12, 12, 12, 0.8)',
  padding: '32px 16px',
})

export const menuIcon = style({
  transition: 'all 0.3s',
  visibility: 'hidden',
  opacity: 0,
  position: 'absolute',
  transform: 'scale(0)',
})

export const isVisible = style({
  visibility: 'visible',
  opacity: 1,
  transform: 'scale(1)',
})