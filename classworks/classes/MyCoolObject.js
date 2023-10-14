'use strict';

class MyCoolObject extends MyObject {
    #coolIndex;

    constructor(value, coolIndex) {
        super(value);
        this.#coolIndex = coolIndex;
    }

    hello() {
        console.log(this.value);
        this.#bye();
    }

    #bye() {
        console.log(this.#coolIndex);
    }
}
