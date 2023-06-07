# Chrome Extension Boilerplate

Ultra fast minimalistic Chrome Extensions boilerplate that help you set up your web extension faster!

## Key features:
- Automatic extension releod on changes
- Ultra fast build with `esbuild`
- Sustainable render extension UI in `shadow DOM`

## Whats inside?

- [Chrome MV3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [Esbuild](https://esbuild.github.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Yarn](https://yarnpkg.com/)

## Installing and Running

1. Check if your [Node.js](https://nodejs.org/) version is >= **18**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the `name` and `description` of your extension in `src/manifest.json`.
5. Run `npm install` (or `yarn install`) to install the dependencies.
6. Run `npm run build` (or `yarn build`).
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy development!

## Commands

- Build a package (produce mified and tree-shaked package):

```
npm run build

# or

yarn build
```

- Run for development:

```
npm run watch

# or

yarn watch
```
- Pretify your code using:

```
npm run prettier

# or

yarn prettier
```
- Check `eslint`:

```
npm run eslint

# or

yarn eslint
```