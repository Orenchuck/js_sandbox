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


function transformData (data) {
    var result = {};
    
    for (var i=0; i<data.length; i+=1) {
        if (data[i].mark>5) {
            result[data[i].login] = (data[i].firstName + " " + data[i].lastName).trim() ;
        }
    }
        return result;
}



function addInfinite (a) {
    inner.result = a;
    function inner (b){
       inner.result += b;
       return inner;
   }
  
   return inner;
}


