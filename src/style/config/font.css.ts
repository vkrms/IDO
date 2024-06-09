import { globalFontFace, style } from '@vanilla-extract/css';


export const manropeBold = 'ManropeBold';
export const manropeExtraBold = 'ManropeExtraBold';
export const manropeExtraLight = 'ManropeExtraLight';
export const manropeLight = 'ManropeLight';
export const manropeMedium = 'ManropeMedium';
export const manropeRegular = 'ManropeRegular';
export const manropeSemiBold = 'ManropeSemiBold';
export const electrolizeRegular = 'ElectrolizeRegular';

globalFontFace(electrolizeRegular, {
  src: 'url("/fonts/Electrolize-Regular.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeBold, {
  src: 'url("/fonts/Manrope-Bold.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeExtraBold, {
  src: 'url("/fonts/Manrope-ExtraBold.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeExtraLight, {
  src: 'url("/fonts/Manrope-ExtraLight.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeLight, {
  src: 'url("/fonts/Manrope-Light.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeMedium, {
  src: 'url("/fonts/Manrope-Medium.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeRegular, {
  src: 'url("/fonts/Manrope-Regular.ttf")',
  fontDisplay: 'block',
});

globalFontFace(manropeSemiBold, {
  src: 'url("/fonts/Manrope-SemiBold.ttf")',
  fontDisplay: 'block',
});

export const fontElectrolizeRegular = style({
  fontFamily: electrolizeRegular,
});

export const fontManropeBold = style({
  fontFamily: manropeBold,
});

export const fontManropeExtraBold = style({
  fontFamily: manropeExtraBold,
});

export const fontManropeExtraLight = style({
  fontFamily: manropeExtraLight,
});

export const fontManropeLight = style({
  fontFamily: manropeLight,
});

export const fontManropeMedium = style({
  fontFamily: manropeMedium,
});

export const fontManropeRegular = style({
  fontFamily: manropeRegular,
});

export const fontManropeSemiBold = style({
  fontFamily: manropeSemiBold,
});

// ----------------------------------------------------------------------------------