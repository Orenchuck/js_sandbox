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
     if (isNaN (arr[i][j]) || !typeof(arr[i][j]) == 'number' || (arr[i][j]) === null) {
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
  let result = {};
  let intVal = [];
  let n = 0;

  for (let key of arguments) {
    if (typeof key == 'object'){
      intVal[n] = key;
      n +=1;
    }
  }

  result = intVal[0];

  for (let i=1; i<intVal.length; i+=1){
    for (let same in intVal[i]) {
      if (same in result) {
        if (Array.isArray(result[same])) {
          for (let num of intVal[i][same]){
            result[same].push(num);
          }
        }
        else if (typeof result[same] == 'number' || typeof result[same] == 'string'){
          result[same] += intVal[i][same];
        }
        else if (typeof result[same] != typeof intVal[i][same]){
          result[same] = intVal[i][same];
        }
        
      }
      else {
        result[same] = intVal[i][same];
      }
       
    }
   
  }

  return result;
}
