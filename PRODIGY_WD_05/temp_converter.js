let celinput = document.querySelector('.cell');
let farinput = document.querySelector('.Far');
let kelinput = document.querySelector('.Kel');

let btn = document.querySelector("#cl")

function roundNumber(num) {
    return Math.round(num * 100) / 100
}

celinput.addEventListener('input', function () {
    let ctemp = parseFloat(celinput.value);  // Corrected variable name
    let ftem = (ctemp * (9 / 5)) + 32;  // Corrected the formula
    let ktem = ctemp + 273.15;  // Corrected the formula

    farinput.value = roundNumber(ftem);
    kelinput.value = roundNumber(ktem);
})
farinput.addEventListener('input', function () {
    let ftem = parseFloat(farinput.value);
    let ctemp = (ftem-32)*(5/9);  // Corrected variable name
    
    let ktem = (ftem-32)*(5/9) + 273.15;  // Corrected the formula

    celinput.value = roundNumber(ctemp);
    kelinput.value = roundNumber(ktem);
})
kelinput.addEventListener('input', function () {
    let ktem = parseFloat(kelinput.value); 
    let ctemp = ktem - 273.15;  // Corrected variable name
    let ftem = ( ktem - 273.15)*(9/5)*32 ;  // Corrected the formula
    // Correct   ed the formula

    celinput.value = roundNumber(ctemp);
    farinput.value = roundNumber(ftem);
})

btn.addEventListener('click',function(){

    celinput.value=" "
    farinput.value =" "
    kelinput.value=" "
})