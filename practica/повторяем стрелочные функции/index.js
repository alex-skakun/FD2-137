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

class Dog {
  constructor(name) {
    this.name = name;
  }

  eat(food) {
    food.forEach(function (item) {
      console.log(`${this.name} is eating ${item}`);
    });
  }
}

const bim = new Dog("Bim");
bim.eat(["bone", "cookie"]);
