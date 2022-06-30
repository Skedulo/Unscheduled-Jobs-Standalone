const fs = require('fs')
const path = require('path')
const devUtilities = require('@skedulo/sdk-dev-utilities')

const rawConfiguration = fs.readFileSync('./tools/config.json')
const configuration = JSON.parse(rawConfiguration)
const { source, generated, queries } = configuration

const generatedFilesPath = path.join(source, generated)
const queryInputPath = path.join(source, queries, '**/*.graphql')
const queryDeclarationOutputPath = path.join(source, generated, 'queries.d.ts')
const schemaDeclarationOutputPath = path.join(source, generated, 'graphql.d.ts')

if (!fs.existsSync(generatedFilesPath)) {
  fs.mkdirSync(generatedFilesPath, { recursive: true })
}

devUtilities.generateTypesForGraphQLSchema({
  authentication: {
    baseUrl: process.env.SKED_BASE_URL,
    apiToken: process.env.SKED_API_TOKEN
  },
  queryInputPath,
  queryDeclarationOutputPath,
  schemaDeclarationOutputPath
}).then(() => {
  // Rename source declaration files to standard declaration files.
  // This will ensure that tpyescript will pick them up and transpile them
  // alongside the rest of the project.
  const sourceGeneratePath = path.join(source, generated)
  const files = fs.readdirSync(sourceGeneratePath);

  files
    .filter(file => file.match('\.d\.ts$'))
    .forEach(file => {
      const filePath = path.join(sourceGeneratePath, file)
      const newFilePath = path.join(sourceGeneratePath, file.replace('.d.ts', '.ts'))

      fs.renameSync(filePath, newFilePath)
    })
})
