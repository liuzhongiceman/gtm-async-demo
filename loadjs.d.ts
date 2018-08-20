type LoadJS = (paths: string | string[], options: { error: (pathsMissing: string[]) => void, success: () => void }) => void;

declare module 'loadjs' {
  const loadjs: LoadJS;
  export = loadjs;
}