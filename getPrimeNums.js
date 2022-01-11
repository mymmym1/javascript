function get_primes(arr) {
    var r = arr.filter(function(n) {
        if (n <= 3) {
            return n > 1;            
        }
        if (n % 6 != 1 && n % 6 != 5) {
            return false;
        }
        var sqrt = Math.sqrt(n);
        for (var i = 5; i <= sqrt; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    });
    return r;
}

// Test:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log("Pass!");
} else {
    console.log("Fail: " + r.toString());
}
    
