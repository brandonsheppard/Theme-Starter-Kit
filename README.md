```
npm install -g ntheme
```

![](http://design.neto.com.au/assets/uploads/QR0D5N9y3D.png)

This repo contains a node module, `generatetheme`, which will set up a new environment for you to build a Neto theme!

It also acts as a repository for themeScripts which are used within the themes to compile, update and upload stuff. You shouldn't run these scripts within this repository—they are just here for version control and storage.

## How it works

To build a new theme, simply navigate to a directory you wish your theme to be in via terminal and run the following command:

```
ntheme themeName
```

This will create a new directory, inside the current directory, called `themeName`. It will have everything you need set-up.

Note that you need [Node.js](https://nodejs.org/en/) installed, and [gulp.js](http://gulpjs.com/) installed globally to run this script successfully.

## How to build a theme

### Set up directories and clone the kit

To start, you need a **Themes** directory where you will keep this repository as well as the repositories for each of your themes. Your **Themes** directory will eventually look something like this:

```
Themes
├── Theme-Starter-Kit
├── Ardrossan-Theme
├── Cart-Brewery-Theme
├── Classic-Theme
├── Country-Theme
└── Sherwood-Theme
```

After you have created your new **Themes** directory, `cd` into the theme:

```
cd Themes
```

### Generate your theme

We are now ready to generate our first theme. To do this we simply need to run the ntheme command:

```
ntheme mynewtheme
```

**Note: You need to replace `mynewtheme` with the name of your new theme.**

### Set up git

Now, you just need to set up git. If you're not experienced with git, I recommend you install [GitHub Desktop](https://desktop.github.com/) and [set up the repository using the app](http://design.neto.com.au/assets/uploads/E9FX9Dej3d.gif).

### Customising templates

It's important to know that your themes repository should only contain the templates which are different to the templates on Skeletal. This is why your new theme only contains the header, footer and homepage by default:

```
mythemename
├── README.md
├── bin
│   └── compile
├── gulpfile.js
├── node_modules
├── package.json
└── src
    ├── css
    │   ├── app.css
    │   ├── app.less
    │   └── mythemename-style.css
    ├── js
    │   └── custom.js
    └── templates
        ├── cms
        │   └── home.template.html
        ├── footers
        │   └── template.html
        └── headers
            └── template.html
```

This means that if there are any templates that you wish to customise in your theme which are not included by default, you just need to copy them from the [latest version of Skeletal](https://github.com/NetoECommerce/Skeletal) into your theme.

## How to upload your customisations

To actually develop your theme, you need to install the latest version of Skeletal on your Neto website from the theme builder. From here, you need to upload the contents of your theme's `src` directory over the top of Skeletal's templates.

You will need to configure your FTP application to upload your files without removing any files that are on the server and not in your local directory. This way, your Neto website will be using all of the default Skeletal templates for any templates that are missing from your theme.

## How to compile your styles

Any custom styles which you add to your theme should be done in `src/css/app.less`. This file can be compiled into `app.css` by running the `gulp` command in your theme:

```
cd mythemename
gulp
```

This will prompt gulp to watch any changes you make to `src/css/app.less` and automatically compile them.
