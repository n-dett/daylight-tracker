
import {getTime} from './sunsetAPI.js';
// import { changeTheme } from './themeManager.js';


main();

async function main(){
    let zipCode;
    getUserZip(zipCode);
    let sunsetTime = await getTime('sunset', '#sunset-or-first-light');
    let lastLightTime = await getTime('civil_twilight_end', '#sunrise-or-last-light');
 //   let firstLightTime = getTime('civil_twilight_start', '#sunset-or-first-light');
 //   let sunriseTime = getTime('sunrise', '#sunrise-or-last-light');

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













// Object to hold sunset, last light, coordinates, time zone


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

