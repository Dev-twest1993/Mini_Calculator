let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let add = document.querySelector("#add");
let minus = document.querySelector("#minus");
let mult = document.querySelector("#mult");
let reset = document.querySelector("#reset");
let displayResult = document.querySelector("#displayResult");



//functions
function addTwoNumbers(a, b){
    let sum = a + b;
    return sum;
}
function subTwoNumbers(a, b){
    let difference = a - b;
    return difference;
}
function multTwoNumbers(a, b){
    let product = a * b;
    return product;
}
function divideTwoNumbers(a, b){
    let quotient = a / b;
    return quotient;
}



add.addEventListener('click', function(){

    //capture inputs and convert to int
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 
    if(num_1 >= 1){ 
    displayResult.innerHTML = addTwoNumbers(num_1, num_2);
    }else{
        displayResult.innerHTML = "Enter a number!";
    }
})

minus.addEventListener('click', function(){

    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 
    if(num_1 >= 1){ 
    displayResult.innerHTML = subTwoNumbers(num_1, num_2);
    }else{
        displayResult.innerHTML = "Enter a number!";
    }
    
})

mult.addEventListener('click', function(){

    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);  
    if(num_1 >= 1){
    displayResult.innerHTML = multTwoNumbers(num_1, num_2);
    } else{
        displayResult.innerHTML = "Enter a number!";
    }
})

divide.addEventListener('click', function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value); 
    if(num_1 >= 1){
        displayResult.innerHTML = divideTwoNumbers(num_1, num_2); 
    } else{
        displayResult.innerHTML = "Enter a number!";
    }
})

reset.addEventListener('click', function(){
    displayResult.innerHTML = "0"
    num1.value = "";
    num2.value = ""; 
})