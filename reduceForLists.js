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
