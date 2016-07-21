![](http://design.neto.com.au/assets/uploads/QR0D5N9y3D.png)

This repo contains a script, `generatetheme.sh`, which will set up a new environment for you to build a Neto theme!

It also acts as a repository for themeScripts which are used within the themes to compile, update and upload stuff. You shouldn't run these scripts within this repository—they are just here for version control and storage.

## How it works

To build a new theme, simply navigate to this repository in terminal and run the following command:

```
bash generatetheme.sh
```

This will create a new directory, outside of but adjacent to this directory, called `newTheme`. It will have everything you need set-up.

Note that you need Node.js installed, and gulp.js installed globally to run this script successfully. 

## How to actuall build a theme

To build a new theme for Neto, you need to start with this starter kit.
