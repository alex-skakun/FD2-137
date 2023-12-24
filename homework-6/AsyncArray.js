
class AsyncArray extends Array {

    serialMap(callback) {
        const results = [];
        let promise = Promise.resolve();

        for (let i = 0; i < this.length; i++) {
            promise = promise
            .then(() => {
                return callback(this[i], i, this)
            .then(result => {
                    results.push(result);
                });
            });
        }
        return promise.then(() => new AsyncArray(...results));
    }
}


const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    // Любое асинхронное преобразование
    setTimeout(() => {
        resolve(el * 2);
    }, 2000);
});

const asyncArray = new AsyncArray(1, 2, 3);
asyncArray.serialMap(asyncTransformation).then(result => {
    console.log(result); 
});