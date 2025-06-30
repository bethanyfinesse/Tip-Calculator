const input = document.getElementById("bill");
const input1 = document.getElementById("TipPercent");
const input2 = document.getElementById("total");
const input3 = document.getElementById("TipAmount");

function enter(){
    const bill = parseFloat(input.value) 
    const tipPercent = parseFloat(input1.value )
    const tip= parseFloat(tipPercent/100)*bill
alert(tip)

let total = (tip + bill)
input2.value+= total;
input3.value+= tip;

}
input3.value+= ""

input2.value=""
