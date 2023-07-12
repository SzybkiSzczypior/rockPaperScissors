const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");

const playerInput = [r,p,s];
const computerInput = ["r"]
//document.getElementById("r").addEventListener("click",function () {
   // alert("hello");
  //  console.log("hello");
   // 
//})/


playerInput.forEach(input => input.addEventListener("click",(e) => {
    const showInput = document.getElementById("showInput");
    const rps1 = e.target.id; 
    showInput.innerHTML= rps1;

}))





