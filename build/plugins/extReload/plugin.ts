import * as esbuild from 'esbuild'
import WebSocket from 'ws'
import chokidar from 'chokidar'
import debounce from 'lodash.debounce'
import { ExtReloadMessage } from './shared'
import { Config } from '../../utils/config'

export function extReleoadPlugin(path: string): esbuild.Plugin {
  return {
    name: 'pluging:extRelod',
    setup: () => {
      const wss = new WebSocket.Server({
        port: Config.Env.EXT_RELOAD_PORT
      })

      wss.on('connection', (ws) => {
        const watcher = chokidar.watch(path, {
          ignoreInitial: true
        })

        watcher.on(
          'all',
          debounce(() => ws.send(ExtReloadMessage.change), 500)
        )

        ws.on('close', () => {
          watcher.close()
        })
      })
    }
  }
}
