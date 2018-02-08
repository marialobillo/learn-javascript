let raceNumber = Math.floor(Math.random()*1000);
let isRegistered = false;
let runnerAge = 0;

if (isRegistered == false){
  raceNumber += 1000;
}

if(runnerAge >= 18 && isRegistered){
  console.log("You will race at 9:30 with " + raceNumber + " number.");
} else if(isRegistered && runnerAge >= 18){
  console.log("You will race at 11am with " + raceNumber + " number.");
} else if(!isRegistered && runnerAge < 18){
  console.log("You will race at 12:30 with " + raceNumber + " number.");
} else {
  console.log("Please, see the registration desk.");
}
