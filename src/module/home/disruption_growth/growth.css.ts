import { manropeBold, manropeLight, manropeRegular, manropeSemiBold } from '@/style/config/font.css';
import { colorPrimary } from '@/style/config/color.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const title = style({
  color: colorWhite,
  fontFamily: manropeSemiBold,
  textAlign: 'center',
  margin: '0 auto 16px',
});

export const subtitle = style({
  maxWidth: 806,
  fontFamily: manropeRegular,
  color: colorWhite,
  textAlign: 'center',
  margin: '0 auto 104px',

  '@media': smallUp({
    fontSize: 18,
    lineHeight: '29px',
  })
});

export const timeLimeTitle = style({
  textAlign: 'left',
  maxWidth: 339,
  marginBottom: 24,
  fontSize: 32,
  fontFamily: manropeSemiBold,
  color: colorWhite,
  lineHeight: '44px',
});

export const timeLineInfo = style({
  textAlign: 'left',
  maxWidth: 476,
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  fontFamily: manropeRegular,
  color: colorWhite,

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },  
});

export const timeLineSubtitle = style({
  fontSize: 22,
  fontFamily: manropeSemiBold,
  color: colorWhite,
});

export const timelineDuration = style({
  textAlign: 'left',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  lineHeight: '33px',
  fontFamily: manropeSemiBold,
  flex: '0 0 50%',
});

export const timeline = style({
  padding: '0 0 0 10px',
})

export const timelineItem = style({  
  gap: '72px',
  justifyContent: 'center',
  padding: 0
})

export const timelineContent = style({
  padding: 0,
  flex: '0 0 50%',
  marginBottom: 32,

  '@media': smallUp({
    marginBottom: 80,
  })  
})

export const separator = style({
  background: '#4388dd1a',
  borderRadius: 2,
})

export const dot = style({
  aspectRatio: '1/1',
  transition: 'all .3s',
  transform: 'scale(1.5)',
  width: 24,
  background: colorPrimary,
  margin: '24px 0',
})