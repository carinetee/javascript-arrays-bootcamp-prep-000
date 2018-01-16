var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newBeginning = array.unshift(element);
  return newBeginning; 
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array; 
}

function addElementToEndOfArray(array, element) {
  var newEnd = array.push(element);
  return newEnd;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array; 
}

function accessElementInArray(array, index) {
  return array[index];
}

