'use strict';
let userName = prompt('what is your name ?');

alert('welcome to my website' + userName);

alert('you can see about owner article read it then answer to questions');

alert('Hello, My name is ahmad, I am 24 years old,I am jordinian and I live in Irbid city I graduated from Yarmouk University with major in Electronics Engineering and now I try to be a web developerand you can see from this site Which game I like');
//age
let age = prompt('am i 24 years old? ');
console.log(age);
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':

        alert('good answer')
        console.log('yes');
        break;

    case 'no':
    case 'n':

        alert(`incorrect answer ${userName}`)
        console.log('no');
        break;
    default:
        alert('yes or no answer');
        break;
}
//uni
let uni = prompt('is my university JUST ?');
console.log(uni);
switch (uni.toLowerCase()) {
    case 'no':
    case 'n':
        alert('good answer')
        console.log('no');
        break;
    case 'yes':
    case 'y':
        alert(`incorrect answer ${userName}`)
        console.log('yes');
        break;
    default:
        alert('yes or no answer');
        break;
}

//liv

let liv = prompt('Am I amrican ?');
console.log(liv);
switch (liv.toLowerCase()) {
    case 'no':
    case 'n':
        alert('good answer')
        console.log('no');
        break;
    case 'yes':
    case 'y':
        alert(`incorrect answer ${userName}`)
        console.log('yes');
        break;
    default:
        alert('yes or no answer');
        break;
}
//major

let maj = prompt('am i electronics engineering ?');
console.log(maj);
switch (maj.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('good answer')
        console.log('yes');
        break;
    case 'no':
    case 'n':
        alert(`incorrect answer ${userName}`)
        console.log('no');
        break;
    default:
        alert('yes or no answer');
        break;
}

//game
let game = prompt('love fifa ?');
console.log(uni);
switch (game.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('good answer')
        console.log('yes');
        break;
    case 'no':
    case 'n':
        alert(`incorrect answer ${userName}`)
        console.log('no');
        break;
    default:
        alert('yes or no answer');
        break;
}
