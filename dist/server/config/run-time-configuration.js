'use strict';

var jsonFile = require('jsonfile');
var fs = require('fs');

function checkDirectorySync(directory) {
  try {
    fs.statSync(directory);
  } catch (error) {
    var createStream = fs.createWriteStream(directory);
    createStream.end();
    jsonFile.writeFileSync(directory, {
      globalConfiguration: {}
    }, { spaces: 2 });
  }
}

function getConfiguration() {

  var root = __dirname;
  var configFileName = 'config.json';
  var configFilePath = root + '/' + configFileName;

  checkDirectorySync(configFilePath);

  var settings = jsonFile.readFileSync(configFilePath);
  settings.root = root;
  settings.fileName = configFileName;
  settings.fullPath = configFilePath;

  return settings;
}

module.exports = {
  getConfiguration: getConfiguration
};