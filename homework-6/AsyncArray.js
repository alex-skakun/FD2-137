class MyArray extends Array {
    async mapAsync(asyncFunc) {
        const resultArray = new MyArray(); 

        for (let i = 0; i < this.length; i++) { 
            try {
                const asyncResult = await asyncFunc(this[i], i, this); 
                resultArray.push(asyncResult); 
            } catch (error) {
                resultArray.push(error)
            }
        }

        return Promise.resolve(resultArray);
      
    }
}

export { MyArray };
