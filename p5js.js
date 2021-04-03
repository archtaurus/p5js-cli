#!/usr/bin/env node
const path = require('path')
const fs = require('fs-extra')
const { version, description } = require('./package.json')
const { program } = require('commander')

program
    .command('new <sketch>')
    .description('Create a new p5.js sketch.')
    // .option('-d, --debug', 'Show debug infomation.', false)
    .action((sketch, options) => {
        const cwd = process.cwd()
        const dir = path.join(cwd, sketch)
        try {
            if (fs.existsSync(dir)) throw Error(`Error: directory "${sketch}" already exists!`)
            const template = path.join(__dirname, 'template')
            fs.copySync(template, dir)
        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    })

program
    .command('run')
    .description('Start live-server in current directory.')
    .action((options) => {
        const liveServer = require("live-server")
        const params = {
            port: 8080, // defaults to 8080.
            host: "0.0.0.0", // defaults 0.0.0.0 or process.env.IP.
            root: process.cwd(), // defaults to cwd.
            open: true, // when false, it won't load your browser by default.
            ignore: '', // comma-separated string for paths to ignore
            file: "index.html", // when set, serve this file (server root relative) for every 404 (useful for single-page applications)
            wait: 100, // Waits for all changes, before reloading. Defaults to 0 sec.
            mount: [], // Mount a directory to a route.
            logLevel: 1, // 0 = errors only, 1 = some, 2 = lots
            middleware: [function (req, res, next) { next() }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
        }
        liveServer.start(params)
    })

program
    .version(version)
    .description(description)
    .parse(process.argv)
