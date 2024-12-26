declare module 'kursor' {
  interface KursorOptions {
    type?: number;
    color?: string;
    removeDefaultCursor?: boolean;
    el?: HTMLElement | string;
    // Add other options as needed
  }

  class Kursor {
    constructor(options?: KursorOptions);
    // Add other methods and properties as needed
  }

  export default Kursor;
}