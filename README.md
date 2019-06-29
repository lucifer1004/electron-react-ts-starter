# electron-react-ts-starter

A starter kit for Electron + React + Typescript.

The fastest way to get start is to use `degit`

```sh
npx degit lucifer1004/electron-react-ts-starter my-electron-app
```

The kit is integrated with the following packages:

- [electron-forge](https://github.com/electron-userland/electron-forge)
- [jest-electron-runner](https://github.com/facebook-atom/jest-electron-runner)
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [jest-transform-css](https://github.com/dferber90/jest-transform-css)
- [jest-transform-graphql](https://github.com/remind101/jest-transform-graphql)

## Develop

```sh
yarn start
```

Note that port `9000` should be available.

## Test

```sh
yarn test
```

## Package

To package your Electron program, simply run

```sh
yarn package
```

## Make

Several `make:*` scripts are defined in `package.json`.

- `yarn make` will make all the packages suitable for your platform.
- `yarn make:win` will make a Windows installer via Squirrel. It relies on
  `wine` and `mono` when not running on Windows.
- `yarn make:dmg` will make a MacOS `.dmg` installer. It can only be used on
  MacOS.
- `yarn make:deb` will make a Debian `.deb` installer. It can only be used on
  Debian-based systems.
- `yarn make:rpm` will make a RedHat/Fedora `.rpm` installer. It can only be
  used on RedHat/Fedora-based systems.

Note that you should not include `@` in `author` of `package.json`, otherwise
Squirrel will fail to make the installer.

## Publish

To publish your package, you can simply run

```sh
yarn publish
```

By default, this will publish your package to `NPM`.
