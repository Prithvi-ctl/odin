import "./style.css";




let counter = 0;
const btn = document.querySelector(".btn");
const label = document.querySelector(".btna");
const body = document.querySelector(".mn");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".img");

const phases = {
    1: { text: "i told you nothing happens" },
    2: { text: "Sir, can you please not press the button again?" },
    3: { text: "I said nothing happens, please stop pressing the button" },
    4: { text: "Sir, I am warning you, please stop pressing the button", bgClass: "a" },
    5: { text: "Sir, I am going to have to ask you to leave if you keep pressing the button", bgClass: "b" },
    6: { text: "Sir, this is your last warning, please stop pressing the button", bgClass: "c" },
    7: { text: "I said stop pressing this button , mf", bgClass: "d" },
    8: { text: "Ohh,do you feel good about yourself now?", bgClass: "e" },
    9: { text: "Well, it doesn't matter at all to me, you are just an insignificant being not worth my time", bgClass: "f" },
    10: { text: "Nooo..... , the central finite curve", bgClass: "g" },
    11: { text: "static noises", bgClass: "h" },
    12: { text: "..............", bgClass: "i" },
    13:{text:"",bgClass:"j"}}
btn.addEventListener("click",()=>{
    
    btn.classList.toggle("color");
    setTimeout(()=>{
    btn.classList.remove("color")},250)  ;

    

    counter++;

  if(phases[counter]){
    const currentphase = phases[counter];
    label.textContent = currentphase.text;

    if(currentphase.bgClass){
        body.classList.add(currentphase.bgClass);
    }
  }     

  if(counter === 14){
    left.classList.add("active");
    right.classList.add("active");
     btn.classList.add("hide");
    setTimeout(()=>{
       
        img.classList.add("show");h
        
    
    },6000)
  }
  
  
    
})