printWithDelay('Мама мыла раму', [2, 6, 7]);

function printWithDelay(str = 'Мама очень долго мыла раму', timers = [2, 6, 7, 1, 10, 3]) {
   const arrStr = str.split(' ');   
   const arrTimers = getNormalizeTimer(arrStr, timers);

     arrStr.forEach((el, index) => {
      setTimeout(() => {
         console.log(el);
      }, arrTimers[index] * 1000);
   });


}

function getNormalizeTimer(arrStr, timers) {
   const lenStr = arrStr.length;
   const lenTimers = timers.length;

  // console.log(timers);
   if (lenStr > lenTimers) {
      for (let i = lenTimers; i < lenStr; i++) {
         timers.push(timers[lenTimers - 1]);
      }
   }

   timers.forEach((el, index, arr) => arr[index] += arr[index - 1] ?? 0);
 //  console.log(timers);

   return timers;
}