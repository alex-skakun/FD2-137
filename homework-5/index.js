function printWithDelay(stringToSpell, delayArray) {
    const stringToWords = stringToSpell.split(' ');
    const maxDelays = Math.min(stringToWords.length, delayArray.length);

    function printWord(index) {
        if (index < maxDelays) {
            setTimeout(() => {
                console.log(stringToWords[index]);
                printWord(index + 1);
            }, delayArray[index] * 1000);
        }
    }

    printWord(0);
}

printWithDelay('Мама мыла раму', [2, 6, 7]);