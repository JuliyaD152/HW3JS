console.log('Sample JavaScript #3 HW #17');

/*
 * #1
 */
var counter = function(){
    var count = 0;
        return function (i){
            if (i !== undefined){
                count = i;
            } 
          return count++;  
        }
}();

console.log (counter());
console.log (counter());
console.log (counter(100));
console.log (counter());
console.log (counter(500));
console.log (counter());
console.log (counter(0));
console.log (counter());

/*
 * #2
 */
var counting = (function  () {
    var count = 0;
        return {
            value: function(n){
                if(n!== undefined){
                    count = n
                }
                return count;
                },
                increment: function(){
                    return count++
                } ,
                decrement: function(){
                    return count--
                } ,
        }
    }());

  console.log(counting.value()); // 0
  console.log(counting.increment());
  counting.increment();
  counting.increment();
  console.log(counting.value()); // 3
  counting.decrement();
  counting.decrement();
  console.log(counting.value()); // 1
  console.log(counting.value(100)); // 100
  counting.decrement();
  console.log(counting.value()); // 99
  console.log(counting.value(200)); // 200
  counting.increment();
  console.log(counting.value()); // 201

/*
 * #3
 */

let myPow = function (a, b, callback) {
       let pow = (x,n) =>{
           if (n !== 1) return x*= pow(x,n - 1);
        return x;
    }
      return callback(a,b, pow(a,b));
 };

 let myPrint = (a, b, res) => `${a}^${b}=${res}`;

console.log(myPow(3,4, myPrint));
console.log(myPow(2,3, myPrint));

/*
 * #4, #5, #6
*/
let yearNow = new Date().getFullYear();

var car = {
    name: "Chevrole",
    model: "Lacetti",
    engine: 2000,
    year: 2010,
    _used: "used",
    get used(){
        if(car.year !== yearNow){
            return "used";
        }
        else {
            return "new"
        }         
    },
    set used(value){
        if(value === "new" && this.year !== yearNow ){
            this.year = yearNow; 
        }
    },
    info: allinfo
};

var car2 = {
    name: "Infinite",
    model: "FX50 AWD",
    engine:5000,
    year: 2020,
    _used: "new",
    get used(){
    if(car.year !== yearNow){
        return "used";
    }
    else {
        return "new"
    }         
},
set used(value){
    if(value === "new" && this.year !== yearNow ){
        this.year = yearNow; 
    }
},
     info: allinfo
 };
function allinfo(){
    return (this.name + " " + this.model + ", " + this.engine + "cc"+ ", " + "year " + this.year + ", " + this.used)
};

 console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used
 car.used = 'new';
 console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен
 car.used = 'used';
 console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются
 console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new
 car.used = 'used';
 console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются


/*
 * #7
 */

let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = (arr) => Math.max.apply(null, arr); 
    // let myMax = function(arr){
    //     Math.max.apply(null, arr)
    // }
console.log(myMax(list));

/*
 * #8
 */
var myMul = function(a,b){
    let res = a * b;
    return res
}
var myDouble = myMul.bind(null, 2);
var myTriple = myMul.bind (null, 3);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

/*
 * #9
 */

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7]; 
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

function myUniq (arr){
   let set = new Set();
   arr.forEach(function (value){
       set.add(value)
   });
    return set;
};

console.log (myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));