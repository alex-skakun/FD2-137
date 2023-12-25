function printWithDelay(text, arrDelay) {
    if (typeof text !== 'string' || !Array.isArray(arrDelay)) {
        return;
    }

    arrWords = text.trim().split(' ');
    // console.log(arrWords);
    if (arrWords.length > arrDelay.length) {
        const lastValue = arrDelay[arrDelay.length - 1];

        do {
            arrDelay.push(lastValue);
        } while (arrWords.length > arrDelay.length);
    }
    // console.log(arrDelay);

    let delay = 0;
    arrWords.forEach((element, i) => {
        delay += arrDelay[i];
        setTimeout(function () {
            console.log(element);
        }, delay * 1000);
    });
}

printWithDelay('Мама мыла раму рано', [2, 6, 7]);
