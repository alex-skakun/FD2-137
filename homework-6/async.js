function asyncFunc(generatorFunc) {
    return function (...args) {
        const generator = generatorFunc(...args);

        return new Promise(async (resolve, reject) => { 
            try {
                let result = undefined;
                while (true) {
                    const { value, done } = generator.next(result); 
                    if (done) { 
                        resolve(value); 
                        break; 
                    } else if (value instanceof Promise) { 
                        result = await value; 
                    } else {
                        result = value;
                    }
                }
            } catch (error) {
                reject(error);
            }
        });
    };
}

export { asyncFunc };
