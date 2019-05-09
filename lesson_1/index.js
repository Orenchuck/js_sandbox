function makeGreetings (age) {
    if (age%100 >= 10 && age%100 <= 20) return ("Мой возраст " + age + " лет");
    else if (age%10 == 1) return ("Мой возраст " + age + " год");
    else if (age%10 >= 2 && age%10 <= 4) return ("Мой возраст " + age + " года");
    else return ("Мой возраст " + age + " лет");
}

function splitArray (arr, num) {
    var rez = [];
    while (arr.length) {
        rez.push(arr.splice(0, num));
    }
    return rez;
}

function add (a) {
    return function (b) {
        return a+b;
    }
}




function transformData (arr){
var filt = [];
    function getStat (arr, search) {
        filt = arr.filter (function(item){
            return search(item)
        });
        return filt
    }

getStat(proj, function(item){
    return item.mark >= 5
});

var res = [];
for (var i=0; i<filt.length; i+=1) {
    var a = filt[i][login];
    var b = filt[i][firstName].concat(filt[i][lastName]);
    res.push ({a : b});
};
return res
}



function addInfinite(a) {
    var sum = a;

    function add2(b) {
        sum += b;
        return add2;
    }

}


