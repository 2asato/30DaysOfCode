// Objective
// In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
//
// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!
//
// Input Format
//
// There are  lines of numeric input:
// The first line has a double,  (the cost of the meal before tax and tip).
// The second line has an integer,  (the percentage of  being added as tip).
// The third line has an integer,  (the percentage of  being added as tax).
//
// Output Format
//
// Print The total meal cost is totalCost dollars., where  is the rounded integer result of the entire bill ( with added tax and tip).

function main(meal_cost, tip_percent, tax_percent) {
    // var meal_cost = parseFloat(readLine());
    // var tip_percent = parseInt(readLine());
    // var tax_percent = parseInt(readLine());
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100);
    let totalCost = Math.round(meal_cost + tip + tax);
    console.log("The total meal cost is " + totalCost + " dollars.")
}
main(15.5, 15, 9)
