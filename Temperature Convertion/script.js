const input=document.getElementById("textBox");
const toCelcius=document.getElementById("toCelcius");
const toFarenheit=document.getElementById("toFarenheit");
const result=document.getElementById("result");
let temp;

function convert(){
    if(toCelcius.checked){
        temp=Number(input.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+`°C`;
    }
    else if(toFarenheit.checked){
        temp=Number(input.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+`°F`;
    }
    else{
        result.textContent=`Select a unit`;
    }
}
