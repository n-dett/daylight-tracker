
///// FOR TODAY'S DAYLIGHT

// let todayDate = today;
// let currentTime = currentTime


// // Coordinates for Lincoln
// const latitude = 40.806862
// const longitude = -96.681679
// const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     let lastLightTime = data.results.last_light;
//     let truncLastLightTime = removeSeconds(lastLightTime);
//     document.querySelector('#sunrise-or-last-light').innerHTML = truncLastLightTime;

//     let sunsetTime = data.results.sunset;
//     let truncSunsetTime = removeSeconds(sunsetTime);
//     document.querySelector('#sunset-or-first-light').innerHTML = truncSunsetTime;
//   })
//   .catch(error => console.error('Error:', error))



// Coordinates for Lincoln
const latitude = 40.806862;
const longitude = -96.681679;
const timeZone = "america/chicago";
const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&tzid=${timeZone}`;

// GET request
fetch(url)
  .then(response => response.json())
  .then(data => {
    let lastLightTime = data.results.civil_twilight_end;
    let truncLastLightTime = removeSeconds(lastLightTime);
    document.querySelector('#sunrise-or-last-light').innerHTML = truncLastLightTime;

    let sunsetTime = data.results.sunset;
    let truncSunsetTime = removeSeconds(sunsetTime);
    document.querySelector('#sunset-or-first-light').innerHTML = truncSunsetTime;
  })
  .catch(error => console.error('Error:', error))





function removeSeconds(daylightTime)
{
    // Split the time value into parts
    let timeParts = daylightTime.split(' ');

    // Extract time without seconds
    let timeWithoutSeconds = timeParts[0].substring(0, timeParts[0].length - 3);

    // Reappend PM
    return timeWithoutSeconds + ' ' + timeParts[1]; 
}













///// FOR NEXT DAYLIGHT ////

// let tomorrowDate = tomorrowDate
// let tomorrowTime = tomorrowTime












// Get user zip code

let userInput = document.getElementById("zip-input");

document.getElementById("enter-button").addEventListener("click", function(){
    userInput.value;
    console.log(userInput.value)
})

userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        document.getElementById("enter-button").click();
    }
})





// // Change colors at sunset and sunrise
// function changeColorTheme(){
//     // Check current time
//     const currentTime = new Date();

//     let daylightTimes = [
//         {time: "6:00:00 PM", cssClass: "sunset-theme"},
//         {time: "7:00:00 AM", cssClass: "sunset-theme"},
//     ]












// foreach loop to iterate over each time and compare to current time

//}
// Check time every minute
//setInterval(changeColorTheme, 60000);








//let endDaylightTime = "18:37:00";

