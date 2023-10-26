function printWithDelay(str, delay) {

    const outputStr = str.split(' ');
    const delaySecond = delay.map((elem) => elem * 1000);

    if (outputStr.length > delaySecond.length) {
        lastElement = [];
        for (i = delaySecond.length-1; i < outputStr.length; i++){
           lastElement.push(outputStr[i])
        }
        
        outputStr.splice(delaySecond.length-1, outputStr.length - (delay.length-1), lastElement.join(' '))
        
    }

  PrintInConsole(outputStr, delaySecond)

}
 


printWithDelay('Мама мыла раму очень рано утром', [2, 6, 7]);

function PrintInConsole(str, delay) {

    let count = 0;
   
        str.forEach((word, index) => {
            
            count += delay[index];
            setTimeout(() => {
                console.log(word)
            }, count);
        })
    }