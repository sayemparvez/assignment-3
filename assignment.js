// kilometer to Meter

function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000;
    return meter;
}
var myMeter = kilometerToMeter(12);
console.log(myMeter);

// Budget Calculator

function budgteCalculator(watch, phone, laptop) {
    var total = watch + phone + laptop
    return total;
}
var total = budgteCalculator(50,100,300);
console.log(total);


//Find the longest name from a string

function megaFriend(myFriend){
    myFriend = myFriend.split(' ');   
    var longest = myFriend.reduce((current, previous)=>{
        return current.length > previous.length ? current : previous;
    }, "");
    return longest;
}
var friendList = (`Tamim, Samim, Tamanna, Monisha, Abdullah, Abu.`);
var result = megaFriend(friendList);

console.log(result);