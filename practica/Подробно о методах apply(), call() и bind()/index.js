// var data = [
//   { name: "Samantha", age: 12 },
//   { name: "Alexis", age: 14 },
// ];

// var user = {
//   //  а это уже локальная
//   data: [
//     { name: "T. Woods", age: 37 },
//     { name: "P. Mickelson", age: 43 },
//   ],
//   showData: function (event) {
//     var randomNum = ((Math.random() * 2) | 0) + 1 - 1; // Любое число с 0 до 1

//     console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
//   },
// };

// //  Назначаем метод showData от объекта переменной
// var showDataVar = user.showData;

// showDataVar(); // Samantha 12 (Данные взялись из глобального массива данных, а не из локального в объекте)



var gameController = {
  scores  :[20, 34, 55, 46, 77],
  avgScore:null,
  players: [
      {name:"Tommy", playerID:987, age:23},
      {name:"Pau", playerID:87, age:33}
  ]
}

var appController = {
  scores: [900, 845, 809, 950],
  avgScore:null,
  avg     :function () {

      var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
          return prev + cur;
      });

      this.avgScore = sumOfScores / this.scores.length;
  }
}

//  Обратите внимание, что тут мы используем apply(), так что вторым аргументом должен быть массив
appController.avg.apply (gameController);
console.log (gameController.avgScore); // 46.4

//  appController.avgScore до сих пор null; он не изменился, только gameController.avgScore
console.log (appController.avgScore); // null
