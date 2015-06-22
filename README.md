# Grunt Joli Markdown [![Built with Grunt][grunt-img]](http://gruntjs.com/)

[![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url]

> Markdown documentation generator based on [mixu/markdown-styles](https://github.com/mixu/markdown-styles)<br/>
> [Github Markdown Cheatsheeet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Install
```bash
npm install grunt-joli-markdown
```

## Usage
```js
grunt.config.init({
    joli_markdown:{
        options: {
            input: './docs',
            output: './public/docs'
        }
    }
};
```

## Toc
@see [markdown-styles](https://github.com/mixu/markdown-styles#metajson)

## Options

### Required

##### options.input
.md Files folder<br/>
**Type**: `String`


##### options.output
HTML Documentation output folder<br/>
**Type**: `String`

### Optionnal

##### options.layout
HTML Documentation skin<br/>
**Type**: `String`<br/>
**Default value**: `layout/markdown`<br/>
**Possible values**: @see [markdown-styles](https://github.com/mixu/markdown-styles#screenshots-of-the-layouts)

## Changelog
- v0.1.8
    - remove markdown-styles global install
    - install sixertoy/markdown-styles
    - add 'all' section in 'meta.jon' overrided by page's section

## Screenshot

![Screenshot](https://github.com/sixertoy/grunt-joli-markdown/raw/master/screenshot.jpg)



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
