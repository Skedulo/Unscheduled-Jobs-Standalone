#!/bin/bash

rm -rf ./export/
mkdir ./export/

cp -r ./{public,tools,sdk,.editorconfig,.gitignore,jsconfig.json,yarn.lock,package.json,export-run.sh,.babelrc,jsVNextify.js} export/
mv ./export/export-run.sh ./export/run.sh

# Compile SDK and remove source files
rm -rf ./export/sdk/dist
cd ./export/sdk/
yarn install
yarn compile
cd ../../
rm -rf ./export/sdk/node_modules
rm -rf ./export/sdk/src

rm -rf ./export/public/node_modules


# Compile main.js through babel and then uglify it
# node_modules/.bin/babel export/tools/main.js | node_modules/.bin/uglifyjs --compress --screw-ie8 -m -r '$,require,exports' --output=export/tools/main.js

# Zip file
cp -R export/ skedulo-custom-form
zip -r skedulo-custom-form-sdk.zip export/
rm -rf export/

