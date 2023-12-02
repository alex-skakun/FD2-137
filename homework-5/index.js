function printWithDelay(str, arrNum) {
  function printConsole(strPrint, arrNumPrint) {
    console.log(strPrint + ',' + arrNumPrint);
  }

  let timeInterval = arrNum;
  let arrStr = str.split(' ');

  for (; arrStr.length > timeInterval.length || arrStr.length < timeInterval.length; ) {
    if (arrStr.length < timeInterval.length) {
      timeInterval = timeInterval.splice(0, arrStr.length);
    } else if (arrStr.length > timeInterval.length) {
      timeInterval.push(arrNum[arrNum.length - 1]);
    } else {
      timeInterval = arrNum;
    }
  }

  timeInterval.forEach((i, a) => {
    setTimeout(printConsole, i * 1000, arrStr[a], i * 1000);
  });
}
printWithDelay('Мама мыла раму', [2, 4, 6]);
