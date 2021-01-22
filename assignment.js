// Star kilometer to Meter Calculation:

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        return kilometer * 1000;

    }
    else if (kilometer <= 0) {
        return 'Please Enter a Valid Input'
    }
}
console.log(kilometerToMeter(-2));

// End kilometer to Meter Calculation.



// Start Budget Calculation:

function budgteCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var total = (watchPrice * watch + phonePrice * phone + laptopPrice * laptop);
    return total;
}
console.log(budgteCalculator(2, 2,2));
// Start Budget Calculation.



//Star Hotel Cost Calculation:

function hotelCost(days){
    var totalCost = 0;
    if (days <= 0){
        return 'Invalid days, please Enter a valid days...Thanks'
    }
    else if(days <= 10){
        totalCost = days * 100;
    }
    else if(days<=20){
        var first10DaysCost = 10 * 100;
        var remaining = days - 10;
        var after10daysCost = remaining * 80;
        totalCost = first10DaysCost + after10daysCost
    }
    else{
        var first10DaysCost = 10 * 100;
        var days11to20DaysCost = 10 * 80;
        var remaining = days - 20;
        var after20days =remaining * 50;
        totalCost = first10DaysCost + days11to20DaysCost + after20days;
    }


    return totalCost;

}

console.log(hotelCost(21));

// End of Hotel Costing Calculation.



// Start Find the longest name from a string:

function megaFriend(longestName)
{
  var friendList = longestName.match(/\w[a-z]{0,}/gi);
  var result = friendList[0];

  for(var i = 1 ; i < friendList.length ; i++)
  {
    if(result.length < friendList[i].length)
    {
    result = friendList[i];
    } 
  }
  return result;
}
console.log(megaFriend('Sayem, Shamim, Shakil, Abdullah, Ayan'));

// Start Find the longest name from a string:
