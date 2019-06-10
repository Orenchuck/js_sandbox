
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

exports.func1 = print;
exports.func2 = print2;