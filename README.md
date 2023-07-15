"# timer-VanillaJS" 
"# timer-VanillaJS" 


Created HTML file with one header text one time text and 3 buttons. 
Each button has its own id. 

In the JS file, I have fetched the 3 buttons and the time text using the id. (document.getElementById('<id>'))
First, we create 5 different variables namely hour, minutes, seconds, count, and timer. 
for the initialization, we set hours, minutes, seconds, and counts to 0 whereas the timer is initialized not declared. 

As soon as the user clicks on the startButton we execute the stopwatch() function and the timer is set to true. 
Whereas the stopButton and resetButton will set the timer to false. 


main stopwatch() function code. 
function updateStopwatch() {
//   count++;

//   if (count === 100) {
//     count = 0;
//     seconds++;

//     if (seconds === 60) {
//       seconds = 0;
//       minute++;

//       if (minute === 60) {
//         minute = 0;
//         hour++;
//       }
//     }
//   }

//   hourCount.innerHTML = formatTime(hour);
//   minuteCount.innerHTML = formatTime(minute);
//   secondsCount.innerHTML = formatTime(seconds);
//   counts.innerHTML = count;

//   if (timer) {
//     setTimeout(updateStopwatch, 10); 
//   }
// }
