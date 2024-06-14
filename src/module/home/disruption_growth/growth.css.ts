import { colorPrimary } from '@/style/config/color.css';

import { colorWhite } from '@/style/config/color.css';
import { style } from '@vanilla-extract/css';
import { smallUp } from '@/style/config/breakpoints.css';

export const title = style({
  color: colorWhite,
  fontWeight: 600,
  textAlign: 'center',
  margin: '0 auto 16px',
});

export const subtitle = style({
  maxWidth: 806,
  fontWeight: 400,
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
  fontWeight: 600,
  color: colorWhite,
  lineHeight: '44px',
});

export const timeLineInfo = style({
  textAlign: 'left',
  maxWidth: '44ch',
  marginBottom: 32,
  fontSize: 18,
  lineHeight: '29px',
  fontWeight: 400,
  color: colorWhite,

  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },  
});

export const timeLineSubtitle = style({
  fontSize: 22,
  fontWeight: 600,
  color: colorWhite,
});

export const timelineDuration = style({
  textAlign: 'left',
  background: ' linear-gradient(45deg, #EA347F 14.66%, #E23080 28.1%, #CC2484 50.02%, #A81189 76.18%, #9A098B 85.37%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: 24,
  lineHeight: '33px',
  fontWeight: 600,
  flex: '0 1 50%',
  padding: 0,
});

export const timeline = style({
  padding: '0 0 0 10px',
})

export const timelineItem = style({  
  gap: 24,
  justifyContent: 'center',
  padding: 0,

  '@media': smallUp({
    gap: '72px',
  })
})

export const timelineContent = style({
  padding: 0,
  flex: '1 1 50%',
  marginBottom: 32,

  // '@media': smallUp({
  //   marginBottom: 80,
  // })

  '@media': {
    '(min-width: 1200px)': {
      flex: '0 1 50%',
      marginBottom: 80,
    }
  }
  
  
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

export const section = style({
  padding: 0,
  marginBottom: 56,

  '@media': smallUp({
    marginBottom: 120,
  })
})