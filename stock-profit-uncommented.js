var list = [45, 24, 35, 31, 40, 38, 11];
var validProfits = [];
var listA = list.map(function(currentValue,index) {
    var listSortSliced = list.slice(index,currentValue).sort(function(a, b){return b - a});
    validProfits.push(listSortSliced[0] - currentValue);
    validProfits.sort(function(a, b){return b - a});
});
console.log(validProfits[0]);