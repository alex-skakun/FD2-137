import {AsyncArray} from './AsyncArray.mjs';
import {_async, asyncTransformation, someAsyncAction, oneMoreAsyncAction} from './toolFuncs.mjs';

////////////////1 task/////////////////////////////////////////////////
const asyncArray = new AsyncArray(1, 2, 5, 7, 12);
asyncArray.serialMap(asyncTransformation)
     .then(result => result.forEach((element) => console.log(element)));

////////////////2 task/////////////////////////////////////////////////
const testFunction = _async(function* (a, b, c) {
    return ((yield someAsyncAction(a)) + (yield oneMoreAsyncAction(b))) / (yield oneMoreAsyncAction(c));
});

testFunction(2, 3, 1).then(a => console.log(a));
