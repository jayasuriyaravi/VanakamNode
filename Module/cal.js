const{sub}=require("./sub");
function mul(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}
module.exports = { add,mul ,sub}; 
//module.exports returns empty object as default....
//user can add varible function into the object
