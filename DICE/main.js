let buttonEl = document.getElementById("roll-button");
    let diceEl = document.getElementById("dice");
   


   function rollDice () {
    let RollResult = Math.floor(Math.random() * 6) + 1;
    let DiceFace = GetDiceFace(RollResult);
    diceEl.innerHTML = DiceFace;
   }


   function GetDiceFace (RollResult) {
    switch (RollResult){

        case 1 :
        return "&#9856;";
        case 2 :     
        return "&#9857;";
        case 3 :
        return "&#9858;";
        case 4 :
        return "&#9859;";
        case 5 :
        return "&#9860;";
        case 6 :
        return "&#9861;";
        default :
        return "";

    }

   }
  
    buttonEl.addEventListener("click",()=>{

        diceEl.classList.add("roll-animation");

        setTimeout(()=>{

         diceEl.classList.remove("roll-animation");},1000)
         rollDice ();
         
    });