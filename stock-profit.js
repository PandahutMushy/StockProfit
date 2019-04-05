var list = [45, 24, 35, 31, 40, 38, 11];
var validProfits = [];

//Map index/val pairs in the given array
var listA = list.map(function(currentValue,index) {

    //With each iteration, start from the next newest value (can't compare future purchases to old ones)
    var listSliced = list.slice(index,currentValue);

    //Get the most recent highest price so we can compare it (udpates when the highest val is sliced off)
    var listSort = listSliced.sort(
        function(a, b){return b - a}
        );

    //One potential max profit = difference between current most recent highest price and currentValue
    var valDiff = listSort[0] - currentValue;

    //Push the potential max profit into a storage array
    validProfits.push(valDiff);

    //Sort this array from highest to lowest so we can return the highest one
    validProfits.sort(
        function(a, b){return b - a}
        );
});

//Return first (max) element in validProfits array
console.log(validProfits[0]);