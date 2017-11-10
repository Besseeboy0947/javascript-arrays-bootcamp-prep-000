var chocolateBars = ['snickers',"hundred grand","kitkat", "skittles"]


function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
 }
 function accessElementInArray(array, index) {
 return array[index]
 }

function destructivelyRemoveElementFromBeginningOfArray (chocolate,vinalla,raspberry) {
array.shift()
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromEndOfArray (chocolate,vinalla,raspberry) {
  return icecreams.slice (0, icecreams.length -1)
}
