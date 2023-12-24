
function printWithDelay(str, arr) {
    const arrWord = str.split(' ');
    let i = 0;
// для наглядности запускаем перед стартом точное время
    console.log('start', new Date());

    function logConsole() {
        const delay = arr[Math.min(i, arr.length - 1)] * 1000;

        setTimeout(() => {
            console.log(arrWord[i], new Date());
            i++;
            if (i < arrWord.length) {
                logConsole();
            }
        }, delay);
    }
    logConsole();
}

printWithDelay('Мама мыла раму рама мыла маму', [4, 1, 3, 2]);
