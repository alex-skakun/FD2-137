// задание сделано с нарушением условия, что каждое следующее преобразование происходит после предыдущего
class AsyncArray extends Array {
    constructor(...args) {
        super(...args);
    }

    serialMap(callback) {          
        return Promise.all(
            this.map(callback)
        );
    }
}

const asyncArray = new AsyncArray(1, 2, 3);

const asyncTransformation = (el, index, asyncArray) => new Promise((resolve, reject) => setTimeout(() => resolve(el + 100), 3000));


 asyncArray.serialMap(asyncTransformation).then(result => {
       console.log(result);               
    });
