function printPosition(pos) {
    console.log(pos);
}

function printError(error) {
    console.log(`Error: ${error}`);
}

options = {};

target = {
    latitude: 41.387564,
    longitude: -73.5029395
}

function watchPosition(pos) {
    const coords = pos.coords;

    if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('You have reached your destination!');
    } else {
        console.log('Destination still not reached!');
    }
}

function watchError(error) {
    console.log(`Error: ${error.code} - ${error.message}`);
}

watchOptions = {
    enableHighAccuracy: true, // use gps if available
    timeout: 3000, // time to wait to stop trying for location
    maximumAge: 0 // don't use cached position
}

navigator.geolocation.getCurrentPosition(printPosition, printError, options);
navigator.geolocation.watchPosition(watchPosition, watchError, watchOptions);
