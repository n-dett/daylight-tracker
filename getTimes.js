import {getDaylightTime} from './sunsetAPI.js';

// let truncSunsetTime;
// let sunsetTime;
// let truncSunriseTime;
// let sunriseTime;
// let truncFirstLightTime;
// let firstLightTime;
// let truncLastLightTime;
// let lastLightTime;



export async function setDaylightTimes(){
    let sunsetObj = await getDaylightTime('sunset', '#sunset-or-first-light');
    let truncSunsetTime = sunsetObj.truncTime;
    let sunsetTime = sunsetObj.daylightTime;
    console.log('sunset: ', sunsetTime);
    console.log('truncSunset: ', truncSunsetTime);

    let lastLightObj = await getDaylightTime('civil_twilight_end', '#sunrise-or-last-light');
    let truncLastLightTime = lastLightObj.truncTime;
    let lastLightTime = lastLightObj.daylightTime;
    console.log('last light: ', lastLightTime);
    console.log('truncLast: ', truncLastLightTime);

    let firstLightObj = await getDaylightTime('civil_twilight_begin', '#sunset-or-first-light');
    let truncFirstLightTime = firstLightObj.truncTime;
    let firstLightTime = firstLightObj.daylightTime;
    console.log('first light: ', firstLightTime);
    console.log('truncFirst: ', truncFirstLightTime);

    let sunriseObj = await getDaylightTime('sunrise', '#sunrise-or-last-light');
    let truncSunriseTime = sunriseObj.truncTime;
    let sunriseTime = sunriseObj.daylightTime;
    console.log('sunrise: ', sunriseTime);
    console.log('truncSunrise: ', truncSunriseTime);

    return {
        sunsetTime: sunsetTime,
        sunriseTime: sunriseTime,
        firstLightTime: firstLightTime,
        lastLightTime: lastLightTime,

        truncSunsetTime: truncSunsetTime,
        truncSunriseTime: truncSunriseTime,
        truncFirstLightTime: truncFirstLightTime,
        truncLastLightTime: truncLastLightTime
    }
}




// Convert daylight times to 24hr, then to minutes, to calculate countdown time

export function get24HrTimes(truncLastLightTime, truncFirstLightTime){
    // Get current time
    let currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    currentTime = hoursToMinutes(currentTime);
    console.log('Current time in min:', currentTime);

    // Get last light time in 24hr 
    let lastLightTime24hr = stringTimeTo24Hr(truncLastLightTime);
    console.log('Last light in min:', lastLightTime24hr);

    // Get first light time in 24hr
    let firstLightTime24hr = stringTimeTo24Hr(truncFirstLightTime);
    console.log('First light in min:', firstLightTime24hr);

    return {
        currentTimeMins: currentTime,
        lastLightMins: lastLightTime24hr,
        firstLightMins: firstLightTime24hr
    }

}


function stringTimeTo24Hr(timeString){
    // If time is PM, add 12 hours
    if(timeString[timeString.length-2] == 'P'){
        let timeParts = timeString.split(':');
        let hour = parseInt(timeParts[0]);
        hour += 12;
        timeParts[0] = hour.toString();
        timeString = timeParts.join(':');
    }


    let newTime = timeString.substring(0, timeString.length - 3);
    newTime = hoursToMinutes(newTime);

    return newTime;
}


function hoursToMinutes(time){
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}










