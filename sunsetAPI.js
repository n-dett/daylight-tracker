// Coordinates for Lincoln
const latitude = 40.806862;
const longitude = -96.681679;
const timeZone = "america/chicago";


export async function getDaylightData(daylightType, date)
{
    // Coordinates for Lincoln
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&tzid=${timeZone}`;



    let truncTime;
    let daylightTime;

    try {
        const response = await fetch(url);
        const data = await response.json();
        daylightTime = data.results[daylightType];
        truncTime = removeSeconds(daylightTime);
    } catch (error) {
        console.error('Error:', error);
    }

    let times = {
        truncTime: truncTime,
        daylightTime: daylightTime
    };

    return times;
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