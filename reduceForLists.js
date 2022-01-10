//https://www.liaoxuefeng.com/wiki/1022910821149312/1024322552460832

'use strict';

function string2int(s) {
    var m = new Map([['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6', 6], ['7', 7], ['8', 8], ['9', 9], ['0', 0]]);
    var l = [];
    for (var i = 0; i < s.length; i++) {
        l.push(m.get(s[i]));
    }
    //console.log(l);
    var result = l.reduce(function(x, y){
        return x * 10 + y;
    });
    
    return result;
}
/***********************************************************************/
function normalize(arr) {
    var newNameList = [];
    for (var i = 0; i < arr.length; i++) {
        var l = [arr[i][0].toUpperCase()];
        for (var j = 1; j < arr[i].length; j++) {
            l.push(arr[i][j].toLowerCase());
        }
        var name = l.reduce(function (x, y) {
            return x + y;
        });
        newNameList.push(name);
    }
    return newNameList;
}
// Test:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('Pass!');
}
else {
    console.log('Fail!');
}
