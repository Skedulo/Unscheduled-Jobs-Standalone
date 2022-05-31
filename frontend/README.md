# README #

This README would be about steps and requirements that are necessary to setup development environment Achieve 3000 UI project.

### What is this repository for? ###

This repository holds source code and scripts for Achieve 3000 UI project, which includes:

* Source code for UI components (single pages applicaiton that will be shown as visual saleforce pages, lightning modal on standard pages)
* Shared scripts, utilities
* Building process that written on Grunt. Building process includes: build SCSS, concat, minify, uglify, ... css, html templates and javascript files, package distribution files to Mavenmate project.
* Vendor's libraries, which are packaged as sked_LIN_Vendor static resources

### What are needed for development environment? ###

* NodeJs (version 6.9.2 or higher)
* Npm (version 3.10.9 or higher)
* Ruby/Compass (See how to install Ruby/Compass below)
* Grunt Cli (version 1.2.0 or higher)

### How to install Ruby/Compass? ###

If you are planning on using Sass, you will need to first install Ruby and Compass:

* Install Ruby by downloading from [here](http://rubyinstaller.org/downloads/) or use Homebrew
* Install the compass gem:


```
#!
gem install compass
```

### How to install Grunt CLI? ###
Grunt CLI should be installed as a global node module:

```
#!
npm install -g grunt-cli
```

### How do I get set up? ###

* On project root folder, install node modules by running

```
#!
npm install
```

* Run development server

```
#!
grunt serve
```

Serving on http://localhost:9000


* Build project by running

```
#!
grunt build
```

All built files and folders are placed in /dist folder, you can copy all these to Mavenmate project, in static resource sked_ACH_Dist

You can identify the location of Mavenmate project on your local machine on Gruntfile.js, at appConfig variable, property rsb, for example:

```
#!
var appConfig = {
  src: 'src',
  sass: 'sass',
  img: 'img',
  dist: 'dist',
  vendor: 'vendor',
  images: 'images',

  rsb: '/Users/admin/Skedulo/salesforce-projects/ach-sf/resource-bundles/CX-JenkinsCI-Template_Dist.resource'
};
```

Then run:
```
#!
grunt deploy
```

to automatically copy dist/** to resource bundles folder.

### Who do I talk to? ###

* Ton Nguyen (tnguyen@skedulo.com)