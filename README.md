# readme-styles [![Built with Grunt][grunt-img]](http://gruntjs.com/)

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url]

* Markdown documentation generator based on mixu/markdown-styles

## Install
```bash
npm install grunt-joli-markdown
```

## Usage
```json
grunt.config.init({
    joli_markdown:{
        options: {
            input: './docs',
            output: './public/docs'
        }
    }
};
```

[grunt-img]: https://cdn.gruntjs.com/builtwith.png
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/sixertoy/grunt-joli-markdown
[coverall-img]: https://img.shields.io/coveralls/sixertoy/grunt-joli-markdown.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/grunt-joli-markdown
[travis-img]: http://img.shields.io/travis/sixertoy/grunt-joli-markdown.svg?style=flat-square

[npm-url]: https://npmjs.org/package/grunt-joli-markdown
[npm-version-img]: http://img.shields.io/npm/v/grunt-joli-markdown.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/grunt-joli-markdown.svg?style=flat-square
