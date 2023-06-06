import * as fs from 'fs'
import * as esbuild from 'esbuild'

export function initialCleanPlugin(path: string): esbuild.Plugin {
  return {
    name: 'pluging:initialClean',
    setup: () => {
      fs.rmSync(path, { recursive: true, force: true })
    }
  }
}
