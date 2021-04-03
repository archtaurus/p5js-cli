const path = require('path')
const exec = require('child_process').exec
const project_name = require('uuid').v4()

describe('create new project', () => {
    test('create successfully.', async () => {
        const result = await cli(['new', project_name], '/tmp')
        expect(result.code).toBe(0)
    })
    test('failed when directory already exists.', async () => {
        const result = await cli(['new', project_name], '/tmp')
        expect(result.code).toBe(1)
    })
})

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./p5js')} ${args.join(' ')}`,
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
