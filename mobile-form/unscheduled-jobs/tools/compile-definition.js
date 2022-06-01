
"use strict";

const fs = require('fs')
const path = require('path')

let packageVersion = 1

// Changes to how certain plugins work
// when Xamarin was added in
packageVersion = 2

/**
 * Changes to app structure and definition
 * There's no longer just one main.js file.
 * This release splits up the bundle into three parts. 
 * browser.js, node.js and native.js.
 * Each part is optimized for their namesake platform.
 * 
 * There's also a standalone back button callback that was added
 * called navGoBack which abstracts away the back button action
 * for different platforms
 *  
 **/ 

packageVersion = 3

/**
 * SDK now supports phoenix backend.
 * 2 versions of SDK now exist, one for Skedulo Classic, one for Skedulo Phoenix.
 * This release includes new testing features for custom forms that
 * can be used when testing forms locally.
 * These features include the ability to mimic Skedulo X offline compatability,
 * test with an instance of Condenser and test with extra debugging output.
 *
 * There's also support for handling the Android native back button within Skedulo X.
 *
 **/

packageVersion = 4


/**
 * Compile and deploy definition
 */
const definition = require(path.join(__dirname, '../public/definition.json'))

const meta = {
  sdkVersion: packageVersion,
  ...(definition.meta || {})
}

const updatedDefinition = Object.assign({}, definition, { meta })

fs.writeFileSync(path.join(__dirname, '../dist/definition.json'), JSON.stringify(updatedDefinition))
console.log('Definition Compiled!\n')
