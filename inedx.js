


let birthYear = prompt("Введите ваш год рождения:");

birthYear = parseInt(birthYear);

if (isNaN(birthYear)) {
    console.log("Пожалуйста, введите действительный год.");
} else {
    let currentYear = new Date().getFullYear();
    
    let age = currentYear - birthYear;
    
    console.log("Ваш возраст: " + age + " лет.");
}