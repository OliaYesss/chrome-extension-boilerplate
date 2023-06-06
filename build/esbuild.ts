import * as esbuild from 'esbuild'
import copyPlugin from 'esbuild-plugin-copy-watch'
import { typecheckPlugin } from '@jgoz/esbuild-plugin-typecheck'
import { loggerPlugin } from './plugins/logger'
import { logger } from './utils/logger'
import { extReleoadPlugin } from './plugins/extReload/plugin'
import { Config } from './utils/config'
import { initialCleanPlugin } from './plugins/initialClean'


export function getBuildContext(isProd: boolean): Promise<esbuild.BuildContext> {
  return esbuild.context({
    entryPoints: {
      bg: Config.Paths.Src.BG,
      cs: Config.Paths.Src.CS,
      popup: Config.Paths.Src.POPUP
    },
    outdir: Config.Paths.Dist.SRC,
    bundle: true,
    color: true,
    logLevel: 'silent',
    define: {
      'process.env.PROD': String(isProd),
      'process.env.WS_RELOAD_PORT': String(Config.Env.EXT_RELOAD_PORT)
    },
    plugins: [
      loggerPlugin,
      initialCleanPlugin(Config.Paths.DIST),
      copyPlugin({
        paths: [
          {
            from: Config.Paths.Src.MANIFEST,
            to: Config.Paths.DIST
          },
          {
            from: Config.Paths.Src.POPUP_HTML,
            to: Config.Paths.Dist.PAGES
          }
        ]
      }),
      typecheckPlugin({
        watch: true,
        logger
      }),
      extReleoadPlugin(Config.Paths.DIST),
    ],
    ...(
      isProd
      ? {
        minify: true,
        treeShaking: true,
      } 
      : {
        sourcemap: 'both',
      }
    )
  })
}
