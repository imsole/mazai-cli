const path = require("path");
const mkdirp = require("mkdirp");
const ora = require('ora');
const download = require('download-git-repo');
let spinner = ora('downloading template ...');

spinner.start()
download(repository, destination, options, callback)

module.exports = function(name) {
  mkdirp(path.join(process.cwd(), name), function(err) {
    let msg = err ? '创建失败' : '创建成功';
    console.log(msg);
  });
};