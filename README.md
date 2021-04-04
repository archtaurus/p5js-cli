[![](https://p5js.org/assets/img/p5js.svg)](https://p5js.org)

# A p5.js CLI

[![Build and Publish](https://github.com/archtaurus/p5js-cli/actions/workflows/publish.yml/badge.svg)](https://github.com/archtaurus/p5js-cli/actions/workflows/publish.yml)
[![npm](https://img.shields.io/npm/v/p5js)](https://www.npmjs.com/package/p5js)
[![GitHub](https://img.shields.io/github/license/archtaurus/p5js-cli)](https://github.com/archtaurus/p5js-cli/blob/master/LICENSE)
[![Dependencies Status](https://status.david-dm.org/gh/archtaurus/p5js-cli.svg)](https://www.npmjs.com/package/p5js?activeTab=dependencies)
[![Last Commit](https://img.shields.io/github/last-commit/archtaurus/p5js-cli)](https://github.com/archtaurus/p5js-cli)
[![Download Total](https://img.shields.io/npm/dt/p5js)](https://www.npmjs.com/package/p5js)

Whenever you got an idea, this p5.js CLI will help you creating a new p5.js sketch and serving it in your browser quickly and easily.

## Install

``` shell
npm i -g p5js
```

## Usage

Create a new sketch in current directory

``` shell
p5js new <sketch>
```

or your want to serve it right now

``` shell
p5js new <sketch> --run
```

Serve an exsiting sketch in current directory

``` shell
cd <sketch>
p5js run
```

or just run it from outside

``` shell
p5js run <sketch>
```
