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
      constructor(name, age, mark){
          super(name, age);
          this.mark = mark;
    }

    averageMark(mark) {
        let res = 0;
        for (let i=0; i<this.mark.length; i+=1){
            res += this.mark[i]; 
        }
        res = res/this.mark.length;
        return res;
          }
}          




class Calculator {
    constructor (result = 0){
        this.result = result;
    }
    reset() {
        this.result = 0;
        return this;
    }

    add (num) {
        this.result = num + this.result;
        return this;
    }

    sub (num) {
        this.result = this.result - num;
        return this;
    }

    mul (num) {
        this.result = this.result * num;
        return this;
    }

    div (num) {
        this.result = this.result / num;
        return this;
    }

    pow (num) {
        this.result = Math.pow (this.result, num);
        return this;
    }

    sqrt () {
        this.result = Math.sqrt (this.result);
        return this;
    }

    getResult () {
        let res = this.result;
        return res;
    }
}




class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

   toString (x, y) {
    super.toString ();
   
    let Point = [];
    let sum;
    let res;
    if (typeof this.x == 'number' || typeof this.y == 'number') {

        this.x = String (this.x);
        this.y = String (this.y);
        sum = this.x + " " + this.y;
    
    Point.push(sum);
    }
    else {
        sum = this.x + "" + this.y;
        Point.push(sum);
        
    } 
    res = 'Point[' + Point + ']';
    return res;
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
        point1 = new Point (this.x, this.y);
        point2 = new Point (this.x, this.y);
        this.point1 = point1;
        this.point2 = point2;
       
    }

    toString (point1, point2) {
        super.toString ();
       let first = this.point1.toString();
        let second = this.point2.toString();
        let Line = "Line ([" + first +']' + "-" + "[" + second + '])';
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
        super.toString();
        let cur = this.toString(this.x, this.y);
        let res = this.weight + "&" + cur;
        return res;
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

