import {
  colorBgButtonDarkGrey,
  colorBgButtonGrey,
  colorBgGreyLight,
  colorBorder,
  colorPrimary,
  colorTextBlack,
  colorWhite,
} from '@/style/config/color.css';
import { style, styleVariants } from '@vanilla-extract/css';

/**
 * ----------------------------------------------------------------------------------
 * button.css
 * ----------------------------------------------------------------------------------
 *
 * @author shuang 2023/08/08
 */

export const iconButtonVar = styleVariants({
  border: {
    border: `1px solid ${colorBorder}`,
  },
  borderWithBg: {
    border: `1px solid ${colorBorder}`,
    background: colorBgGreyLight,
  },
  borderWithRadius: {
    borderRadius: '8px !important',
    border: `1px solid ${colorBorder}`,
  },
});
