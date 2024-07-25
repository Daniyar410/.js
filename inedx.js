

// let number = prompt("Введите пароль:");

// number = parseFloat(number);

// if (isNaN(number)) {
//     console.log("Пожалуйста, введите действительный пароль!.");
// } else if (number > 0) {
//     console.log("Молодец!");
// } else if (number < 0) {
//     console.log("Пароль неверный");
// } else {
//     console.log("Доступ закрыт");
//     alert('ЧЁ САМЫЙ УМНЫЙ')
// }

let birthYear = prompt("Введите ваш год рождения:");

birthYear = parseInt(birthYear);

if (isNaN(birthYear)) {
    console.log("Пожалуйста, введите действительный год.");
} else {
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - birthYear;
    
    console.log("Ваш возраст: " + age + " лет.");
}