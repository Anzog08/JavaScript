// 1. const users = [
//     { name: 'Victor', score: 20 },
//     { name: 'Mario', score: 10 },
//     { name: 'Tatiana', score: 30 }] → array of object iig score ooroor erembel ereblehde for(let i of users) ashiglana.
//    2. [1, 3, 5, 22, 89, 46, 17, 31, 59] array in hamgiin ih too bolon hamgiin baga toog ol.
//    3. 0 - 50 hurtelh toonuudin fibanocci daraalal olon arrayd hiin arrayiig hevle.
//    4. [1,2,3,4,5] arrayiin goliin elementiig hamgiin suuliin elementeer soli, hervee goliin element gej baohgui bol suuliin elementiig 2 oor urjuulen soli.

// const fruits = [banana, orange, apple, mango];

// fruits.sort();

const points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) {
  return b - a;
});

console.log(points);
