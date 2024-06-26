import {getDaylightData} from './sunsetAPI.js';

const todayDate = getDate();
const tmwDate = getTmwDate();

export async function setDaylightTimes(){
    // Today's times
    let sunsetObj = await getDaylightData('sunset', todayDate);
    let truncSunsetTime = sunsetObj.truncTime;
    let sunsetTime = sunsetObj.daylightTime;
    console.log('sunset: ', sunsetTime);
    console.log('truncSunset: ', truncSunsetTime);

    let lastLightObj = await getDaylightData('civil_twilight_end', todayDate);
    let truncLastLightTime = lastLightObj.truncTime;
    let lastLightTime = lastLightObj.daylightTime;
    console.log('last light: ', lastLightTime);
    console.log('truncLast: ', truncLastLightTime);

    let firstLightObj = await getDaylightData('civil_twilight_begin', todayDate);
    let truncFirstLightTime = firstLightObj.truncTime;
    let firstLightTime = firstLightObj.daylightTime;
    console.log('first light: ', firstLightTime);
    console.log('truncFirst: ', truncFirstLightTime);

    let sunriseObj = await getDaylightData('sunrise', todayDate);
    let truncSunriseTime = sunriseObj.truncTime;
    let sunriseTime = sunriseObj.daylightTime;
    console.log('sunrise: ', sunriseTime);
    console.log('truncSunrise: ', truncSunriseTime);

    // Tomorrow's Times
    let tmwSunriseObj = await getDaylightData('sunrise', tmwDate);
    let truncTmwSunriseTime = sunriseObj.truncTime;
    let tmwSunriseTime = sunriseObj.daylightTime;
    console.log('tmw sunrise: ', sunriseTime);
    console.log('truncSunrise: ', truncSunriseTime);

    let tmwFirstLightObj = await getDaylightData('civil_twilight_begin', tmwDate);
    let truncTmwFirstLightTime = sunriseObj.truncTime;
    let tmwFirstLightTime = sunriseObj.daylightTime;
    console.log('tmw first light: ', sunriseTime);
    console.log('truncSunrise: ', truncSunriseTime);

    return {
        sunsetTime: sunsetTime,
        sunriseTime: sunriseTime,
        firstLightTime: firstLightTime,
        lastLightTime: lastLightTime,

        truncSunsetTime: truncSunsetTime,
        truncSunriseTime: truncSunriseTime,
        truncFirstLightTime: truncFirstLightTime,
        truncLastLightTime: truncLastLightTime,

        tmwSunriseTime: tmwSunriseTime,
        truncTmwSunriseTime: truncTmwSunriseTime,
        tmwFirstLightTime: tmwFirstLightTime,
        truncTmwFirstLightTime: truncTmwFirstLightTime
    }
}




// Convert daylight times to 24hr, then to minutes, to calculate countdown time

export function getTimesInMins(truncLastLightTime, truncFirstLightTime){
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


// Get date in YYYY-MM-DD format
function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate); 

    return formattedDate;
}


// ***** Need to verify that tomorrow's times are correct *****
function getTmwDate(){
    const date = new Date();
    date.setDate(date.getDate() + 1); // Update the date to tomorrow
    const tmwDate = new Date(date); // Create a new Date object using the updated date

    const year = tmwDate.getFullYear();
    const month = String(tmwDate.getMonth() + 1).padStart(2, '0');
    const day = String(tmwDate.getDate()).padStart(2, '0');

    const formattedTmwDate = `${year}-${month}-${day}`;
    console.log(formattedTmwDate); 

    return formattedTmwDate;
}











