import { getTimeValue } from "@skedulo/custom-form-controls/dist/helper";
import moment from "moment-timezone";

export const toHoursAndMinutes = (duration: number) => {
const hours = Math.floor(duration / 60);
const minutes = duration % 60;
const hStr = hours > 0 ? hours + `${hours > 1 ? "hrs" : "hr"}`: '';
const mStr = minutes > 0 ? minutes + `${minutes > 1? "mins" : "min"}` : ''
return hStr + " " + mStr;
}

export const formatDate = (date: string, timezone: string) => {
    const localTime = getTimeValue(date, timezone);
    const formatedDate = moment(localTime).format("ddd MMM Do, YYYY");
    const formatedTime = moment(localTime).format("hh:mm");
    const startMeridiem = moment(localTime).format("a");
    return formatedDate + " at " + formatedTime + startMeridiem;
}