function printWithDelay(str, [...arr]) {
    const words = str.split(' ')
    let times = [...arr]
    while (times.length < words.length) {
        times[times.length] = times[times.length - 1]
    }
    let time = 0;
    let i = 0;
    let d = function (i) {
        time = times[i] * 1000 + time
        setTimeout(function () {
            console.log(words[i])
        }, time)
    }
    while (i < words.length) {
        d(i)
        i++
    }
}
printWithDelay('Мама мыла раму очень долго', [2, 6, 7]);