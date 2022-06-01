const GitRevisionPlugin = require('git-revision-webpack-plugin');
const systemTimezone = require('system-timezone');
const computerName = require('computer-name');
const origin = require('remote-origin-url');
const moment = require('moment-timezone');
const username = require('username');
const publicIp = require('public-ip');

const fs = require('fs');
const dir = './public/build-info';
const latestPath = './public/build-info/latest.json';
const formDefinition = require('../definition.json');

// if (fs.existsSync(latestPath)) {
//   const latest = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
// console.log('latest \n', latest, '\n\n');
// }

const gitRevisionPlugin = new GitRevisionPlugin();
const timezone = moment.tz.guess();

String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

// TODO: send email

(async () => {
  const ip = await publicIp.v4();
  const user = await username();
  const remote = await origin();

  const BUILD_INFO = {
    __IP: ip,
    // __COMPUTER: computerName(),
    __USERNAME: user,
    __ORIGIN: remote,
    __VERSION: gitRevisionPlugin.version(),
    __COMMIT_HASH: gitRevisionPlugin.commithash(),
    __BRANCH: gitRevisionPlugin.branch(),
    __SYSTEM_TIMEZONE: systemTimezone(),
    __TIMEZONE: timezone,
    __BUILD_TIME: new Date().toISOString(),
    ['__FORM(S)']: formDefinition.forms.map(item => item.name).join(', ')
  };

  const date_time = moment().format('YYYY-MM-DD HH:mm');

  console.log('BUILD_INFO', JSON.stringify(BUILD_INFO, null, 2));

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(dir + '/latest.json', JSON.stringify(BUILD_INFO, null, 2));
  // fs.writeFileSync(dir + '/' + date_time + '.json', JSON.stringify(BUILD_INFO, null, 2));
})();


