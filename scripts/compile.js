#!/usr/bin/env node

const fs = require('fs');
const shell = require('shelljs')
const chalk = require('chalk')
const log = console.log
const success = chalk.green
const warning = chalk.yellow

module.exports.compileTheme = () => {
	// Folder where everything will be compiled to
	var DIST = "./dist"
	// Re-create the 'dist' directory
	shell.rm('-rf', DIST)
	shell.mkdir('-p', DIST)

	// Determine the theme list dynamically
	shell.cd('./')
	// MAINTHEME="$(basename $PWD)"
	var MAINTHEME = process.cwd()

	log(warning("Fetching latest Skeletal..."))
	shell.exec(`git clone --depth 1 https://github.com/NetoECommerce/Skeletal.git ${DIST}/.latestSkeletal`)

	shell.cd("./src/templates")
	var THEMES = shell.ls('-A', '*-netothemeinfo.txt');

	THEMES.forEach(theme => {
		theme = theme.replace(/-netothemeinfo.txt*$/, "")
		// Back to root
		shell.cd("../../")
		log(warning(`Building '${theme}' theme...`))
		// Create theme folder
		shell.mkdir('-p', `${DIST}/${theme}`)
		shell.mkdir('-p', `${DIST}/${theme}/_assets`)
		// Copy latest from Skeletal
		shell.cp('-r', `${DIST}/.latestSkeletal/src/templates/.`, `${DIST}/${theme}/`)
		shell.cp('-r', `${DIST}/.latestSkeletal/src/css`, `${DIST}/${theme}/_assets`)
		shell.cp('-r', `${DIST}/.latestSkeletal/src/js`, `${DIST}/${theme}/_assets`)
		// Copy Templates
		shell.cp('-r', `./src/templates/.`, `${DIST}/${theme}/`)
		// Copy Assets
		shell.cp('-r', `./src/css`, `${DIST}/${theme}/_assets`)
		shell.cp('-r', `./src/img`, `${DIST}/${theme}/_assets`)
		// Rename theme stylesheet to style.css
		shell.mv(`${DIST}/${theme}/_assets/css/${theme}-style.css`, `${DIST}/${theme}/_assets/css/style.css`)
		// Rename theme info file to netothemeinfo.txt
		shell.mv(`${DIST}/${theme}/${theme}-netothemeinfo.txt`, `${DIST}/${theme}/netothemeinfo.txt`)
		shell.cd("./src/templates")
		log(success(`👍 ${theme} built!`));
	})

	shell.cd("../../dist/")
	shell.rm('-rf', "./.latestSkeletal");
	log(warning("Compressing themes..."))

	fs.readdirSync('./').forEach(themeFolder => {
		// Archive each folder
		shell.exec(`zip -rq ${themeFolder}.zip ${themeFolder}`);
		shell.rm('-rf', themeFolder);
	})

	shell.cd("../")
	log(success("👍👍👍 Swag!"))
	shell.exit(1)
}
