"use strict";
/*
. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed
 */
// step 1:create an arry to store travel destination.
let travelDestination = ["Tokyo", "Paris", "Madina Munawara", "Canada", "Brazeal"];
//2nd step:print your array in its original order
console.log("Original Order");
console.log(travelDestination);
//step 3rd:Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list.");
console.log([...travelDestination].sort());
//step 4:Show that your array is still in its original order by printing it
console.log("\nShowing array is still in its original order");
console.log(travelDestination);
//step 5:Print your array in alphabetical order without modifying the actual list
console.log("\n  Reverse Alphabetical order without modifying the actual list.");
console.log([...travelDestination].sort().reverse());
// step 6:Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(travelDestination);
// step 7:Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
travelDestination.reverse();
console.log(travelDestination);
// step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original");
travelDestination.reverse();
console.log(travelDestination);
// step 9:Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabatic order");
travelDestination.sort();
console.log(travelDestination);
// last step:Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("\nChange to  Reverse Alphabatic order");
travelDestination.sort().reverse();
console.log(travelDestination);
