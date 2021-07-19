// function arrayName(name) {
//    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
//    let resName = [];

//    for (let i = 0; i < name.length; i++) {
//       if(unwantedNames[i] === name[i]) {
//          name.splice(i, 1);
//       }   
//    }
   
//    return name;
// }

// console.log(arrayName(['Никита', 'Саша', 'Анастасия', 'Дима', 'Катя', 'Лера']));


const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
let lastName = ['Никита', 'Саша', 'Анастасия', 'Дима', 'Катя', 'Лера'];

let pos = lastName.indexOf('Дима');
console.log(pos);

let remove = lastName.splice(pos, 1);

console.log(lastName);

