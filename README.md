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
            output: './public/docs',
            layout: 'joli-markdown-light'
        }
    }
};
```

### meta.json
```json
{
    "index": {
        "base": "index.html",
        "title": "Grunt Joli Markdown",
        "sections": [
            {"url": "index.html#install","body": "Install"},
            {"url": "index.html#usage","body": "Usage"},
            {"url": "index.html#toc","body": "TOC"},
            {"url": "index.html#options","body": "Options"},
            {"url": "index.html#screenshot","body": "Screenshot"}
        ],
        "repoUrl": "https://gihub.com",
        "menu": [
            {"url": "pages/hello_world.html","body": "Hello World"}
        ]
    },
    "all": {
        "base": "../index.html",
        "title": "Grunt Joli Markdown",
        "repoUrl": "https://gihub.com",
        "menu": [
            {"url": "pages/hello_world.html","body": "Hello World"},
            {"url": "pages/introduction.html","body": "Intoduction"}
        ]
    }
}
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
**Default value**: `joli-markdown`<br/>
**Possible values**:
- `joli-markdown`
- `joli-markdown-light`
- @see [markdown-styles](https://github.com/mixu/markdown-styles#screenshots-of-the-layouts)

## Changelog
- v0.1.12
    - options.input & options.ouput are relative to grunt task
- v0.1.8
    - remove markdown-styles global install
    - install sixertoy/markdown-styles
    - add 'all' section in 'meta.jon' overrided by page's section

## Screenshot

### joli-markdown
![joli-markdown](https://github.com/sixertoy/grunt-joli-markdown/raw/master/joli-markdown.jpg)

### joli-markdown-light
![joli-markdown-light](https://github.com/sixertoy/grunt-joli-markdown/raw/master/joli-markdown-light.jpg)



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
