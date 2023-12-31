//start 1 

let nam = prompt('Введите имя');


function info(answer){
    let year = prompt('Введите текуший год');
    let boreYear = prompt('Введите год рождения');
    answer = year - boreYear
    return answer
}

alert(nam + ", " + "Ваш возраст: " + info(0));

//end 1

//start 2

let kol = prompt('Введите количество примеров')

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mathSigns = ['+', '-', '*', '/'];

function getRandomMathSign() {
    let randomIndex = Math.floor(Math.random() * mathSigns.length);
    return mathSigns[randomIndex];
}

let randomSign = getRandomMathSign();

for(let i = 0; i < kol; i++){
    let a = RandomNumber(1,10)
    let b = RandomNumber(1,10)
    switch(randomSign){
        case"+":
        let answer = +prompt(a + "+" + b +"=")
        let word = answer == (a + b) ? ("Ваш oтвет верный = " + (a + b)) : ('Ваш oтвет не верный = ' + answer + " Правильный ответ = " + (a + b))
        alert(word);
        case"-":
        let answer2 = +prompt(a + "-" + b +"=")
        let word2 = answer2 == (a - b) ? ("Ваш oтвет верный = " + (a - b)) : ('Ваш oтвет не верный = ' + answer2 + " Правильный ответ = " + (a - b))
        alert(word2);
        case"/":
        let answer3 = +prompt(a + "/" + b +"=")
        let word3 = answer == (a / b) ? ("Ваш oтвет верный = " + (a / b)) : ('Ваш oтвет не верный = ' + answer3 + " Правильный ответ = " + (a / b))
        alert(word3);
        case"*":
        let answer4 = +prompt(a + "*" + b +"=")
        let word4 = answer4 == (a * b) ? ("Ваш oтвет верный = " + (a * b)) : ('Ваш oтвет не верный = ' + answer4 + " Правильный ответ = " + (a * b))
        alert(word4);
    }
}

//end 2