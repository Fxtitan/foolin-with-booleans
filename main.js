/********************
 * YOUR CODE BELOW! *
 ********************/
const theJokeIsAwesome = true;
const iGetTheJoke = theJokeIsAwesome;

const iAmHavingFun = true;
const havingFun = iAmHavingFun;

const iAmLearning = true;
const learning = iAmLearning;

const killingIt = iAmHavingFun && iAmLearning === true;
killingIt;

const returnFalse = (alwaysFalse) => {
  return alwaysFalse = false;
}
returnFalse();

const isOpposite = (opposite) => {
  if(opposite === true) {
    return false;
  } else if(opposite === false) {
    return true;
  } 
}
isOpposite();

const either = (thing1, thing2) => {
  if(thing1 || thing2 === true) {
    return true;
  } else {
    return false
  }
}
either();


const both = (justAParam1, justAParam2) => {
  if( justAParam1 && justAParam2 == true) {
    return true;
  } if(either(justAParam1, justAParam2) || either(justAParam1, !justAParam2)) {
    return false;
  }
}







/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}