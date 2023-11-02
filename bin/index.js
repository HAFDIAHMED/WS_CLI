#!/usr/bin/env node
const program = require('commander');
const ver = require('../lib/ver');
program
  .usage('[options] <file>')
  .option('-v, --version', 'show version', ver, '')
  .option('-p, --port <port>', 'use custom port')
  .option('-f, --flag', 'boolean flag', false)
  .action((file, options) => {
    console.log('file name: ', file);
    // more hanlder: require('../lib/moreHandler')(options);
  })
  .parse(process.argv);