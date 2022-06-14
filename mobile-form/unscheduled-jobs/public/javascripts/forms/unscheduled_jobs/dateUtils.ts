import moment from "moment-timezone";

const formatTime = (time: string) => {
    return moment(time, ["h:mm A"]).format("HH:mm");
}

export const formatDate = (date: Date, time?: string) => {
    if(!time) {
         return moment(
            moment(date).format("YYYY-MM-DD ")
          ).toISOString();
    } 
    return moment(
        moment(date).format("YYYY-MM-DD ") + formatTime(time)
      ).toISOString();
}