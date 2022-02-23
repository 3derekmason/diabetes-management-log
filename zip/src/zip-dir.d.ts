declare module 'zip-dir' {

  interface Options {
    filter: (path: string) => boolean
  }

  type Callback = (err: unknown, buffer: Buffer) => void | Promise<void>

  const zipdir: (path: string, options: Options, callback: Callback) => void

  export default zipdir
}

