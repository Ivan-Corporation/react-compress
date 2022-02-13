# CompressJS

## Usage

##### 0) Create your app using create-react-app

#### 1) Installation

Install the package as a dev dependency:

```bash
npm install react-compress --save-dev
```

#### 2) Usage

Edit your app's build script in `package.json`:

```diff
  "scripts": {
    "start": "react-scripts start",
-   "build": "react-scripts build",
+   "build": "react-scripts build && react-compress",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

###### Custom build directory

Since version `1.1.0`, you can optionally provide a path to your build directory by adding `-d` or `--directory` argument to the command in your `package.json`:

```bash
...
"build": "react-scripts build && react-compress -d /path/to/build",
...
```

The default build path is `/build`. The provided custom path should be a relative path from your project's **root directory**.

###### Custom configuration

Since version `1.2.0`, you can optionally create a configuration file `react-compress.json`:

```json
{
  "algorithms": ["br", "gz"],
  "filetypes": [
    ".html",
    ".js",
    ".css",
    ".svg",
    ".png",
    ".jpg",
    ".mp3",
    ".wav",
    ".tff",
    ".woff2",
    ".map"
  ],
  "directory": "/build"
}
```

By default, react-compress looks for `react-compress-json` in the project root but you may also provide a custom path to the config file by adding `-c` or `--config` argument to the command in your `package.json`:

```bash
...
"build": "react-scripts build && react-compress -c /path/to/configfile",
...
```

#### 3) Build your app just like you normally would

```bash
npm run build
```

