# [gulp](http://gulpjs.com)atic — Static server with gulp

<p align="center">
  <img width="159" height="350" src="https://raw.githubusercontent.com/boriskaiser/gulpatic/master/src/images/gulp-logo/gulp-logo.png">
</p>

## :rocket: Getting started
```bash
$ git clone https://github.com/boriskaiser/gulpatic.git
$ cd gulpatic
$ gem install scss-lint
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

### Versions
- The **development** version has all the template, style, script and image files that make up your site in a clean format that you are happy to work on.
- A **production** version will take these files, minify them, concatenate / merge them and optimize files like images. 

## :gift_heart: Do you like gulpatic?
[Spread word on Twitter](https://twitter.com/intent/tweet?text=gulpatic%20—%20Static%20server%20with%20gulp&url=https%3A%2F%2Fgithub.com%2Fboriskaiser%2Fgulpatic&via=boriskaiser)

## :scream_cat: TODOs
- [x] [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) — Automatically load any gulp plugins in your package.json
- [x] [BrowserSync](https://github.com/BrowserSync/browser-sync) — Time-saving synchronised browser testing
- [x] [gulp-data](https://github.com/colynb/gulp-data) — Generate a data object from a JSON file
- [x] [gulp-twig](https://github.com/zimmen/gulp-twig) — Compile Twig templates
- [x] [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) — Minify HTML
- [x] [gulp-if](https://github.com/robrich/gulp-if) — Conditionally run a task
- [x] [gulp-plumber](https://github.com/floatdrop/gulp-plumber) — Fixing Node pipes
- [x] [gulp-notify](https://github.com/mikaelbr/gulp-notify) — Send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module
- [x] [gulp-debug](https://github.com/sindresorhus/gulp-debug) — Debug vinyl file streams to see what files are run through your gulp pipeline
- [x] [gulp-changed](https://github.com/sindresorhus/gulp-changed) — Only pass through changed files
- [x] [gulp-useref](https://github.com/jonkemp/gulp-useref) — Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets
- [x] [gulp-zip](https://github.com/sindresorhus/gulp-zip) — ZIP compress files
- [x] [gulp-scss-lint](https://github.com/juanfran/gulp-scss-lint) — Lint Sass files
- [x] [gulp-sass](https://github.com/dlmanning/gulp-sass) — Compile Sass to CSS
- [x] [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) — Prefix CSS with Autoprefixer
- [x] [gulp-csso](https://github.com/ben-eb/gulp-csso) — Minify CSS with CSSO
- [x] [gulp-uglify](https://github.com/terinjokes/gulp-uglify) — Minify files with UglifyJS
- [x] [gulp-jshint](https://github.com/spalger/gulp-jshint) — Validate files with JSHint
- [x] [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) — Minify PNG, JPEG, GIF and SVG images
- [x] [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith) — Convert a set of images into a spritesheet and CSS variables via gulp
- [x] [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) — SVG sprites & stacks galore
- [x] [gulp-rsync](https://github.com/jerrysu/gulp-rsync) — Rsync tasks for deploying gulp file structures
- [x] Integrate [Bower](https://github.com/bower/bower) — A package manager for the web
- [ ] Integrate [BackstopJS](https://github.com/garris/BackstopJS) — Catch CSS curve balls.
- [ ] Create [Yeoman](http://yeoman.io/) generator


## :raised_hands: Inspired by
- [blackList.json (Gulp)](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)
- [gulpfile.js (Google Web Starter Kit )](https://github.com/google/web-starter-kit/blob/master/gulpfile.js)
- [gulp-starter (Dan Tello)](https://github.com/greypants/gulp-starter)
- [Introduction to Gulp.js (Stefan Imhoff)](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)


## :beers: License
MIT © [Boris Kaiser](http://boriskaiser.com)
