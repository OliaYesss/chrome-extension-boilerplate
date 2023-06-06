import { getBuildContext } from "../esbuild"

getBuildContext(true).then(async ctx => {
  const { errors, warnings } = await ctx.rebuild()

  process.exit(errors.length > 0 || warnings.length > 0 ? 1 : 0)
})
