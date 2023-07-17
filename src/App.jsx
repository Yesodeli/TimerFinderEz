import React from "react";
import "./App.css";

function TimeAverageCalculator(timeInput) {
  let sumMinutes = 0;
  let counter = 0;
  let maxTime = "00:00";
  let minTime = "23:59";

  for (let i = 0; i < timeInput.length; i++) {
    let time = timeInput[i].split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);

    if (!isNaN(hours) && !isNaN(minutes)) {
      let totalMinutes = hours * 60 + minutes;
      sumMinutes += totalMinutes;
      counter++;

      // Check for maximum time
      if (timeInput[i] > maxTime) {
        maxTime = timeInput[i];
      }

      // Check for minimum time
      if (timeInput[i] < minTime) {
        minTime = timeInput[i];
      }
    }
  }

  let avgMinutes = sumMinutes / counter;
  let avgHours = Math.floor(avgMinutes / 60);
  let avgMins = avgMinutes % 60;

  let avgTime = `${padZeroes(avgHours)}:${padZeroes(avgMins)}`;
  return { avgTime, maxTime, minTime };
}

function padZeroes(num) {
  return num.toString().padStart(2, "0");
}

function App() {
  var times = ["11:45", "7:50", "00:25"];
  var { avgTime, maxTime, minTime } = TimeAverageCalculator(times);

  return (
    <main>
      <p>Times: {times.join(" // ")}</p>
      <p>Average Time: {avgTime}</p>
      <p>Max Time in Array: {maxTime}</p>
      <p>Min Time in Array: {minTime}</p>
    </main>
  );
}

export default App;
