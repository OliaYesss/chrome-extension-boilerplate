import * as path from 'path'
import * as fs from 'fs'
import { zip } from 'zip-a-folder'
import { getBuildContext } from '../esbuild'
import { Config } from '../utils/config'

getBuildContext(true).then(async (ctx) => {
  const { errors, warnings } = await ctx.rebuild()
  const manifest: { name: string } = JSON.parse(
    fs.readFileSync(Config.Paths.Dist.MANIFEST, 'utf-8')
  )
  const packageName = `${manifest.name
    .toLocaleLowerCase()
    .replace(/ /g, '-')}-${Config.Env.MAJOR_VERSION}.${
    Config.Env.MINOR_VERSION
  }.${Config.Env.PATCH_VERSION}.zip`

  if (fs.existsSync(Config.Paths.PACKAGE)) {
    fs.rmSync(Config.Paths.PACKAGE, { recursive: true, force: true })
  }

  fs.mkdirSync(Config.Paths.PACKAGE)

  await zip(Config.Paths.DIST, path.join(Config.Paths.PACKAGE, packageName))

  process.exit(errors.length > 0 || warnings.length > 0 ? 1 : 0)
})
