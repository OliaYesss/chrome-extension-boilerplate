import { getBuildContext } from '../esbuild'

getBuildContext(false).then((ctx) => ctx.watch())
