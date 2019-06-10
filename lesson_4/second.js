let print = function (a) {
    let res = "\n";
    let o = ' ';
    let j = 0;
    let n;
    (a >= 2) ? n = a*2-3 : n = 0;
for (let i = a; i>0; i-=1) {
        let b;
    j +=1;
    if (n < 1) {
        b = `${new Array(j).join(o)}` + '*' + "\n";
    }   
   else {
    b = `${new Array(j).join(o)}` + '*' + `${new Array(n+1).join(o)}` + '*' + "\n";
   }

    res = res + b;
    n -=2;
}

return res;
};



let print2 = function (a) {
    let res = '\n';
    res += ' '.repeat(a-1);
    res += '*';
    res += ' '.repeat(2*(a-1));
    res += '*\n';
    let j=0, n=0, k=1;
    for (let i=0; i<a-1; i+=1) {
       
        j += 1;
        n += 1;
        k += 1;
        res += ' '.repeat(a-2-i);
        res += '*';
        res += ' '.repeat(i+j); 
        res += '*';
        res += ' '.repeat((a-k)*2);
        res += '*';
        res += ' '.repeat(i+n); 
        res += '*\n';
            }
           j=1, k=2, n=1;
    for (let i = 0; i<a-2; i+=1) {
        
        res += ' '.repeat(j);
        res += '*';
        res += ' '.repeat((a-k) * 2 - 1);
        res += '*';
        res += ' '.repeat(n*2);
        res += '*';
        res += ' '.repeat((a-k) * 2 - 1);
        res += '*\n';
        j += 1;
        n += 1;
        k += 1;
    }    
    res += ' '.repeat(a-1);
    res += '*';
    res += ' '.repeat(2*(a-1));
    res += '*\n';     

    return res;
};






function calculate (arr = []) {
    let checkForm = 5, k = 'a', x = 'a', b = 'a', obj = new Object;
    let res = {};
    res.history = arr;
    
    res.args = obj;
    while (checkForm != 'exit' && checkForm != null && checkForm !=1 && checkForm !=2){
       checkForm = prompt('Введите 1 для рассчета y = kx + b \n Введите 2 для рассчета y = x^2 \n Введите exit для выхода', '');
       arr.push(checkForm); 
              
    }
   

if (checkForm == '1') {
    res.formula = 'y = kx + b';

    while (k != 'exit' && k != null && isNaN(k)) {
        k = prompt ('Введите k для рассчета формулы или exit для выхода', '');
        arr.push(k);
    }
   if (k == 'exit' || k == null) return res;

    while (x != 'exit' && x != null && isNaN(x)) {
        x = prompt ('Введите x для рассчета формулы или exit для выхода', '');
        arr.push(x);
    }
   if (x == 'exit' || x == null) return res;

    while (b != 'exit' && b != null && isNaN(b)) {
        b = prompt ('Введите b для рассчета формулы или exit для выхода', '');
        arr.push(b);
    }
   if (b == 'exit' || b == null) return res;

    let y = k * x + (+b);
    obj.k = k;
    obj.x = x;
    obj.b = b;
    alert (y);
    calculate (arr);
}

if (checkForm == '2') {
    res.formula = 'y = x^2';

    while (x != 'exit' && x != null && isNaN(x)) {
        x = prompt ('Введите x для рассчета формулы или exit для выхода', '');
        arr.push(x);
    }
    if (x == 'exit' || x == null) return res;

    let y = Math.pow (x, 2);
    obj.x = x;
    alert (y);
    calculate(arr);
}


return res
}




