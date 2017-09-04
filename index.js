#!/usr/bin/env node

var shell = require('shelljs');
var program = require('commander');

function generateTheme(themeName){
	// Folder where everything will be compiled to
	if(themeName){
		var DEST = `./${themeName}`;
	}else{
		var DEST = './newTheme';
	}

	var TEMP = './temp';

	shell.rm('-rf', DEST);
	shell.mkdir('-p', DEST);
	shell.rm('-rf', TEMP);
	shell.mkdir('-p', TEMP);

	// Determine the theme list dynamically
	shell.cd('./');

	console.log( "Theme starter kit 👜");
	console.log( "Generate Theme! 🙏");
	console.log( "This script will setup a new theme repository for you so you can start working on a new website.");

	console.log( "👉 Building a new theme");
	console.log( "👉 Cloning the latest version of Skeletal from GitHub.");

	shell.exec(`git clone --depth 1 https://github.com/NetoECommerce/Skeletal.git ${TEMP}/.latestSkeletal`);

	console.log( "👍");
	console.log( "👉 Creating the required template directories.");

	// Create directories for templates
	shell.mkdir('-p', `${DEST}/src`);
	shell.mkdir('-p', `${DEST}/src/templates`);
	shell.mkdir('-p', `${DEST}/src/templates/headers`);
	shell.mkdir('-p', `${DEST}/src/templates/cms`);
	shell.mkdir('-p', `${DEST}/src/templates/footers`);

	console.log( "👍");
	console.log( "👉 Creating the required asset directories.");

	// Create directories for assets
	shell.mkdir('-p', `${DEST}/src/css`);
	shell.mkdir('-p', `${DEST}/src/js`);

	console.log( "👍");
	console.log( "👉 Creating the bin and Buildkite directories.");

	// Create bin and Buildkite directory
	shell.mkdir('-p', `${DEST}/.buildkite`);
	shell.mkdir('-p', `${DEST}/bin`);

	console.log( "👍");
	console.log( "👉 Copying the templates from Skeletal to our new theme.");

	// Copy in some standard templates from Skeletal
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/templates/headers/template.html`,`${DEST}/src/templates/headers/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/templates/footers/template.html`,`${DEST}/src/templates/footers/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/templates/cms/home.template.html`,`${DEST}/src/templates/cms/`);

	console.log( "👍");
	console.log( "👉 Copying the assets from Skeletal to our new theme.");

	// Copy in custom.js and app.less
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/css/app.less`,`${DEST}/src/css/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/css/app.css`,`${DEST}/src/css/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/css/skeletal-style.css`,`${DEST}/src/css/${DEST}-style.css`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/src/js/custom.js`,`${DEST}/src/js/`);

	console.log( "👍");
	console.log( "👉 Copying .gitignore, gulpfile.js, package.json and README.md from Skeletal to our new theme.");

	// Copy some other required files
	shell.cp('-r', `${TEMP}/.latestSkeletal/.gitignore`,`${DEST}/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/gulpfile.js`,`${DEST}/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/package.json`,`${DEST}/`);
	shell.cp('-r', `${TEMP}/.latestSkeletal/README.md`,`${DEST}/`);

	console.log( "👍");
	console.log( "👉 Copying Buildkite from Skeletal to our new theme.");

	// Copy buildkite
	shell.cp('-r', `${TEMP}/.latestSkeletal/.buildkite/.`,`${DEST}/.buildkite/`);

	console.log( "👍");
	console.log( "👉 Copying themeScripts from this repo to our new theme.");

	// Copy these scripts
	shell.cp('-r', `./themeScripts/.`,`${DEST}/bin/`);

	console.log( "👍");
	console.log( "👉 Installing all of the NPM dependecies.");

	// Setup NPM
	shell.cd(`${DEST}`);

	shell.exec('npm install');

	console.log( "👍👍👍👍👍👍👍👍");
	console.log( `Your new theme is located at ${DEST}. You can go there in terminal with the command cd ${DEST}`);

	if(themeName){
		console.log( "Congratulations! You can now start working on your new theme.");
	}else{
		console.log( `You're not done! You need to rename your theme folder (${DEST}) to reflect the name of your theme and update package.json to use the correct git repo.`);
	}

	console.log( "🤘");
	shell.exit(1);
}
generateTheme(process.argv[2]);
