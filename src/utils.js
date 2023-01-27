// Get random number between intervals
export function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }