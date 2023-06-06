import * as path from 'path'

export namespace Config {
  export namespace Env {
    export const EXT_RELOAD_PORT = Number(process.env.EXT_RELOAD_PORT ?? 6565)
  }
  
  export namespace Paths {
    export const ROOT = process.cwd()
  
    export const SRC = path.join(ROOT, 'src')
  
    export namespace Src {
      export const BG = path.join(SRC, 'bg')
      export const CS = path.join(SRC, 'cs')
      export const POPUP = path.join(SRC, 'popup')
      export const POPUP_HTML = path.join(SRC, 'popup/popup.html')
      export const MANIFEST = path.join(SRC, 'manifest.json')
    }
  
    export const DIST = path.join(ROOT, 'dist')
  
    export namespace Dist {
      export const SRC = path.join(DIST, 'src')
      export const PAGES = path.join(DIST, 'pages')
      export const MANIFEST = path.join(DIST, path.basename(Src.MANIFEST))
    }
  }
}
