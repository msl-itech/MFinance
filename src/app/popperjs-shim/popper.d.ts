declare module '@popperjs/core/dist/umd/popper.js' {
  export const createPopper: any;
  export const modifiers: {
    flip: any;
    preventOverflow: any;
    arrow: any;
    offset: any;
  };

  // Autres exports si nécessaire
  export * from '@popperjs/core';
}
