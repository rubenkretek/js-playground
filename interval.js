let timerIntervals = [];
let isPageVisible = true;
let timers = {};

// Function to refresh ads
function refreshAds() {
  console.log("Ads refreshed");
  // Logic to refresh ads goes here
}

// Function to start the timer
function startTimer(adUnit, timerLength) {
  let timeRemaining;
  // console.log(timers[adUnit].remainingTime);
  
  if (timers[adUnit]?.remainingTime) {
    timeRemaining = timers[adUnit].remainingTime;
  } else {
    timeRemaining = timerLength;
  }

  timers[adUnit] = {
    intervalId: setInterval(() => {
      console.log(`${adUnit}⏱️: ${timeRemaining}`);

      if (isPageVisible) {
        if (timeRemaining <= 0) {
          refreshAds();
          timeRemaining = timerLength;
        } else {
          timeRemaining--;
        }
      }
      timers[adUnit].remainingTime = timeRemaining;
      console.log(timers[adUnit] );
    }, 1000), 
    remainingTime: timeRemaining
  };

}

// Handle page visibility change
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    isPageVisible = false;
    console.log("Moved away from page");
    // Clear all intervals
    for (const adUnit in timers) {
      clearInterval(timers[adUnit].intervalId);
    }
  } else {
    isPageVisible = true;
    console.log("Came back to page");
    startTimers(); // Resume the timer
  }
});

// Initial start of the timer
function startTimers() {
  startTimer("Rightcolumn", 30);
  startTimer("Stickybanner", 10);
}
startTimers();