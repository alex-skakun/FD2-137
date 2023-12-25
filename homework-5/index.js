function printWithDelay(InputArrOffWords, delayArr) {
    const words = InputArrOffWords.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i < delayArr.length) {
        const delay = delayArr[i] * 1000; 
        setTimeout(() => {
          console.log(word);
        }, delay);
      } else {
        const doublёDelay = delayArr[delayArr.length - 1] * 1000;
        setTimeout(() => {
          console.log(word);
        }, doublёDelay);
      }
    }
  }
