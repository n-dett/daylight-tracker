// Coordinates for Lincoln
const latitude = 40.806862;
const longitude = -96.681679;
const timeZone = "america/chicago";
const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&tzid=${timeZone}`;


export async function getTime(daylightType, idTag)
{
    let truncTime;

    try {
        const response = await fetch(url);
        const data = await response.json();
        let daylightTime = data.results[daylightType];
        truncTime = removeSeconds(daylightTime);
        document.querySelector(idTag).innerHTML = truncTime;
    } catch (error) {
        console.error('Error:', error);
    }

    return truncTime;
}



function removeSeconds(daylightTime)
{
    // Split the time value into parts
    let timeParts = daylightTime.split(' ');

    // Extract time without seconds
    let timeWithoutSeconds = timeParts[0].substring(0, timeParts[0].length - 3);

    // Reappend PM
    return timeWithoutSeconds + ' ' + timeParts[1]; 
}