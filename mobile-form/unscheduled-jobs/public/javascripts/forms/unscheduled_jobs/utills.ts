import moment from "moment-timezone";

export const toHoursAndMinutes = (duration: number) => {
const hours = Math.floor(duration / 60);
const minutes = duration % 60;
const hStr = hours > 0 ? hours + `${hours > 1 ? "hrs" : "hr"}`: '';
const mStr = minutes > 0 ? minutes + `${minutes > 1? "mins" : "min"}` : ''
return hStr + " " + mStr;
}

export const formatDate = (date: string) => {
    return moment(date).format("hh:mma do MMMM");
}