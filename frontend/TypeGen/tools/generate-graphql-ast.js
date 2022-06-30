const fs = require('fs')
const path = require('path')
const devUtilities = require('@skedulo/sdk-dev-utilities')

const rawConfiguration = fs.readFileSync('./tools/config.json')
const configuration = JSON.parse(rawConfiguration)
const { source, build, queries } = configuration

const querySrcDirectory = path.join(source, queries)
const queryBuildDirectory = path.join(build, queries)

devUtilities.generateASTForQueries(querySrcDirectory, queryBuildDirectory)
