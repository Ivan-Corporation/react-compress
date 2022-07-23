const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path').path;
const args = require('../args');
const supportedAlgorithms = require('../compress').supportedAlgorithms;
const defaultConfig = require('./defaultConfig');
const configFilePath = args.config;





const validateAlgorithms = (check:any, config:any) => {
  if (check === 'algorithms') {
    for (const algorithm of config[check]) {
      if (!supportedAlgorithms.includes(algorithm)) {
        throw new Error(
          `[react-compress]: The algorithm '${algorithm}' is not supported.`
        );
      }
    }
  }
};

const validateConfigs = (config:any) => {
  for (const check in config) {
    if (!Object.hasOwnProperty.call(defaultConfig, check)) {
      throw new Error(
        `[react-compress]: The option '${check}' does not exists.`
      );
    }

    validateAlgorithms(check, config);
  }
};

const getConfig = () => {
  const configFile = path.join(appRoot, configFilePath);
  if (fs.existsSync(configFile)) {
    const strConfig = fs.readFileSync(configFile);
    const config = JSON.parse(strConfig);
    validateConfigs(config);

    return { ...defaultConfig, ...config };
  }

  return defaultConfig;
};

/** @type {{filetypes:string[], directory: string, algorithms:string[]}} */
const config = getConfig();
module.exports = config;
export {}