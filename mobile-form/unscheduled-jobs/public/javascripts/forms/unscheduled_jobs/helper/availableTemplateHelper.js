import * as moment from 'moment-timezone';

export function buildAvailableTemplate(availabilityTemplates) {
    const availableDays = {
        "MON": [],
        "TUE": [],
        "WED": [],
        "THU": [],
        "FRI": [],
        "SAT": [],
        "SUN": [],
    };

    availabilityTemplates.forEach(template => {
        template.AvailabilityTemplateEntries.forEach(entry => {
            if (!template.Finish || moment(template.Finish).isAfter(moment(new Date()))) {
                availableDays[`${entry.Weekday}`].push({
                    Start: template.Start,
                    Finish: template.Finish,
                    StartTime: entry.StartTime,
                    FinishTime: entry.FinishTime
                })
            }
        })
    });

    return availableDays;
}
