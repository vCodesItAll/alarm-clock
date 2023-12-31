
// //
// // CREATE working alarm clock
// /* ----------------------------------------------------------------- */
// //
// //
// /* ----------------------------------------------------------------- */
// // DECLARE variables

//     // INITIALIZE currentTime as new Date()
//     let currentTime = new Date();

//     // INITIALIZE currentTime as new Date()
//     let currentTime = new Date();


//     // date OBJECT fetches time

//     // FUNCTION 
//         // EXECUTES when page loads

//         // DECLARE setInterval to pass seconds, 1000 ms = 1 second;

// /* ----------------------------------------------------------------- */
// // SET alarm

// // ALERT alarm 

// // CREATE new alarm

// // DISPLAY CURRENT TIME

//     // EXECUTES when window.onload event executes
    
//     // function onLoadFunction(event) {
//     //    console.log(event);
//     // }

// // DISPLAY ALARM STATUS
// // DISPLAY ALARM TIME

// // END

//  IGNORE ABOVE OLD PSEUDOCODE ---------------------------------------

// ------------------------------------------------------------------ //
//                                                                  //
//                         VARIABLE DICTIONARY                        //
//                                                                    //
// - currentTime - date object stores current time
// // - hours - number stores current hour in 12 hour format  
//     - minutes - number stores current minutes 
//     - seconds - number stores current seconds
 /* 
- amOrPm - string that stores am or pm for current time 
- alarmHour - number that stores user's chosen alarm hour
- alarmMinute - number that stores user's chosen alarm minutes
- amPm - number that stores user input of am or pm for alarm
- timeNowIn12HourFormat - number that stores current hour in 12 hour format
- alarmHour24 - number that stores alarm hour in 24 hour format
- timeNowInSeconds - number that stores current time in seconds
- alarmTimeInSeconds - number that stores the alarm time in seconds



// */
//                                                                    //
//                                                                    //
// ------------------------------------------------------------------ //
//
// ------------------------------------------------------------------ //
//                                                                    //
//                         FUNCTION DICTIONARY                          //
//                                                                    //
//  - updateClock() - updates current time every second on page load
/*
- setAlarm() - takes user input and outputs the JavaScript alert when alarm time is reached



*/
//                                                                    //
//                                                                    //
// ------------------------------------------------------------------ //




// START alarm clock program

// INITIALIZE variables
// let currentTime = new Date();
// let alarmTime = new Date();
// let timeRemainingInSeconds = 0;
// let currentTime = new Date();
// let alarmTime = new Date();
// let timeRemainingInSeconds = 0;

let alarmTimeInSeconds = 0;
let timeNowIn12HourFormat = 0;

// calculate timeRemainingInSeconds equal to alarmTimeInSeconds - timeNowIn12HourFormat;
// let alarmTimeInSeconds;
// let timeNowIn12HourFormat;
// timeRemainingInSeconds = alarmTimeInSeconds - timeNowIn12HourFormat;

// DECLARE updateClock()
function updateClock() {
    // INITIALIZE currentTIme
    const currentTime = new Date();
    // initialize hours and convert to 12 hour system with remainder operator, if remainder from division by 12 equals 0 then assign 12
    const hours = currentTime.getHours() % 12  || 12;
    // initialize minutes
    const minutes = currentTime.getMinutes();
    // initialize seconds
    const seconds = currentTime.getSeconds();
    // initialize amOrPm, if military current time is greater or equal to 12 then it is PM, else AM
    const amOrPm = currentTime.getHours() >= 12 ? "PM" : "AM";
    // show formatted currentTime data in div id clock
    document.getElementById("clock").innerHTML = `(Time: ${hours}:${minutes}:${seconds} ${amOrPm})`;
}

// declare setAlarm()
function setAlarm() {
    // initialize alarmHour and convert id alarmHour input to int
    const alarmHour = parseInt(document.getElementById("alarmHour").value);
    // initialize alarmMinute and convert id alarmMinute input to int
    const alarmMinute = parseInt(document.getElementById("alarmMinute").value);
    // initialize amPm with am or pm from dropdown id amPm
    const amPm = document.getElementById("amPm").value;
    // initialize alarmHour24 with alarmHour in military time
    let alarmHour24 = alarmHour;
    // startif (alarmHour24 is set to PM and not 12 then add 12)
    if (amPm === "PM" && alarmHour !== 12) {
        alarmHour24 += 12;
    // elseif (alarmHour24 is set to AM and 12)
    } else if (amPm === "AM" && alarmHour === 12) {
        //  initialize midnight equal 0 as alarmHour24 = 0
        alarmHour24 = 0;
    }

    // convert alarm time to seconds after midnight with military time
    alarmTimeInSeconds = (alarmHour24 * 3600) + (alarmMinute * 60);
   
    // initialize alarmTime with date object
    const alarmTime = new Date();
    // format alarmTime with alarmHour24 and alarmMinute
    alarmTime.setHours(alarmHour24, alarmMinute, 0, 0);
   
   
    // convert current time in seconds after midnight
    timeNowIn12HourFormat = (new Date().getHours() % 12 || 12) * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();
    // calculate timeRemainingInSeconds
    const timeRemainingInSeconds = alarmTimeInSeconds - timeNowIn12HourFormat;

    // trigger alarm alert
    setTimeout(() => {
        alert("ITS MORBIN TIME");
    // set delay to timeRemainingInSeconds * 1000 milliseconds 
    }, timeRemainingInSeconds * 1000);

}


// call function
updateClock();

// call function to update clock every 1000 ms
setInterval(updateClock, 1000);

