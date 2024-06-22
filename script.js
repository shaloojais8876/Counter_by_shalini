let output = document.querySelector("span");
let redError = document.querySelector("#error");
redError.style.cssText = `
color:red;
margin-top:20px;
`
let count = 0;

let incrbtn = document.querySelector("#increase");
let decrbtn = document.querySelector("#decrease");
let clrbtn = document.querySelector("#clear");

if(output.innerText == 0){
    clrbtn.style.display = "none";
  }

incrbtn.addEventListener("click", () => {
    count++;
    output.innerHTML = " " +  count;
    redError.innerHTML="";
    clrbtn.style.display = "inline";
});

decrbtn.addEventListener("click", () => {
    count--;
    if(count<0){
        count=0;
        redError.innerHTML = "Error : Cannot go below 0"
    }
    else{
        output.innerHTML = " " + count;
        redError.innerHTML="";
    }
});

clrbtn.addEventListener("click", () => {
    count = 0;
    output.innerHTML = " " + count;
    redError.innerHTML="";
});