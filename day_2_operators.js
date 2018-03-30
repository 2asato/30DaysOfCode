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
