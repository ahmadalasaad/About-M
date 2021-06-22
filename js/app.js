'use strict';
let userName = prompt('what is your name ?');

alert('welcome to my websit ' + userName);

alert('you can see about owner article read it then answer to questions');

alert('Hello, My name is ahmad, I am 24 years old,I am jordinian and I live in Irbid city I graduated from Yarmouk University with major in Electronics Engineering and now I try to be a web developerand you can see from this site Which game I like');
let score = 0;
//age
let myAge = [22, 23, 24, 25];
let age = parseInt(prompt('how older is ahmad ? ', '[22, 23, 24, 25]'));
console.log(age);
for (let i = 0; i <= 6; i++) {
    if (age === myAge[2]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;

    }
    age = parseInt(prompt('how older is ahmad ? '));
}

//uni
let myUni = ['yarmouk', 'JUST', 'JU'];
let uni = prompt('whit is ahmad university ? ', '[yarmouk, JUST, JU]');
console.log(uni);
for (let i = 0; i <= 6; i++) {
    if (uni === myUni[0]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    uni = prompt('whit is ahmad university ? ');
}
//liv
let myCon = ['jordan', 'italy', 'cnada'];
let con = prompt('whit is ahmad country ? ', '[jordan, italy, cnada]');
console.log(con);
for (let i = 0; i <= 6; i++) {
    if (con === myCon[0]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    con = prompt('whit is ahmad country ? ', '[jordan, italy, cnada]');
}

//major
let myMaj = ['electronics', 'civil', 'industrial'];
let maj = prompt('whit is ahmad major ? ', '[ndustrial, civil, electronics]');
console.log(maj);
for (let i = 0; i <= 6; i++) {
    if (maj === myMaj[0]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    maj = prompt('whit is ahmad major ? ', '[ndustrial, civil, electronics]');
}

//city
let myCity = ['amman', 'irbid', 'aqaba'];
let city = prompt('whit is ahmad city ? ', '[amman, irbid, aqaba]');
console.log(city);
for (let i = 0; i <= 6; i++) {
    if (city === myCity[1]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    city = prompt('whit is ahmad city ? ', '[amman, irbid, aqaba]');
}

//game
let myGame = ['FIFA', 'PUPG', 'PES'];
let game = prompt('whit is ahmad play in his free time ? ', '[FIFA, PUPG, PES]');
console.log(game);
for (let i = 0; i <= 6; i++) {
    if (game === myGame[0]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    game = prompt('whit is ahmad play in his free time ? ', '[FIFA, PUPG, PES]');
}

//passion
let myPass = ['developer', 'plyar', 'singer'];
let pass = prompt('whit is ahmad passion ? ', '[developer, plyar, singer]');
console.log(pass);
for (let i = 0; i <= 6; i++) {
    if (pass === myPass[0]) {
        console.log(i)
        alert('Correct answer');
        score++;
        break;
    }
    pass = prompt('whit is ahmad passion ? ', '[developer, plyar, singer]');
}

alert(`youhave ${score} point`)
