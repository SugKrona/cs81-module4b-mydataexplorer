// Gustavo Corona
// myDataJournal.js made July 6, 2025

// *V* Url for GitHub *V
// https://github.com/SugKrona/cs81-module4b-mydataexplorer

// === Predictions === 
// I think the most screen time will either be on my only day off both my jobs which is sunday but it might be saturday since I dont have to sleep in early. 
// - Most of my screentime consists of reading ebooks, podcasts and not much social media. So I do believe I will have alot of screentime throughoutthe week
// My best focus day might be between Monday or thursday 
// I dont keep track of my caffeine intake, I usally refil my 40 oz tumbler at work with Coke zero but its mostly just ice so after a few sips I need a refill, 
// - but for this assingment purpose ill say each refill is a cup. At home at most ill have a green tea or a 20oz coke zero

// === Weekly Data Journal === (Using my phone data to fill)
const weekData = [
  { day: "Monday", sleepHours: 5, screenTime: 4, mood: "tired", caffeineIntake: 6, focusLevel: 9 },
  { day: "Tuesday", sleepHours: 7, screenTime: 4, mood: "focused", caffeineIntake: 3, focusLevel: 5 },
  { day: "Wednesday", sleepHours: 6, screenTime: 6, mood: "calm", caffeineIntake: 4, focusLevel: 6 },
  { day: "Thursday", sleepHours: 6, screenTime: 5, mood: "tired", caffeineIntake: 4, focusLevel: 5 },
  { day: "Friday", sleepHours: 5, screenTime: 6, mood: "lazy", caffeineIntake: 5, focusLevel: 5 },
  { day: "Saturday", sleepHours: 5.5, screenTime: 7, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Sunday", sleepHours: 7, screenTime: 6, mood: "relaxed", caffeineIntake: 0, focusLevel: 9 }
];

// === Analysis Functions ===

// Full Week Data Display
console.log("=== Full Weekly Data ===");
weekData.forEach(entry => {
  console.log(`${entry.day}: Sleep = ${entry.sleepHours}h, Screen = ${entry.screenTime}h, Mood = ${entry.mood}, Caffeine = ${entry.caffeineIntake}, Focus = ${entry.focusLevel}`);
});
console.log(""); // adds a blank line for cleaner output
// Which day had the most screen time?
function mostScreenTime(data) {
  let maxDay = data[0];
  for (let entry of data) {
    if (entry.screenTime > maxDay.screenTime) {
      maxDay = entry;
    }
  }
  return maxDay.day;
}
// What’s the average focus level?
function averageFocus(data) {
  let total = 0;
  for (let entry of data) {
    total += entry.focusLevel;
  }
  return (total / data.length).toFixed(2);
}
// What the average sleep hours for the week? 
function averageSleep(data) {
  const total = data.reduce((sum, entry) => sum + entry.sleepHours, 0);
  return (total / data.length).toFixed(2);
}
// Which day had the least sleep?
function leastSleepDay(data) {
  let minDay = data[0];
  for (let entry of data) {
    if (entry.sleepHours < minDay.sleepHours) {
      minDay = entry;
    }
  }
  return minDay.day;
}
// Does more caffeine = better focus?
function caffeineVsFocus(data) {
  for (let entry of data) {
    console.log(`${entry.day}: Caffeine = ${entry.caffeineIntake}, Focus = ${entry.focusLevel}`);
  }
}
// Tests and Displays all the Functions
console.log("Most screen time:", mostScreenTime(weekData));
console.log("Average focus level:", averageFocus(weekData));
console.log("Average sleep hours:", averageSleep(weekData));
console.log("Least sleep day:", leastSleepDay(weekData));
console.log("Caffeine vs Focus:");
caffeineVsFocus(weekData);
