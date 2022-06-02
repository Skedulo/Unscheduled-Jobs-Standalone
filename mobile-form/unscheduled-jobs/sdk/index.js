// Process Name
process.title = "CustomForms-Deploy"

// Start custom form upload process
const sdk = require('./dist')
const argv = require('optimist').argv;

switch(argv.command) {
  case "deploy":
    sdk.uploadForm('./dist')
    break
  case "remove-form":
    sdk.removeForm()
    break
  case "remove-typelink":
    sdk.removeLink()
    break
  case "add-typelink":
    sdk.addLink()
    break
  case "status":
    sdk.status()
    break
  case "export-fields":
    sdk.exportFields()
    break
  case "import-fields":
    sdk.importFields()
    break
}

