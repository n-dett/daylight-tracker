
///// FOR TODAY'S DAYLIGHT

// let todayDate = today;
// let currentTime = currentTime


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





// Change colors at sunset and sunrise
function changeColorTheme(){
    // Check current time
    const currentTime = new Date();

    let daylightTimes = [
        {time: "6:00:00 PM", cssClass: "sunsetColors"},
        {time: "7:00:00 PM", cssClass: "lastLightColors"},
        {time: "6:00:00 AM", cssClass: "firstLightColors"},
        {time: "7:00:00 AM", cssClass: "sunriseColors"},
    ]

    // Set sunset time
    let sunsetTimeString = "6:00:00 PM";
    let sunsetTimeArray = sunsetTimeString.split(/[:\s]/);
    let sunsetHour = sunsetTimeArray[0];
    let sunsetMinutes = sunsetTimeArray[1];


// foreach loop to iterate over each time and compare to current time

}
// Check time every minute
//setInterval(changeColorTheme, 60000);








//let endDaylightTime = "18:37:00";

