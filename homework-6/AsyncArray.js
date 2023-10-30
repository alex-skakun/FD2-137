class AsyncArray extends Array {
    constructor(...args) {
        super(...args);
    }

    serialMap(asyncTransformation) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            asyncTransformation(this[i]).then(res => result.push(res))
        }

        return new Promise((resolve) => {
            resolve(result);
        });
    }
}

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    resolve(el * 2);
});

const asyncArray = new AsyncArray(1, 2, 3, 4, 5);

asyncArray.serialMap(asyncTransformation).then(result => {
    console.log(result);
});