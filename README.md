[![NPM](https://img.shields.io/npm/v/repository-metrics.svg)](https://www.npmjs.com/package/react-compress)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/react-compress)
![npm](https://img.shields.io/npm/dm/react-compress)
![GitHub stars](https://img.shields.io/github/stars/Ivan-Corporation/react-compress?style=social)



# React-compress

### This compress library was made with Brotli and Gzip help, for React users who want to make website more performance and reduce JS bundle code without problems like this:
<img src='./1.png'>

ll as dev
```bash
npm i react-compress --save-dev
---
yarn add react-compress -D
```


## Usage

Just add react compress in your `package.json` build script like below:

```diff
-   "build": "react-scripts build",
+   "build": "react-scripts build && react-compress",
```
And then just `run script build` like you always do:

```bash
npm run build
---
yarn run build
```

## Example
