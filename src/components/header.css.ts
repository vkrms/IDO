import { colorBorder, colorWhite } from '@/style/config/color.css';

import { manropeMedium } from '@/style/config/font.css';
import { zIndexHeader } from '@/style/config/zindex.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: zIndexHeader,
  padding: '32px 160px',
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
  fontFamily: manropeMedium,
  color: colorWhite,
  whiteSpace: 'nowrap',
});
