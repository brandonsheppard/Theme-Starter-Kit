#!/usr/bin/env node

const program = require('commander');
const pkg = require('./package.json');
const { generateTheme } = require('./scripts/generate');

program
	.version(pkg.version)
	.command('generate <name>')
	.description('Create a new Neto theme')
	.action(function (name){
		generateTheme(name)
	})

program.parse(process.argv);

if (program.args.length === 0) program.help();
