/**
 * ----------------------------------------------------------------------------------
 * transition.css
 * ----------------------------------------------------------------------------------
 *
 * @author shuangshuang 2023/03/14
 */

export function transitionFn(type = 'enter', cssPropperty = 'all', duration?: string) {
  const time = duration || (type === 'enter' ? '0.3s' : '0.2s');
  const ease = type === 'enter' ? 'ease-out' : 'ease-in';
  return {
    ...{
      transition: `${cssPropperty} ${time} ${ease}`,
    },
  };
}
