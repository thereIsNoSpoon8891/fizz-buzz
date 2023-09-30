/////////////////////////// FIZZBUZZ Challenge //////////////////////////////

// a JS function CAN NOT return more than on value, so, if you need to return more than one value
// you can return an array, an object, or a "Tuple-like Structure", although JS does NOT have a 
// built-in tuple data type, you can simulate one like this... 
// const person = ["bob", 31, "123 main st."]
// a tuple is a data structure that represents a collection of multiple values, where each
// valuecan have a different type. Unlike arrays, tuples are typically fixed-length and immutable.
    
 function fizzBuzz(n){  
   let fizz = "fizz"
   let buzz = "buzz"
   let fizzBuzzz = "fizzbuzz"
   let fizzArray = []

  const count = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
  }
    for (i = 1; i <= n; i++) {// start at 1 to avoid the initial fizzbuzz
   fizzArray.push([i])
 if (i % 3 === 0){
    fizzArray.pop(i)
    fizzArray.push(fizz)
    count.fizz++
 } 
 if (i % 5 === 0) {
    fizzArray.pop(i)
    fizzArray.push(buzz)
    count.buzz++
 }
 if (i % 3 === 0 && i % 5 === 0){
    fizzArray.pop(i)
    fizzArray.push(fizzBuzzz)
    count.fizzbuzz++
 }
 if(i % 3 !== 0 || i % 5 !==0){
    //console.log(i)
        } 
    }
    return {
      result: fizzArray,
      accumulator: count
    }
}


//console.log(fizzBuzz())


console.log(fizzBuzz(100))
     
 // switch and case is NOT working... why?????
 
 /*function number(){
    for (i = 0; i <= 100; i++){
 
switch (i) {
  case i % 3 === 0:
    console.log('works');
    break;
  case i % 5 === 0:
    console.log('works2')
    break;
case i % 3 === 0 && i % 5 === 0:
    console.log("test3")
  
    default:
    console.log(i);
        }
    }
}
console.log(number())*/