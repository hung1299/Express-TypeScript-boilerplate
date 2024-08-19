# node-typescript-boilerplate

[![Sponsor][sponsor-badge]][sponsor]
[![TypeScript version][ts-badge]][typescript-5-4]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [5.4][typescript-5-4]
- [ESM][esm]
- [ESLint][eslint] with some initial rules recommendation
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- [EditorConfig][editorconfig] for consistent coding style
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]
- Simple example of TypeScript code and unit test

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

## Available Scripts

- `clean` - remove coverage data and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,

## Additional Information

### Why include Volta

[Volta][volta]’s toolchain always keeps track of where you are, it makes sure the tools you use always respect the settings of the project you’re working on. This means you don’t have to worry about changing the state of your installed software when switching between projects. For example, it's [used by engineers at LinkedIn][volta-tomdale] to standardize tools and have reproducible development environments.

I recommend to [install][volta-getting-started] Volta and use it to manage your project's toolchain.

### ES Modules

This template uses native [ESM][esm]. Make sure to read [this][nodejs-esm], and [this][ts47-esm] first.

If your project requires CommonJS, you will have to [convert to ESM][sindresorhus-esm].

Please do not open issues for questions regarding CommonJS or ESM on this repo.
