const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 8;
    case 'Webnesday':
      return 8;
    case 'Thursday':
      return 8;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 8;
    case 'Sunday':
      return 8;
 }
}

const getActualSleepHours = () => {
 return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Webnesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
}

const getIdealSleepHours = () => {
  let idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('Ideal Sleeping');
  }
  if(actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - 	actualSleepHours) +
    ' hours less sleep than you needed this week. Get some rest.');
  }

  if(actualSleepHours < idealSleepHours){
    console.log('Very Good Rest!');
  }
};

calculateSleepDebt();
