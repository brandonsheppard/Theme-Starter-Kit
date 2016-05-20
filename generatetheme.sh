#!/bin/bash

# Folder where everything will be compiled to
DEST="../newTheme"
TEMP="./temp"

rm -rf $DEST
mkdir $DEST
rm -rf $TEMP
mkdir $TEMP

# Determine the theme list dynamically
cd "./"

echo "Generate Theme! 🙏"
echo "This script will setup a new theme repository for you so you can start working on a new website."

echo "👉 Building a new theme"
echo "👉 Cloning the latest version of Skeletal from GitHub."

git clone --depth 1 https://github.com/NetoECommerce/Skeletal.git ${TEMP}/.latestSkeletal

echo "👍"
echo "👉 Creating the required template directories."

# Create directories for templates
mkdir "${DEST}/src"
mkdir "${DEST}/src/templates"
mkdir "${DEST}/src/templates/headers"
mkdir "${DEST}/src/templates/cms"
mkdir "${DEST}/src/templates/footers"

echo "👍"
echo "👉 Creating the required asset directories."

# Create directories for assets
mkdir "${DEST}/src/css"
mkdir "${DEST}/src/js"

echo "👍"
echo "👉 Creating the bin and Buildkite directories."

# Create bin and Buildkite directory
mkdir "${DEST}/.buildkite"
mkdir "${DEST}/bin"

echo "👍"
echo "👉 Copying the templates from Skeletal to our new theme."

# Copy in some standard templates from Skeletal
cp -r "${TEMP}/.latestSkeletal/src/templates/headers/template.html" "${DEST}/src/templates/headers/"
cp -r "${TEMP}/.latestSkeletal/src/templates/footers/template.html" "${DEST}/src/templates/footers/"
cp -r "${TEMP}/.latestSkeletal/src/templates/cms/home.template.html" "${DEST}/src/templates/cms/"

echo "👍"
echo "👉 Copying the assets from Skeletal to our new theme."

# Copy in custom.js and app.less
cp -r "${TEMP}/.latestSkeletal/src/css/app.less" "${DEST}/src/css/"
cp -r "${TEMP}/.latestSkeletal/src/css/app.css" "${DEST}/src/css/"
cp -r "${TEMP}/.latestSkeletal/src/css/skeletal-style.css" "${DEST}/src/css/"
cp -r "${TEMP}/.latestSkeletal/src/js/custom.js" "${DEST}/src/js/"

echo "👍"
echo "👉 Copying .gitignore, gulpfile.js, package.json and README.md from Skeletal to our new theme."

# Copy some other required files
cp -r "${TEMP}/.latestSkeletal/.gitignore" "${DEST}/"
cp -r "${TEMP}/.latestSkeletal/gulpfile.js" "${DEST}/"
cp -r "${TEMP}/.latestSkeletal/package.json" "${DEST}/"
cp -r "${TEMP}/.latestSkeletal/README.md" "${DEST}/"

echo "👍"
echo "👉 Copying Buildkite from Skeletal to our new theme."

# Copy buildkite
cp -r "${TEMP}/.latestSkeletal/.buildkite/." "${DEST}/.buildkite/"

echo "👍"
echo "👉 Copying themeScripts from this repo to our new theme."

# Copy these scripts
cp -r "./themeScripts/." "${DEST}/bin/"

echo "👍"
echo "👉 Installing all of the NPM dependecies."

# Setup NPM
cd "${DEST}"

npm install

echo "👍👍👍👍👍👍👍👍"
echo "Your new theme is located at ../newTheme. You can go there in terminal with the command cd ../newTheme"
echo "You're not done! You need to rename your theme folder (../newTheme) to reflect the name of your theme and update package.json to use the correct git repo."
echo "🤘"
