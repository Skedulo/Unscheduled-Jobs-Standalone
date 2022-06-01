#!/bin/bash

if [[ $@ ]];
    then
    if [[ "$@" == "bootstrap" ]]
        then
        hash yarn || npm install -g yarn
        ./run.sh fetch-dependencies
        exit 0
    fi

    if [[ "$@" == "fetch-dependencies" ]]
        then
        yarn install --pure-lockfile
        cd public
        yarn install --pure-lockfile
        cd ../sdk
        yarn install
        exit 0
    fi

    if [[ "$@" == "dev-server" ]]
        then
        ./run.sh fetch-dependencies && __WEBPACK_LIVE__=true node tools/wd-server.js || exit $@
        exit 0
    fi

    if [[ "$@" == "compile" ]]
        then
        NODE_ENV=production ./node_modules/.bin/webpack --config tools/webpack.config.prod.js --progress --colors && node tools/compile-definition.js && tools/package-sources.sh || exit $@
        exit 0
    fi

    if [[ "$@" == "deploy" ]]
        then
        ./run.sh fetch-dependencies && ./run.sh compile && node sdk --command=deploy || exit $@
        exit 0
    fi

    if [[ "$@" == "deploy-only" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=deploy || exit $@
        exit 0
    fi

    if [[ "$@" == "remove-form" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=remove-form || exit $@
        exit 0
    fi

    if [[ "$@" == "remove-typelink" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=remove-typelink || exit $@
        exit 0
    fi

    if [[ "$@" == "add-typelink" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=add-typelink || exit $@
        exit 0
    fi

    if [[ "$@" == "status" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=status || exit $@
        exit 0
    fi

    if [[ "$@" == "export-fields" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=export-fields || exit $@
        exit 0
    fi

    if [[ "$@" == "import-fields" ]]
        then
        ./run.sh fetch-dependencies && node sdk --command=import-fields || exit $@
        exit 0
    fi
fi

printf "Please select from one of the following options.
 * bootstrap : Install package dependencies and compile SDK source.
 * build-sdk : Compile SDK source.
 * fetch-dependencies : Install package dependencies.
 * remove-form : Remove a deployed form from a Skedulo server.
 * remove-typelink : Remove a job type link to a deployed form.
 * add-typelink : Link a job type to a deployed form.
 * dev-server : Development build with live-reload and error reporting in the javascript console of the app.
 * compile : Production build, all assets are minified, compressed and prepared for deployment.
 * deploy : Compile and deploy compiled assets to a Skedulo server.
 * deploy-only : Deploy compiled assets to a Skedulo server.
 * status : View the custom form configuration for a Skedulo server.
 ";