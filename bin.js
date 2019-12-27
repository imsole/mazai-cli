#!/usr/bin/env node

const program = require("commander");
const version = require("./package.json").version;


program.version(version, "-v, --version");

program
  .command("create <app-name>")
  .description("使用 mazai-cli 创建一个新的项目")
  .option("-d --dir <dir>", "创建目录")
  .action((name, command) => {
    const create = require("./create")
    create(name)
  });

program.parse(process.argv);
console.log(process.argv);