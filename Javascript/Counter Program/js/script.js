let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let outputArea = document.getElementById("outputArea");

let temp= 0;

increase.addEventListener("click", () => {

    temp++;    
    outputArea.innerHTML = temp;

})

decrease.addEventListener("click", () => {

    if (temp > 0) {
        temp--;
        outputArea.innerHTML = temp;
    } 
    
})



