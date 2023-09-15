
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

// INITIALIZE VARIABLES
let currentTime = new Date();
let alarmTime = new Date();

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
    // initialize amPm with am or pm from dropdown id amPm
    // initialize alarmHour24 with alarmHour in military time
    // startif (alarmHour24 is set to PM and not 12 then add 12)
    // elseif (alarmHour24 is set to AM and 12 then make midnight equal 0)
    // initialize alarmTime with date object
    // pass alarmHour24 to alarmTime.setHours()
    // convert current time in seconds after midnight
    // convert alarm time to seconds after midnight
    
}



// call function
updateClock();

// call function to update clock every 1000 ms
setInterval(updateClock, 1000);

// trigger alarm alert
setTimeout(() => {
    alert(ITS MORBIN TIME);
    // set delay to timeRemainingInSeconds * 1000 milliseconds 
}