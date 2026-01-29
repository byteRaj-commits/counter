const text = document.getElementById("text");
const button = document.getElementById("btn");

let count = 0;

button.addEventListener("click", function(){
    count = count+1;
    text.textContent = `You have clicked ${count} times`;

})