
const kmMiMultiplier = 1.609;

export const kilometersToMiles = (kmDistance) => {
  return kmDistance / kmMiMultiplier;
}

export const milesToKilometers = (miDistance) => {
  return miDistance * kmMiMultiplier;
}

export const kilometersToMeters = (kmDistance) => {
  return kmDistance * 1000;
}

export const milesToMeters = (miDistance) => {
  return kilometersToMeters(milesToKilometers(miDistance));
}

export const metersToKilometers = (mDistance) => {
  return mDistance / 1000;
}

export const metersToMiles = (mDistance) => {
  return parseFloat(kilometersToMiles(metersToKilometers(mDistance)).toFixed(0));
}

export const timeToAMStyle = (time) => {
  if (time <= 1159) {
    if (time < 60) {
      return time < 10 ? `12:0${time}am` :`12:${time}am`
    } else if (time < 959) {
      return time.toString().substring(0, 1) + ":" + time.toString().substring(1) + "am";
    } else {
      return time.toString().substring(0, 2) + ":" + time.toString().substring(2) + "am";
    }
  } else {
    const pmTime = time - 1200;
    if (pmTime < 60) {
      return pmTime < 10 ? `12:0${pmTime}am` :`12:${pmTime}am`
    } else if (pmTime <= 959) {
      return pmTime.toString().substring(0, 1) + ":" + pmTime.toString().substring(1) + "pm";
    } else {
      return pmTime.toString().substring(0, 2) + ":" + pmTime.toString().substring(2) + "pm";
    }
  }
}