let backBtn= document.querySelector(".container .scientific-btns .back-btn");
let scientificBtnBox = document.querySelector(".container .scientific-btns");
let lightModeBtn = document.querySelector(".container .input-box .toggle-btn #light-mode-btn");
let darkModeBtn = document.querySelector(".container .input-box .toggle-btn #dark-mode-btn");
let container= document.querySelector(".container");
let input = document.querySelector(".container .input-box input");
let result = document.querySelector(".container .input-box .result");
let allBtns = document.querySelectorAll(".container .btn");

for (let items of allBtns) {
  items.addEventListener("click",(e)=>{
    let btnText = e.target.innerHTML;
    if(btnText == "x"){
      btnText = '*';
    }
    input.value += btnText;
  })
  
}
   let calculate = ()=>{
    result.innerHTML=eval(input.value);
   }

   let backspace=()=>{
    input.value=input.value.substr(0, input.value.length-1);
      if(input.value == 0){
        result.innerHTML="0";
      }
   }
    let sin =()=>{
      result.innerHTML = Math.sin(result.innerHTML)
    }

    let cos =()=>{
      result.innerHTML = Math.cos(result.innerHTML)
    }
    let tan =()=>{
      result.innerHTML = Math.tan(result.innerHTML)
    }
    let fact =()=>{
      var i, number, x;
      x=1;
      number = result.innerHTML;
      for(i =1; i<=number;i++){
        x= x * 1;
      }
      i= i-1;
      result.innerHTML = x;
    }



    let pi =()=>{
      input.value=3.142;
    }


    let log =()=>{
      result.innerHTML= Math.log(result.innerHTML);
    }



    let root =()=>{
      result.innerHTML= Math.sqrt(result.innerHTML, 2);
    }

    let e =()=>{
      input.value = "2.71828";
    }

    let pow =()=>{
      result.innerHTML = Math.pow(result.innerHTML, 2)
    }


    

backBtn.addEventListener("click",()=>{
  scientificBtnBox.classList.toggle("active")
})
lightModeBtn.addEventListener("click",()=>{
    container.classList.add("light");
    lightModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
})

let clearInput =()=>{
     input.value='';
     result.innerHTML = 0;
}