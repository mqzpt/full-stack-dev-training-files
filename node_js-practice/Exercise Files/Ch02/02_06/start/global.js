const waittime = 3000;

console.log(`Setting a ${waittime/1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  console.log(" Done!");
}
setTimeout(timerFinished, waittime);

const waitInterval = 100;
let current  = 0;

const incrementTime = () => {
  current += waitInterval;
  const p = Math.floor((current/waittime)*100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting.... ${p}%`);
};

const interval = setInterval(incrementTime, waitInterval);