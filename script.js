function Enter (){

let kilo = document.getElementById('kilo').value;
let miles = document.getElementById('miles');

if(isNaN(kilo)){
   kilo.innerHTML = '';
}
else {
    let milesOutput = 0.62137119 * (kilo);
    miles.innerHTML=  milesOutput;
}
 
}
