
import {getTime} from './sunsetAPI.js';
// import { changeTheme } from './themeManager.js';


main();

async function main(){
    console.log(stringTimeTo24Hr("4:05 PM"))
    let zipCode;
    getUserZip(zipCode);
    
    let sunsetObj = await getTime('sunset', '#sunset-or-first-light');
    let truncSunsetTime = sunsetObj.truncTime;
    let sunsetTime = sunsetObj.daylightTime;
    console.log('sunset: ', sunsetTime);
    console.log('truncSunset: ', truncSunsetTime);

    let lastLightObj = await getTime('civil_twilight_end', '#sunrise-or-last-light');
    let truncLastLightTime = lastLightObj.truncTime;
    let lastLightTime = lastLightObj.daylightTime;
    console.log('last light: ', lastLightTime);
    console.log('truncLast: ', truncLastLightTime);

    let firstLightObj = await getTime('civil_twilight_begin', '#sunset-or-first-light');
    let truncFirstLightTime = firstLightObj.truncTime;
    let firstLightTime = firstLightObj.daylightTime;
    console.log('first light: ', firstLightTime);
    console.log('truncFirst: ', truncFirstLightTime);

    let sunriseObj = await getTime('sunrise', '#sunrise-or-last-light');
    let truncSunriseTime = sunriseObj.truncTime;
    let sunriseTime = sunriseObj.daylightTime;
    console.log('sunrise: ', sunriseTime);
    console.log('truncSunrise: ', truncSunriseTime);

  

    getDisplayTimes(truncSunsetTime, truncLastLightTime, truncFirstLightTime,
        truncSunriseTime, lastLightTime, firstLightTime);

}




function getUserZip(zipCode) {
    let userInput = document.getElementById("zip-input");

    document.getElementById("enter-button").addEventListener("click", function(){
        zipCode = userInput.value;
        console.log(zipCode);
    })
    
    userInput.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            document.getElementById("enter-button").click();
        }
    })
}


function getDisplayTimes(truncSunsetTime, truncLastLightTime, truncFirstLightTime,
    truncSunriseTime, lastLightTime, firstLightTime){
    // Get current time
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    console.log('Current:', currentTime);

    // Get last light time in 24hr 
    let lastLightTime24hr = stringTimeTo24Hr(truncLastLightTime);
    console.log('Last:', lastLightTime24hr);

    // Get first light time in 24hr
    let firstLightTime24hr = stringTimeTo24Hr(truncFirstLightTime);
    console.log('First:', firstLightTime24hr);

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

    // Need to add a zero in front of hour

    const newTime = timeString.substring(0, timeString.length - 3);
    return newTime;
}









// Object to hold sunset, last light, coordinates, time zone















// foreach loop to iterate over each time and compare to current time

//}
// Check time every minute
//setInterval(changeColorTheme, 60000);








//let endDaylightTime = "18:37:00";

