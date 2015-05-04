# [gulp](http://gulpjs.com)atic — Static server with gulp

<p align="center">
  <img width="159" height="350" src="https://raw.githubusercontent.com/boriskaiser/gulpatic/master/src/images/gulp-logo/gulp-logo.png">
</p>

## :rocket: Getting started
```bash
$ gem install scss-lint

$ npm install -g gulp
$ npm install -g bower
$ npm install -g phantomjs
$ npm install -g casperjs

$ git clone https://github.com/boriskaiser/gulpatic.git
$ cd gulpatic
$ npm install
$ bower install
$ gulp
```

## :clapper: Gulp tasks
- `$ gulp serve` or `$ gulp` — Build a development version and start a local server (incl. live reload)
- `$ gulp serve:dist` — Build a production version and start a local server (incl. live reload)
- `$ gulp build` — Build a production version
- `$ gulp deploy` — Build and deploy production version to server (via rsync)
- `$ gulp compress` — Compress a production version to a .zip file
- `$ gulp test` — Generate test bitmaps and compare then against the current reference bitmaps
- `$ gulp test:reference` — Generate (or update) reference bitmaps

### Versions
- The **development** version has all the template, style, script and image files that make up your site in a clean format that you are happy to work on.
- A **production** version will take these files, minify them, concatenate / merge them and optimize files like images. 

## :gift_heart: Do you like gulpatic?
[Spread word on Twitter](https://twitter.com/intent/tweet?text=gulpatic%20—%20Static%20server%20with%20gulp&url=https%3A%2F%2Fgithub.com%2Fboriskaiser%2Fgulpatic&via=boriskaiser)

## :scream_cat: TODOs
- [x] Integrate [BackstopJS](https://github.com/garris/BackstopJS) which automates CSS regression testing
- [ ] Create [Yeoman](http://yeoman.io/) generator


## :raised_hands: Inspired by
- [blackList.json (Gulp)](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)
- [gulpfile.js (Google Web Starter Kit )](https://github.com/google/web-starter-kit/blob/master/gulpfile.js)
- [gulp-starter (Dan Tello)](https://github.com/greypants/gulp-starter)
- [Introduction to Gulp.js (Stefan Imhoff)](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)


## :beers: License
MIT © [Boris Kaiser](http://boriskaiser.com)
