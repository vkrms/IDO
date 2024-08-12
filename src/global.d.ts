declare module '*.svg?url' {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const content: any;
  export default content;
}

declare module 'lodash';

declare module 'lang-list' {
  function getList(props: { supportedLangs: string[] }): {
    code: string;
    int: string;
    native: string;
  }[];

  export default { getList };
}

declare module '*.html' {
  const content: string;
  export default content;
}