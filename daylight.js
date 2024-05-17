
// import {getDaylightTime} from './sunsetAPI.js';
import {setDaylightTimes, get24HrTimes} from './getTimes.js';



main();

async function main(){
    let zipCode;
    getUserZip(zipCode);

    let daylightTimes = setDaylightTimes();
    get24HrTimes((await daylightTimes).truncLastLightTime, (await daylightTimes).truncFirstLightTime);
    
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















// foreach loop to iterate over each time and compare to current time

//}
// Check time every minute
//setInterval(changeColorTheme, 60000);








//let endDaylightTime = "18:37:00";

