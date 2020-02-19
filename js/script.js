var numeros = document.getElementById("numeros");
var letras  = document.getElementById("letras");


function b1() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6,7,8,9,0") {
        letras.innerHTML="A";
    } else {
        
    }
    if (aux == '') {
        numeros.innerHTML="1";
    }    
}
function b2() {
    var aux = numeros.innerText; // contenido del div numeros
    var aux2 = letras.innerText; // contenido del div letras
    if (aux2 == "A") { // Valido si el div de las letras ya tiene una A
        letras.innerHTML="A,B"; // Asigno el A,B al div letras
    } else { // Si no tiene una A el div letras
        // Valido que el div letras este vacio y que el div numeros este hasta el 0
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            // Muestro la alerta de que falta un aletra 
            alert("falta una letra");
        }  
    }
    if (aux == "1") { //valido si el div numeros tiene un 1
        numeros.innerHTML="1,2"; // asigno el 1,2
    } else { // si el div numeros no tiene un 1
        if (aux == '') { // valido si esta vacio
            alert("falta un numero"); // informo que falta un numero para asignar 1,2
        } 
        
    }
    
}


function b3() {
    var aux = numeros.innerText;
    if (aux == "1,2") {
        numeros.innerHTML="1,2,3";
    } else {
        if (aux != '1,2') {
            alert("falta un numero");
        } 
        
    }
    
}


function b4() {
    var aux = numeros.innerText;
    if (aux == "1,2,3") {
        numeros.innerHTML="1,2,3,4";
    } else {
        if (aux != '1,2,3') {
            alert("falta un numero");
        } 
        
    }
    
}

function b5() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4") {
        numeros.innerHTML="1,2,3,4,5";
    } else {
        if (aux != '1,2,3,4') {
            alert("falta un numero");
        } 
        
    }
    
}

function b6() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5") {
        numeros.innerHTML="1,2,3,4,5,6";
    } else {
        if (aux != '1,2,3,4,5') {
            alert("falta un numero");
        } 
        
    }
    
}

function b7() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6") {
        numeros.innerHTML="1,2,3,4,5,6,7";
    } else {
        if (aux != '1,2,3,4,5,6') {
            alert("falta un numero");
        } 
        
    }
    
}

function b8() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6,7") {
        numeros.innerHTML="1,2,3,4,5,6,7,8";
    } else {
        if (aux != '1,2,3,4,5,6,7') {
            alert("falta un numero");
        } 
        
    }
    
}

function b9() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6,7,8") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9";
    } else {
        if (aux != '1,2,3,4,5,6,7,8') {
            alert("falta un numero");
        } 
        
    }
    
}

function b0() {
    var aux = numeros.innerText;
    if (aux == "1,2,3,4,5,6,7,8,9") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9,0";
    } else {
        if (aux != '1,2,3,4,5,6,7,8,9') {
            alert("falta un numero");
        } 
        
    }
    
}