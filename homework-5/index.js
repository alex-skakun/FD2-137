function printWithDelay(stringToSpell, delayArray) {
    const stringToWords = stringToSpell.split(' ');

    function printWord(index) {
        if (index < stringToWords.length) {
            setTimeout(() => {
                console.log(stringToWords[index]);
                printWord(index + 1);
            }, (index < delayArray.length ? delayArray[index] : delayArray[delayArray.length - 1]) * 1000);
        }
    }

    printWord(0);
}

printWithDelay('Мама мыла раму или не мыла точно не уверен', [2, 6, 7]);