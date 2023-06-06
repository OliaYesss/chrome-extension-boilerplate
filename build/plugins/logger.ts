import * as esbuild from 'esbuild'
import { logger } from '../utils/logger'

export const loggerPlugin: esbuild.Plugin = {
  name: 'pluging:logger',
  
  setup: build => {
    build.onStart(() => {
      logger.debug('build started')
    })

    build.onEnd(async ({ errors, warnings }) => {
      if (errors.length) {
        const message = await esbuild.formatMessages(errors, {
          color: true,
          kind: 'error'
        })

        logger.error('esbuild error:')
        logger.log(message.join('\n'))
      }

      if (warnings.length) {
        const message = await esbuild.formatMessages(warnings, {
          color: true,
          kind: 'warning'
        })

        logger.warn('esbuild warning:')
        logger.log(message.join('\n'))
      }

      if (!warnings.length && !errors.length) {
        logger.debug('build finished successfuly!')
      }
    })
  }
}