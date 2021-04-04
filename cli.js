#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const { program } = require('commander')
const { version, description } = require('./package.json')

const startSketch = (sketchPath, options) => {
    try {
        if (!fs.existsSync(sketchPath)) throw Error(`Error: Path "${sketchPath}" does not exist!`)
        const liveServer = require("live-server")
        const params = {
            root: sketchPath || process.cwd(),    // defaults to cwd.
            open: true,                         // when false, it won't load your browser by default.
            logLevel: 1,                        // 0 = errors only, 1 = some, 2 = lots
            host: options.host || "0.0.0.0",    // host name to serve. defaults to 0.0.0.0.
            port: options.port || 8080,         // port number to serve. defaults to 8080.
            wait: options.wait || 100,          // milliseconds to wait for changes before reloading.
        }
        liveServer.start(params)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

program
    .command('new <sketch>')
    .description('Create a new p5.js sketch in current directory.')
    .option('-r, --run', 'Serve it right after being created.')
    .option('-h, --host <host>', 'host name to serve', '0.0.0.0')
    .option('-p, --port <port>', 'port number to serve', 8080)
    .option('-w, --wait <milliseconds>', 'milliseconds to wait for changes before reloading', 100)
    .action((sketch, options) => {
        const sketchPath = path.join(process.cwd(), sketch)
        try {
            if (fs.existsSync(sketchPath)) throw Error(`Error: directory "${sketch}" already exists!`)
            const templatePath = path.join(__dirname, 'template')
            fs.copySync(templatePath, sketchPath)
            console.info(`Sketch ${chalk.blueBright(sketch)} created successfully!`)
            if (options.run) startSketch(sketchPath, options)
            else console.info(`You may run ${chalk.greenBright(`p5js run ${sketch}`)} to serve it.`)
        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    })

program
    .command('run [sketch]')
    .description('Serve the sketch or the current directory in your browser.')
    .option('-h, --host <host>', 'host name to serve', '0.0.0.0')
    .option('-p, --port <port>', 'port number to serve', 8080)
    .option('-w, --wait <milliseconds>', 'milliseconds to wait for changes before reloading', 100)
    .action((sketch, options) => {
        const sketchPath = sketch ? path.join(process.cwd(), sketch) : process.cwd()
        startSketch(sketchPath, options)
    })

program
    .version(version)
    .description(description)
    .parse(process.argv)
