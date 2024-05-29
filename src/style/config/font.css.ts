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
  fontDisplay: 'swap',
});

globalFontFace(manropeBold, {
  src: 'url("/fonts/Manrope-Bold.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeExtraBold, {
  src: 'url("/fonts/Manrope-ExtraBold.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeExtraLight, {
  src: 'url("/fonts/Manrope-ExtraLight.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeLight, {
  src: 'url("/fonts/Manrope-Light.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeMedium, {
  src: 'url("/fonts/Manrope-Medium.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeRegular, {
  src: 'url("/fonts/Manrope-Regular.ttf")',
  fontDisplay: 'swap',
});

globalFontFace(manropeSemiBold, {
  src: 'url("/fonts/Manrope-SemiBold.ttf")',
  fontDisplay: 'swap',
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