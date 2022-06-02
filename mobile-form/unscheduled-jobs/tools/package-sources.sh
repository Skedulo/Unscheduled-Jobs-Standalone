#!/bin/bash

# Zipping source files in public so that we can run optimizations across it later
zip -r dist/viewSources.zip public/* -x \*.git\* -x \*node_modules\* -x \*.log\* -x \*.DS_Store\* -P skedcoins

# Target dist folder
targetFolder=./dist/

# Gzip all static files before uploads
for i in `find ${targetFolder} | egrep "(\.js|\.css|\.png|\.jpg|\.jpeg|\.map)$"`;
 do
   gzip "$i"
done
