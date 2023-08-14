const path = require('path')
const exec = require('child_process').exec
const sketchName = require('uuid').v4()

describe('create new sketch', () => {
    test('create successfully.', async () => {
        const result = await cli(['new', sketchName], '.')
        expect(result.code).toBe(0)
    })
    test('failed when exists.', async () => {
        const result = await cli(['new', sketchName], '.')
        expect(result.code).toBe(1)
    })
})

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./p5js-cli')} ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => {
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout,
                    stderr
                })
            }
        )
    })
}
