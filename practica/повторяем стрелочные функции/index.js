// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function(student) {
//       // Error: Cannot read property 'title' of undefined
//       alert(this.title + ': ' + student)
//     });
//   }
// };

// group.showList();

// class Dog {
//   constructor(name){
//       this.name = name;
//   }

//   eat(food){
//     const self = this;
//     food.forEach(function(item) {
//         console.log(`${self.name} is eating ${item}`)
//     });
// }
// }

// const bim = new Dog('Bim');
// bim.eat(['bone', 'cookie'])

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   eat(food) {
//     food.forEach(function (item) {
//       console.log(`${this.name} is eating ${item}`);
//     });
//   }
// }

// const bim = new Dog("Bim");
// bim.eat(["bone", "cookie"]);

// var adder = {
//   base: 1,

//   add: function (a) {
//     var f = (v) => v + this.base;
//     return f(a);
//   },

//   addThruCall: function (a) {
//     var f = (v) => v + this.base;
//     var b = {
//       base: 2,
//     };

//     return f.call(b, a);
//   },
// };

// console.log(adder.add(1)); // Выводит 2
// console.log(adder.addThruCall(1)); // Всё равно выводит 2

// var arguments = 42;
// var arr = () => arguments;

// arr(); // 42

// function foo() {
//   var f = (i) => arguments[0] + i; // Неявное связывание ссылки arguments
//   // стрелочной функции f
//   // c объектом arguments функции foo
//   return f(2);
// }

// foo(1); // 3

// function foo() {
//   var f = (...args) => args[0];
//   return f(2);
// }

// foo(1); // 2


