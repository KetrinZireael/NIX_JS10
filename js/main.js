// const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
// //let lastName = ['Никита', 'Саша', 'Анастасия', 'Дима', 'Катя', 'Лера'];

// for (let i = 0; i < unwantedNames.length; i++) {
//     let pos = lastName.indexOf(unwantedNames[i]);
//     if (pos != -1) {
//         lastName.splice(pos, 1);
//     }
// }
// console.log(lastName);

function selectionName(lastName) {
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    
    for (let i = 0; i < unwantedNames.length; i++) {
        let pos = lastName.indexOf(unwantedNames[i]);
        if (pos != -1) {
            lastName.splice(pos, 1);
        }
    }
    console.log(lastName);
}

selectionName(['Никита', 'Саша', 'Анастасия', 'Дима', 'Катя', 'Лера']);
selectionName(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга',]);
selectionName(['Алишер', 'Ольга']);