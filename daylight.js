
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
        e.preventDefault();
        document.getElementById("enter-button").click();
    }
})








//let endDaylightTime = "18:37:00";

