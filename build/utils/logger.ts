import defaultLogger from 'node-color-log'

defaultLogger.setDate(() => `[${(new Date()).toLocaleTimeString()}]`)

export const logger = defaultLogger
