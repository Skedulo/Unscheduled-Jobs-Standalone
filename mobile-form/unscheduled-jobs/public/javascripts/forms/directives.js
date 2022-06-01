export default function Directives(app) {

  /* eslint-disable */
  const dateTemplate = `
    <div class="date grid">

      <div class="col-12" ng:class="{'required' : ngRequired === 'true'}" aria-hidden="true">
        <div class="label">{{skedTitle}} <span ng-if="skedShowTimezone">({{tzString}})</span></div>
      </div>
      <div class="col-4">
        <label><span class="voiceReader">{{skedTitle}} Month</span>
          <select name = "month"
            ng:model = "setMonth"
            ng:change = "computeDate()"
            ng:options = "month for month in monthList"
            ng:required = "ngRequired"
            ng:disabled = "ngDisabled">
            <option value="" ng:disabled="setMonth">MM</option>
          </select>
        </label>
      </div>
      <div class="col-4">
        <label><span class="voiceReader">Day field</span>
        <select name = "day"
          ng:model = "setDay"
          ng:change = "computeDate()"
          ng:options = "day for day in dayList"
          ng:required = "ngRequired"
          ng:disabled = "ngDisabled">
          <option value="" ng:disabled="setDay">DD</option>
        </select>
      </label>
    </div>
    <div class="col-4">
      <label><span class="voiceReader">Year field</span>
        <select name = "year"
          ng:model = "setYear"
          ng:change = "computeDate()"
          ng:options = "year for year in yearList"
          ng:required = "ngRequired"
          ng:disabled = "ngDisabled">
          <option value="" ng:disabled="setYear">YYYY</option>
        </select>
      </label>
    </div>
  </div>`;


  app.directive('skedDateSelect', function () {
    const defaultFormat = 'YYYY-MM-DD';
    const defaultYearBackRange = 15;
    const defaultYearForwardRange = 15;

    return {
      restrict: 'E',
      template: dateTemplate,
      replace: true,
      require: '^ngModel',
      scope: {
        ngModel: '=',
        ngDisabled: '@',
        ngRequired: '@',
        skedFormat: '@',
        skedTitle: '@',
        skedYearBackRange: '@',
        skedYearForwardRange: '@',
      },
      link: function (scope, element, attr, modelController) {
        // Initialise internal vars
        const yearBackRange = attr.skedYearBackRange ? +attr.skedYearBackRange : defaultYearBackRange;
        const yearForwardRange = attr.skedYearForwardRange ? +attr.skedYearForwardRange : defaultYearForwardRange;
        const returnFormat = attr.skedFormat || defaultFormat;

        // Initialise scoped vars
        scope.dayList = _.range(1, 32);
        scope.monthList = _.range(1, 13);
        scope.yearList = _.range(moment().year() - yearBackRange, moment().year() + yearForwardRange + 1);

        // Set defaults
        const initialDate = moment(scope.ngModel, [returnFormat]);
        scope.setDay = initialDate.isValid() ? +initialDate.format('DD') : null;
        scope.setMonth = initialDate.isValid() ? +initialDate.format('MM') : null;
        scope.setYear = initialDate.isValid() ? +initialDate.format('YYYY') : null;

        scope.updateDayList = () => {
          const rawValue = scope.setYear + '-' + scope.setMonth + '-1';
          const parsedEntry = moment(rawValue, ['YYYY-MM-DD']);

          if (!parsedEntry.isValid()) {
            return;
          }

          var lastDay = parsedEntry.daysInMonth();

          scope.dayList = _.range(1, lastDay + 1);
          scope.setDay = +scope.setDay <= lastDay ? scope.setDay : lastDay;
        };

        scope.computeDate = () => {
          if (scope.setMonth) {
            scope.updateDayList();
          }

          const rawValue = scope.setYear + '-' + scope.setMonth + '-' + scope.setDay;
          const parsedEntry = moment(rawValue, ['YYYY-MM-DD']);

          if (parsedEntry.isValid()) {
            scope.ngModel = parsedEntry.format(returnFormat);
          }
        };

        if (scope.setMonth) {
          scope.updateDayList();
        }
      }
    };
  });

  const timeTemplate = `
    <div class="time grid">

        <div class="col-12" ng:class="{'required' : ngRequired === 'true'}" aria-hidden="true">
            <div class="label">{{skedTitle}} <span ng-if="skedShowTimezone">({{tzString}})</span></div>
        </div>

        <div class="col-4">
            <label><span class="voiceReader">{{skedTitle}} Hour</span>
                <select name = "hour"
                    ng:model = "setHour"
                    ng:change = "computeDate()"
                    ng:options = "hour for hour in hourList"
                    ng:required = "ngRequired"
                    ng:disabled = "ngDisabled">
                    <option value="" ng:disabled="setHour">HH</option>
                </select>
            </label>
        </div>
        <div class="col-4">
            <label><span class="voiceReader">Minutes field</span>
                <select name = "minute"
                    ng:model = "setMinute"
                    ng:change = "computeDate()"
                    ng:options = "minute for minute in minuteList"
                    ng:required = "ngRequired"
                    ng:disabled = "ngDisabled">
                    <option value="" ng:disabled="setMinute">MM</option>
                </select>
            </label>
        </div>

        <div class="col-4">
            <label><span class="voiceReader">Meridiem field</span>
                <select name = "meridiem"
                    ng:model = "setMeridiem"
                    ng:change = "computeDate()"
                    ng:required = "ngRequired"
                    ng:disabled = "ngDisabled">
                    <option value = "" ng:disabled="setMeridiem">AM/PM</option>
                    <option value = "AM">AM</option>
                    <option value = "PM">PM</option>
                </select>
            </label>
        </div>
    </div>
  `;


  app.directive('skedTimeSelect', function () {
    const defaultTimeFormat = 'HH:mm';
    const defaultResolution = 15;

    return {
      restrict: 'E',
      template: timeTemplate,
      replace: true,
      require: '^ngModel',
      scope: {
        ngModel: '=',
        ngDisabled: '@',
        ngRequired: '@',
        skedFormat: '@',
        skedTitle: '@',
        skedShowTimezone: '@',
        skedTimezone: '&',
        skedResolution: '@',
      },
      link: function (scope, element, attr, modelController) {
        // Initialise internal vars
        const resolution = attr.skedResolution ? +attr.skedResolution : defaultResolution;
        const returnFormat = attr.skedFormat || defaultTimeFormat;

        // Initialise scoped vars
        scope.hourList = _.range(1, 13);
        scope.minuteList = _.range(0, 60, resolution);

        // Set defaults
        const initialDate = moment(scope.ngModel, [returnFormat]);
        scope.setHour = initialDate.isValid() ? +initialDate.format('hh') : null;
        scope.setMinute = initialDate.isValid() ? +initialDate.format('mm') : null;
        scope.setMeridiem = initialDate.isValid() ? initialDate.format('A') : null;

        scope.computeDate = () => {
          const rawValue = scope.setHour + ':' + scope.setMinute + ' ' + scope.setMeridiem;
          const parsedEntry = moment(rawValue, ['hh:mm a']);

          if (parsedEntry.isValid()) {
            scope.ngModel = parsedEntry.format(returnFormat);
          }
        };
      }
    };
  });

  app.directive('numeric', function () {
    return {
      require: '?ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        if (!ngModelCtrl) {
          return;
        }

        const options = attrs.numeric === 'numeric' ? {} : eval('(' + attrs.numeric + ')');
        const { maxLength, decimal } = options;

        ngModelCtrl.$parsers.push(function (val) {

          let clean = val ? val.replace(/[^0-9\.]+/g, '') : '';
          const dot = clean.split('.');
          if (dot.length > 2) {
            dot[0] = dot[0] + '.' + dot[1];
            dot.splice(1, 1); // remove 2nd item
            clean = dot.join('');
          }

          if (decimal) {
            const parts = clean.split('.');
            clean = clean.substr(0, parts[0].length + (decimal + 1)); // number of decimal number and symbol .
          }

          if (maxLength) {
            let tempLength = maxLength;
            if (clean.indexOf('.') > -1) {
              tempLength += 1;
            }

            clean = clean.slice(0, tempLength);
          }

          if (val !== clean) {
            ngModelCtrl.$setViewValue(clean);
            ngModelCtrl.$render();
          }
          return clean;
        });

        element.bind('keyup', function (event) {
          if (event.keyCode === 32) {
            event.preventDefault();
          }
        });
      }
    };
  });

  const template = `
  <span class="skedDateTimeLocal">
    <input type="datetime-local" ng:model="dateTimeValue" ng:change="dateChanged()" ng:required="required" id="{{id}}" ng:disabled="ngDisabled"/>
    <span class="timezone" ng:if="showTimezone">{{ ngModel.format('z') }}</span>
  </span>
  `;

  app.directive("skedDateTimeLocal", function () {
    return {
      restrict: 'E',
      template: template,
      require: 'ngModel',
      replace: true,
      scope: {
        timezone: "=skedTimezone",
        ngModel: "=ngModel",
        ngDisabled: "=",
        //# can have multiple directives on the same page so allow id's to be different
        id: "@skedId",
        required: "=skedRequired"
      },

      link(scope, elm, attr, ngModelCtrl) {

        scope.showTimezone = attr.skedShowTimezone === 'true';
        scope.ngModelCtrl = ngModelCtrl;

        scope.$watch('ngModel', function (ngModel) {

          if ((typeof ngModel !== "undefined" && ngModel !== null)) {

            return scope.dateTimeValue = (scope.timezone != null) ? moment(ngModel).tz(scope.timezone).toDate() : moment(ngModel).toDate();
          } else {
            return scope.dateTimeValue = null;
          }
        });

        scope.dateChanged = () => {

          const dateTimeValue = scope.dateTimeValue;

          if (typeof dateTimeValue !== void 0 && dateTimeValue !== null) {
            return scope.ngModel = moment.tz(dateTimeValue, scope.timezone);
          }

        };
      }
    };
  });
  return app;
}
