function myString(name) {
    return "Hello!" + " " + "My name is " + name

}; 

console.log(myString("Emily"))



const object1 = [{
    a: 1, 
    b: 2, 
    c: 3, 
}, 
{
    a: 'apples', 
    b: 'coconuts', 
    c: 'banannas',  

}, 
]; 



function keysAndValues(obj){
  let a = Object.keys(obj); 
  let b = Object.values(obj);
  let c = [a, b];

  return c; 
 }

 console.log(keysAndValues(object1)); 