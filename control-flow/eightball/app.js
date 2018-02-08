let userName = '';
userName != '' ? console.log(`Hello, ${username}!`): console.log('Hello!');

let userQuestion = 'Will I become a werewolf tonight?';
let randomNumber = Math.floor(Math.random() * 8);
//Math.floor(Math.random() * 20);

let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
   	break;
  case 1:
    eigthBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
   	break;
  case 4:
    eigthBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Dont count on it';
   	break;
  case 6:
    eigthBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
   	break;
  case 8:
    eigthBall = 'Signs point to yes';
    break;
 }

console.log('The user asked: ' + userQuestion);
console.log(eightBall);
