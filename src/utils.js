// Get random number between intervals
export function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// 'home' => ['ho', 'me']
export function splitSyllables(word) {
    const vowels = 'aeiou';
    let syllables = [];
    let currentSyllable = '';
    
    for (let i = 0; i < word.length; i++) {
      currentSyllable += word[i];
      if (vowels.indexOf(word[i]) !== -1) {
        if (word[i] === 'i' && word[i + 1] === 'o') {
          currentSyllable += 'o';
          i++;
        }
        syllables.push(currentSyllable);
        currentSyllable = '';
      }
    }
    
    return syllables;
  }
  
  // 'home' => 2
  function countSyllables(word) {
    const vowels = 'aeiou';
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) !== -1) {
        count++;
        if (word[i] === 'i' && word[i + 1] === 'o') {
          count--;
          i++;
        }
      }
    }
    
    return count;
  }