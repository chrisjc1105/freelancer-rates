function dayRate(hourlyRate) {
    return hourlyRate * 8;
} 

function daysInBudget(fixedBudget, hourlyRate) {
    let daysBeforeRound = fixedBudget / dayRate(hourlyRate);
    
    return Math.floor(daysBeforeRound);
}

function priceWithMonthlyDiscount(hourlyRate, daysInProject, monthlyDiscountRate) {
    let dailyRate = dayRate(hourlyRate); 
    // console.log("dailyRate: " + dailyRate);

    let monthSpan = Math.floor(daysInProject / 22);
    // console.log("monthSpan: " + monthSpan); 

    let remainingDays = daysInProject - (monthSpan * 22);
    // console.log("remainingDays: " + remainingDays); 

    let undiscountedMonthlyRate = dailyRate * 22;
    // console.log("undiscountedMonthlyRate: " + undiscountedMonthlyRate);

    let discountedMonthlyRate = undiscountedMonthlyRate * (1 - monthlyDiscountRate);
    // console.log("discountedMonthlyRate: " + discountedMonthlyRate); 

    let totalCostMonths = monthSpan * discountedMonthlyRate;
    // console.log("totalCostMonths: " + totalCostMonths);

    let costDays = (remainingDays / 22) * undiscountedMonthlyRate;
    // console.log("costDays: " + costDays); 
    
    let finalCost = Math.ceil(totalCostMonths + costDays);
    // console.log ("final cost: " + finalCost);

    // ^^^ commented out all console.logs meant for testing purposes 
}