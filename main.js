const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerInput = [rock,paper,scissors];

//document.getElementById("r").addEventListener("click",function () {
   // alert("hello");
  //  console.log("hello");
   // 
//})/


playerInput.forEach(input => input.addEventListener("click",(e) => {
    //const showInput = document.getElementById("showInput");
    const rps1 = e.target.id; 
  //  showInput.innerHTML= rps1;
    const computerInput = ['rock','paper','scissors'];
   
   const random = Math.floor(Math.random() * 3);
    
    const computerChoice = computerInput[random];
   console.log(computerChoice);
   const sw = document.getElementById("showWinner")
    if (computerChoice == rps1) {
       
          sw.textContent = "draw";
    }
    else if(computerChoice == 'rock') {
        if (rps1 == 'scissors') {
            sw.textContent= "Computer won";         
        } else {
            sw.textContent= "Player lost"; 

            
        }
        
        
    }else if (computerChoice== 'scissors') {
        if (rps1 == 'paper') {
            sw.textContent= "Computer won";
            
        }else{
            sw.textContent= "Player lost";
        }
    }else if (computerChoice == 'paper') {
        if (rps1 == 'rock') {
            sw.textContent= "Computer won";
        }else {
            sw.textContent= "Player lost";
        }
        
    }
      
    
}))










