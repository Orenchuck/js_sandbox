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
        this.hist += ' √(';
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
