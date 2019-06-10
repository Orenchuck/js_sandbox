class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I am ' + this.age + ' years old');
    }
}

class AlevelStudent extends Human {
      constructor(name, age, marks){
          super(name, age);
          this.marks = marks;
    }

    averageMark() {
        let res = 0;
        for (let i=0; i<this.marks.length; i+=1){
            res += this.marks[i]; 
        }
        res = res/this.marks.length;
        return res;
          }
}          




class Calculator {
    constructor (result = 0, hist){
        this.result = result;
        this.hist = hist;
    }
    reset() {
        this.result = 0;
        this.hist = 0;
        return this;
    }

    add (num) {
        this.result = num + this.result;
        this.hist += ' + ' + num;
        return this;
    }

    sub (num) {
        this.result = this.result - num;
        this.hist += ' - ' + num;
        return this;
    }

    mul (num) {
        this.result = this.result * num;
        this.hist += ' * ' + num;
        return this;
    }

    div (num) {
        this.result = this.result / num;
        this.hist += ' / ' + num;
        return this;
    }

    pow (num) {
        this.result = Math.pow (this.result, num);
        this.hist += ' ^ ' + num;
        return this;
    }

    sqrt () {
        this.result = Math.sqrt (this.result);
        //this.hist += ' √(';
        return this;
    }

    getResult () {
        let res = this.result;
        this.hist += ' = ' + res;
        return res;
    }
}




class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

   toString (x, y) {
    return `Point[${this.x} ${this.y}]`;
   }

   set (x, y) {
       this.x = x;
       this.y = y;
   }

   getX () {
       return this.x;
   }

   getY () {
       return this.y;
   }
}


class Line {
    constructor (point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
       
    }

    toString () {
        let first = this.point1.toString();
        let second = this.point2.toString();
        let Line = "Line(" + first + "-" + second + ')';
        return Line;
    }    

    length () {
        let a = this.point1.x;
        let b = this.point1.y;
        let c = this.point2.x;
        let d = this.point2.y;
        let res = Math.sqrt(Math.pow((c-a), 2) + Math.pow((d-b), 2));

        return res;
    }
}


class WeightedPoint extends Point {
    constructor (x, y, weight) {
        super (x, y);
        this.weight = weight;
    }

    toString () {
        return `${this.weight}&${super.toString()}`;;
    }

    set (x,y,weight) {
        super.set(x,y);
        this.x = x;
        this.y = y;
        this.weight = weight;
    }

    getWeight () {
        return this.weight;
    }
}

/*class CalculatorExtended extends Calculator {
    toString () {
        super.toString ();
        let res;
          function() {
              if (this.add()) {
                res = console.log (res + '+' + this.add(this.num));
              } 
              if (this.sub()) {
                res = console.log (res + '-' + this.sub(this.num));
              } 
              if (this.mul()) {
                res = console.log (res + '*' + this.mul(this.num));
              } 
              if (this.div()) {
                res = console.log (res + '/' + this.div(this.num));
    
              }
              if (this.sqrt()) {
                res = console.log (res + '√' + this.sqrt());
              }  
              if (this.pow()) {
                res = console.log (res + '^' + this.pow(this.num));
              } 
              if (this.reset()) {
                res = console.log (res + '//');
              } 
              if (this.getResult()) {
                res = console.log (res + '=' + this.getResult());
              } 
              return res;
          }
          return res;
    }
}


function withUniqueID (parentClass) {
    class someClass extends parentClass {
        constructor () {
            function makeID() {
                let firstID = 1;
              
                return function() { 
                  return firstID++;
                };
              }
              
        }
    }
    return someClass
}
*/

class CalculatorExtended extends Calculator {
    constructor (result, hist) {
        super (result, hist);
    }

    toString() {
        // let a = Calculator.hist;
        // if (~a.indexOf('√')){
        //     this.hist = '√(' + this.hist + ')'
        // }
        this.getResult();
        return this.hist;
    }
}
const calc = new CalculatorExtended();
//console.log(calc.add(3).reset().sub(3).mul(2).div(3).pow(4).sqrt());
//console.log(calc.toString()); // √(((0 - 3) * 2 / 3) ^ 4) = 4
console.log(calc.reset().div(2).reset().mul(2).toString()); // 0 * 2 = 0
console.log(calc.reset().div(2).mul(2).toString()); // 0 / 2 * 2 = 0
console.log(calc.reset().sub(3).div(2).toString()); // (0 - 3) / 2 = -1.5
console.log(calc.reset().sqrt().toString()); // √(0) = 0
console.log(calc.reset().add(4).sqrt().toString()); // √(0 + 4) = 2
console.log(calc.reset().add(4).mul(2).mul(2).toString()); // (0 + 4) * 2 * 2 = 16


function withUniqueID(parentClass) {
  
    class NewClass extends parentClass {
        constructor (id = 1) {
           super();
            this.id = id;
  
    };

    };
    function makeID(){
        function count(){
        return this.id +=1;
    }
    return count;
    }
    makeID(this.id);
    
    return NewClass;
}
/*class SomeClass { hello() {} }
const SomeClassWithID = withUniqueID(SomeClass);
console.log (new SomeClassWithID()); // { id: 1, hello() {} }
console.log (new SomeClassWithID());// { id: 2, hello() {} }
console.log (new SomeClassWithID()); // { id: 3, hello() {} }*/