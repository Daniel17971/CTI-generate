#! /Users/danielisa/Desktop/generate node
const projectGenerator = require("../../Northcoder/fundamentals/fun-callback-heaven/challenges/2-project-generator");
const yargs = require("yargs");
const projectName = process.argv.slice(-1)[0];

projectGenerator(projectName, function () {});
