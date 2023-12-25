export function _async(genFunc){  
    return (...params) => new Promise(resolve => {
        const gen = genFunc(...params);
        const func = (v) => {
            const r = gen.next(v);
            if (!r.done) r.value.then(func);
            else resolve(r.value);
        }
        func();
    })
}
////////////////for 1 task/////////////////////////////////////////////////
export const asyncTransformation = (el, index, asyncArray) => {
    return new Promise((resolve) => {setTimeout(() => resolve(el*2), 2*1000)})
};
////////////////for 2 task/////////////////////////////////////////////////
export const someAsyncAction = (el) => {
    return new Promise((resolve) => {setTimeout(() => resolve(el*2), 1*1000)})
};

export const oneMoreAsyncAction = (el) => {
    return new Promise((resolve) => {setTimeout(() => resolve(el*2), 2*1000)})
};


//function _async(genFunc){  
//     return (...params) => new Promise(resolve => {
//             const gen = genFunc(...params);
//             const func = (v) => {
//                 const r = gen.next(v);
//                 if (!r.done) r.value.then(func);
//                 else resolve(r.value);
//             }
//             func();
//         })
// }


 // serialMap(transformFunc){
//     return new Promise(resolve => {

//         const func = this._async2(function* genFunc(arr){
//             const newArr = new AsyncArray();
//             for(let i=0; i<arr.length; i++){
//                 newArr[i] = yield transformFunc(arr[i], i, arr);
//             }

//             return newArr;
//         });
        
//         return func(this);

//         // const gen = genFunc(this, newArr);
//         // const func = (v) => {
//         //     const r = gen.next(v);
//         //     if (!r.done) r.value.then(func);
//         //     else resolve(r.value);  
//         // }

//         // func();         
//     })
// }