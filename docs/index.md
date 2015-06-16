links:
  - url: "/hello"
    body: "Hello"
  - url: "/world"
    body: "World!"
---
# sosocket
[![Built with Grunt][grunt-img]](http://gruntjs.com/) [![MIT License][license-img]][license-url]
 
> Live Stream


## INSTALL

```bash
npm install -g grunt-cli istanbul jasmine-node coveralls markdown-styles
npm install
```

## USAGE

## GRUNT

### Plugins

- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-bump](https://github.com/vojtajina/grunt-bump)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-markdown](https://github.com/treasonx/grunt-markdown)
- [grunt-jsbeautifier](https://github.com/vkadam/grunt-jsbeautifier)

### Watch

##### Documentation
```bash
grunt watch:markdown
```
> - files: ['./docs/src/**/*.md']
> - tasks: ['markdown']

##### Compilation Modules CommonJS
```bash
grunt watch:compile
```
> - files: ['./src/**/*.js']
> - tasks: ['wrap:commonjs', 'jsbeautifier', 'jshint']

##### Tests Unitaires
```bash
grunt watch:jasmine
```
> - files: ['./tests/specs/**/*.spec.js', 'app/**/*.js']
> - tasks: ['jasmine_node']

### Tasks

##### Tests Unitaires
```bash
grunt tests
```
> - jasmine_node

##### Compilation des modules CommonJS
```bash
grunt build
```
> - wrap
> - jsbeautifier

##### Tests Unitaires et Compilation des modules CommonJS
```bash
grunt compile
```
> - build
> - jshint
> - tests


##### Grunt (Default)
```bash
grunt
```
> - compile
> - watch

## CONTRIBUTING

### Markdown
- Grunt Tasks
```bash
grunt watch:documentation
grunt markdown
```
- [Documentation](https://guides.github.com/features/mastering-markdown/)

### Git Flow

#### Install

- [Manual](https://gist.github.com/sixertoy/ec40f5e0f726b25c8ec2)
- [Linux](https://github.com/nvie/gitflow/wiki/Linux)
- [Windows](https://github.com/nvie/gitflow/wiki/Windows)
- [Chocolatey (Windows)](https://chocolatey.org/packages/git-flow-dependencies)

#### Documentation

- [Using git-flow to automate your git branching workflow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)
- [Tutorials](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Getting Started – Git-Flow](http://yakiloo.com/getting-started-git-flow/)
- [Quel git workflow pour mon projet ?](http://nicoespeon.com/fr/2013/08/quel-git-workflow-pour-mon-projet/)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)

## ISSUES

[grunt-img]: https://cdn.gruntjs.com/builtwith.png
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/sixertoy/sosocket
[coverall-img]: https://img.shields.io/coveralls/sixertoy/sosocket.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/sosocket
[travis-img]: http://img.shields.io/travis/sixertoy/sosocket.svg?style=flat-square

