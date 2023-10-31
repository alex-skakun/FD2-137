import {_async} from './toolFuncs.mjs';

export class AsyncArray extends Array{ 
    serialMap(transformFunc){
        const func = _async(function* (arr){
            const newArr = new AsyncArray();
            for(let i=0; i<arr.length; i++){
                newArr[i] = yield transformFunc(arr[i], i, arr);
            }
            return newArr;
        });
            
        return func(this);         
    }
}