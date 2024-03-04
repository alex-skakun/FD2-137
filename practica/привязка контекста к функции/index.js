let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  },
};

setTimeout(function () {
  user.sayHi(); // Привет, Вася!
}, 1000);
