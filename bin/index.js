#!/usr/bin/env node

const program = require("commander");
const version = require("../package.json").version;

// program
//   .command("create <app-name>")
//   .description("使用 mazai-cli 创建一个新的项目")
//   .option("-d --dir <dir>", "创建目录")
//   .action((name, cmd) => {
//     const create = require("./create")
//     create(name)
//   });

program
  .version(version, "-v, --version")
  .option('-c --create', '使用 mazai-cli 创建一个新的项目');

program.on('--help', function(){
  console.log('')
  console.log('Examples:');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
});
program.parse(process.argv);
console.log(process);
if (program.create) {
  console.log('create');
}
