[![NPM](https://img.shields.io/npm/v/react-compress.svg)](https://www.npmjs.com/package/react-compress)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/react-compress)
![npm](https://img.shields.io/npm/dm/react-compress)
![GitHub stars](https://img.shields.io/github/stars/Ivan-Corporation/react-compress?style=social)



# React-compress

### This compress library was made with Brotli and Gzip help, for React users who want to make website more performance and reduce JS bundle code without problems like this:
<img src='https://pbs.twimg.com/media/FLdahMPXIAErcnh?format=png&name=small'>

<br/>


# Usage
Install library into your project `(with npm or yarn)`, how `dev`:
```bash
npm i react-compress --save-dev
---
yarn add react-compress -D
```

And then just add react compress in your `package.json` build script like below:

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

# Example
## `Before react-compress:`
<img src='https://pbs.twimg.com/media/FLdahMRXwAIsz8X?format=png&name=small'>

---
## `Build script with this library:`
<img src='https://pbs.twimg.com/media/FLdahMJX0AUluYh?format=png&name=small'>


---
## `After react-compress:`
<img src='https://pbs.twimg.com/media/FLdkIVVWUAMBIds?format=png&name=small'>


# Summary 
You can made your build folder `30% smaller` and optimized than it was without this library. How you can see in Example pictures our JS bundle who loaded 0.39s without this library now loaded in 0.2s, it's `almost 50%!`. 

And of course when your project larger this library will give you more profit

If you have some problems, write me, or use issues in this repository

## `Good luck!`