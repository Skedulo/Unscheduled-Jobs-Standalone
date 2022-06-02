# Custom Forms

* bootstrap : Install package dependencies and compile SDK source.
* dev-server : run http server.
* dev-servers : run https server.
* compile : Production build, all assets are minified, compressed and prepared for deployment.
* deploy : Deploy compiled assets to a Skedulo server.
* build-sdk : Compile SDK source.
* fetch-dependencies : Install package dependencies.
* remove-form : Remove a deployed form from a Skedulo server.
* remove-typelink : Remove a job type link to a deployed form.
* add-typelink : Link a job type to a deployed form.
* status : View the custom form configuration for a Skedulo server.
* compile-deploy : Compile code and create deploy package, put it in "deploy" folder

```bash
#!/bin/bash
yarn bootstrap
yarn dev-server
yarn dev-servers
yarn compile
yarn deploy
yarn build-sdk
yarn fetch-dependencies
yarn remove-form
yarn remove-typelink
yarn add-typelink
yarn status
yarn compile-deploy <package-name>

```

# Working with Page Layout and Permissions
* It need to run in `HTTPS`
* It need IdToken in the session to get it working, run this in phoenix `copy(JSON.parse(localStorage.auth).idToken)`
* And then run this method in the console of the form once open `SetIdToken(<token here>)`
* Add `https://localhost:9050` to salesforce CORS

# For windows 10
* Add zip into GIT Bash on Windows: https://ranxing.wordpress.com/2016/12/13/add-zip-into-git-bash-on-windows/
