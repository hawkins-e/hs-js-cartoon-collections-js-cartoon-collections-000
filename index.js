//Please return a list of the dwarves names once they are passed through the function.

function dwarfRollCall(dwarves){
  //Iterate through the array, dwarves, adding their indexes +1.
  //What do I want to repeat? I want to repeat the process of extracting a name from the passed array.
  //What do I want to add each time? The name of a dwarf.
  //How long should we repeat? Until there are no more dwarves left.
  //Return the index +1 of the dwarf + his/her name.
  var myString = "";
  for (var i = 0; i < dwarves.length; i++) {
    myString+= i+1 +"." + " " + dwarves[i] + " ";
  }
return myString;
} // Special Takeaways:
//1.Watch out for and be aware of spacing in empty strings and to gain the spacing that you are looking for.
//2. Don't forget the boundaries name, ex: var,for,etc.

function summonCaptainPlanet(planeteerCalls){
  //We want to return an array that should convert each element to uppercase and add an exclamation point to the end.
  //1.Create an empty array because we want our result to be an array.
  //2.Create a for loop that iterates over the length of the array
  //3.Convert the element to uppercase and add an exclamation point to the end.
var elementarray=[];
for (var i=0; i < planeteerCalls.length; i++) {
  planeteerCalls[i]= planeteerCalls[i].toUpperCase();
elementarray.push(planeteerCalls[i] + "!");
}
return elementarray;
}

function longPlaneteerCalls(words) {
//We want a function that can look at each element and tell us if the individual element is longer than 4 characters or not. Returning a value of true or false.
// We can use if statements to see if the individual elements are less than four characters.
//If longPlaneteerCalls.length[i] < 4=== false
//If longPlaneteerCalls.length[i]>4=== true
for (var i=0; i< words.length; i++){
  if (words.length[i]<4);
return false;
  if (words.length[i]>4);
  return true;
}
//We need to determine if a cheese is within the array.
//If there is a cheese in the array we want it to return that name of said cheese.
//We can distingusish between the values and compare them by using a double loop. The array will loop through the outer loop and compare it's first index against all of the indexes of cheese, in  search of a match. If and when it finds one it will return that cheeses' name according to food[i]
//If the array has an element that is = to a cheese return cheese name.
//If the array doesn't have an element = to a cheese return the string "no cheese!"
function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"]; 
  for (var i = 0; i < foods.length; i++) { 
    for (var j = 0; j < cheeses.length; j++) { 
      if ( cheeses[j]=== foods[i] ) { 
        return foods[i]; //will quit and return the first cheese that it finds 
      } 
    } 
  } 
  return "no cheese!"; // returns "no cheese!" if it doesn't find any cheese :(
    } 