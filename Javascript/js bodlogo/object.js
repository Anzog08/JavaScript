// 1.Өгөгдсөн массивийн нийлбэрийг олж буцаа. [2,511,123,5]

// const a = [2, 511, 123, 5];

// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
// console.log(sum);

// lastname, firstname, fullname, age, gender, isMarried гэсэн array-ийн утгууд байна. Харин lastname, firstname, fullname, age, gender, isMarried, address, eduction, image, language, major гэсэн key нүүдийг агуулсан object өөрсдөө зохионо.

// Даалгавар 1: Array ийн утгуудаар нь object оос датаг нь цуглуулж шинэ objectd хийх

// Даалгавар 2: Array ийн утгуудаар нь object оос датаг нь цуглуулж ямар нэгэн утга бүхий өгүүлбэр өөрсдөө зохио.

const array = [
  "lastname",
  "firstname",
  "fullname",
  "age",
  "gender",
  "isMarried",
];

const ob = {
  lastname: "Bat",
  firstname: "Ganaa",
  fullname: "Dorj",
  language: "english",
  age: "25",
  address: "SBD",
  gender: "male",
  isMarried: "yes",
  education: "student",
  major: "",
};
const newob = {};
let b = "taarch bnaa";
for (let i = 0; i < array.length; i++) {
  newob[array[i]] = ob[array[i]];
}

console.log(newob);

console.log(
  `ta ${ob.isMarried} baina. ${array}, `,
  `Tani ner ${ob.lastname} mun baina`,
  `tani ner ${ob.firstname} bish baina`
);

// ob["lastname"] = ob.lastname;
