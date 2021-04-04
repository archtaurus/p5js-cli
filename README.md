# The p5.js CLI

[![Build and Publish](https://github.com/archtaurus/p5js-cli/actions/workflows/publish.yml/badge.svg)](https://github.com/archtaurus/p5js-cli/actions/workflows/publish.yml)
[![npm](https://img.shields.io/npm/v/p5js)](https://www.npmjs.com/package/p5js)
[![GitHub](https://img.shields.io/github/license/archtaurus/p5js-cli)](https://github.com/archtaurus/p5js-cli/blob/master/LICENSE)
[![Dependencies Status](https://status.david-dm.org/gh/archtaurus/p5js-cli.svg)](https://www.npmjs.com/package/p5js?activeTab=dependencies)
[![Last Commit](https://img.shields.io/github/last-commit/archtaurus/p5js-cli)](https://github.com/archtaurus/p5js-cli)
[![Download Total](https://img.shields.io/npm/dt/p5js)](https://www.npmjs.com/package/p5js)

This [p5.js](https://p5js.org) CLI helps you to manage p5.js sketches quickly and easily:

- creating p5.js sketches in `~/Sketches` directory.
- open your sketch with VS code and start to code.
- serving them in your browser with hot reloading.

----

## 🐙 Install

``` shell
npm i -g p5js
```

💪 Upgrade this CLI to the latest version.

``` shell
npm update -g p5js
```

----

## 💡 Usage

✨ Create a new sketch, start coding and serving at once.

``` shell
p5js new <sketch> --run
```

🎉 Congratulations! Now you can edit the `sketch.js` file to show your creativity!

----

🔍 List all your sketches.

``` shell
p5js list
```

🐝 Open sketch with VS code.

``` shell
p5js code <sketch> [--run]
```

🐎 Serve an exsiting sketch.

``` shell
p5js run <sketch> [--code]
```

❤️ You are welcome to discover more.

``` shell
p5js [command] --help
```
