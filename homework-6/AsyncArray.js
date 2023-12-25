class AsyncArray extends Array {
    constructor(...args) {
        super(...args);
    }

    // this - это ссылка класса на самого себя
    serialMap(callback) {
        //   console.log (this);
        return new Promise((resolve, reject) => {
            this.map(callback).forEach((item, index) => {
                item.then((result) => {
                    this[index] = result;
                    if (this.length - 1 === index) {
                        resolve(this);
                    }
                });
            });
        });
    }
}

const asyncArray = new AsyncArray(1, 2, 3);
// console.log(asyncArray);

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => {
    resolve(el * el);       // любое асинхронное преобразование
});

// !!! callback = asyncTransformation
asyncArray.serialMap(asyncTransformation).then(result => {
    console.log(result);     // result - экземпляр AsyncArray с результатами преобразований
});

console.log(asyncArray);
