'use strict';

const jsonFile = require('jsonfile');
const fs = require('fs');

function checkDirectorySync(directory) {
  try {
    fs.statSync(directory);
  } catch (error) {
    const createStream = fs.createWriteStream(directory);
    createStream.end();
    jsonFile.writeFileSync(directory, {
      globalConfiguration: {
      }
    }, {spaces: 2});
  }
}

function getConfiguration() {

  const root = __dirname;
  const configFileName = 'config.json';
  const configFilePath = root + '/' + configFileName;

  checkDirectorySync(configFilePath);

  let settings = jsonFile.readFileSync(configFilePath);
  settings.root = root;
  settings.fileName = configFileName;
  settings.fullPath = configFilePath;

  return settings;

}

module.exports = {
  getConfiguration
};
