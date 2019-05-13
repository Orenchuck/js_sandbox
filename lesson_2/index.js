function removeKeys (obj, arrStr) {
    for (var i=0; i<arrStr.length; i+=1){
    if (arrStr[i] in obj) {
        var key = arrStr[i];
        delete obj[key];
    }
}
  return obj;
}



function clearNumbers (arr) {
  for (var i = 0; i<arr.length; i+=1) {
     for (var j = 0; j<arr[i].length; j+=1) {
     if (isNaN (arr[i][j]) || !parseFloat(arr[i][j])) {
      arr[i].splice(j, 1);
      j--;
    }
  }
  }
  return arr;
}



function reverse () {
  var res = [];
  for (var i = 0; i<arguments.length; i+=1) {
    res.push(arguments[i].split("").reverse().join(""))
  }
  res.reverse();
  return res;
}



function join () {
  var res = [];
  for (var i=0; i<arguments.length; i+=1) {
    if (typeof arguments[i]==='object') {
      res[i]=arguments[i];
    }
    }
    for (var n = 0; n<res.length; n+=1) {
       if (res[n] == undefined) {
       res.splice(n, 1);
       n--;
        }
   }

   function isEmpty(obj) {
    for (var keys in obj) {
      return false;
    }
    return true;
  }
  
    var result = res[0];
    for (var j = 1; j < res.length; j+=1) {
      var arg = res[j];
           for (var key in arg) {
             if (Array.isArray(result[key]) || result[key] === 'object'){
               var c = result[key];
              if (isEmpty(c) || c.length == 0){
                result[key] = arg[key];
               }
              else result[key] = result[key].concat(arg[key]);
             }
             else if (!isNaN(result[key]) || parseFloat(result[key]) || !isNaN(arg[key])){
              result[key] = +result[key] + (+arg[key]);
             }
             else if (typeof(result[key]) == "undefined" || typeof(result[key]) == "boolean") {
              result[key] = arg[key];
             }
             else  {
              result[key] = result[key] + arg[key];
                   }
     }
          
    }


  return result;
}

