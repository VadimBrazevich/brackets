module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  let stack = [];
  let opend = [];
  let closed = [];
  
  bracketsConfig.forEach(x=>{
    opend.push(x[0]);
    closed.push (x[1]);
  });

  str.split("").forEach(x => {

    if (opend.includes(x) && closed.includes(x)){
      if (stack[stack.length-1]==x) stack.pop()
      else stack.push(x)
    }
    else if (opend.includes(x)) {
      stack.push(x);
    }
    else{ 
    let a = stack.pop();
    let b = opend[closed.indexOf(x)];      
    if(a != b) {
        stack.push(a);
      }
    } 
  }); 
  console.log(stack.length);
  return stack.length == 0;
}
