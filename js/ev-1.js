let mostrarL = document.getElementById("mostrar-letras");
let mostrarN = document.getElementById("mostrar-numeros");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let btn7 = document.getElementById("btn-7");
let btn8 = document.getElementById("btn-8");
let btn9 = document.getElementById("btn-9");
let btn10 = document.getElementById("btn-10");
let btn11= document.getElementById("btn-11");
let btn12= document.getElementById("btn-12");

btn1.onclick = function () {
    if(mostrarL.innerHTML === "ABCDEFGHIJ") {
        mostrarN.innerHTML = "1"
    } else{
        mostrarL.innerHTML = "A"
        
    }
}

btn2.onclick = function() {
    if(mostrarL.innerHTML === "A") {
        mostrarL.innerHTML = "AB"
    } else if(mostrarN.innerHTML === "1"){
        mostrarN.innerHTML = "12"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn3.onclick = function() {
    if(mostrarL.innerHTML === "AB") {
        mostrarL.innerHTML = "ABC"
    } else if(mostrarN.innerHTML === "12"){
        mostrarN.innerHTML = "123"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}

btn4.onclick = function() {
    if(mostrarL.innerHTML === "ABC") {
        mostrarL.innerHTML = "ABCD"
    } else if(mostrarN.innerHTML === "123"){
        mostrarN.innerHTML = "1234"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn5.onclick = function() {
    if(mostrarL.innerHTML === "ABCD") {
        mostrarL.innerHTML = "ABCDE"
    } else if(mostrarN.innerHTML === "1234"){
        mostrarN.innerHTML = "12345"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn6.onclick = function() {
    if(mostrarL.innerHTML === "ABCDE") {
        mostrarL.innerHTML = "ABCDEF"
    } else if(mostrarN.innerHTML === "12345"){
        mostrarN.innerHTML = "123456"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn7.onclick = function() {
    if(mostrarL.innerHTML === "ABCDEF") {
        mostrarL.innerHTML = "ABCDEFG"
    } else if(mostrarN.innerHTML === "123456"){
        mostrarN.innerHTML = "1234567"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn8.onclick = function() {
    if(mostrarL.innerHTML === "ABCDEFG") {
        mostrarL.innerHTML = "ABCDEFGH"
    }  else if(mostrarN.innerHTML === "1234567"){
        mostrarN.innerHTML = "12345678"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn9.onclick = function() {
    if(mostrarL.innerHTML === "ABCDEFGH") {
        mostrarL.innerHTML = "ABCDEFGHI"
    } else if(mostrarN.innerHTML === "12345678"){
        mostrarN.innerHTML = "123456789"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}
btn11.onclick = function() {
    if(mostrarL.innerHTML === "ABCDEFGHI") {
        mostrarL.innerHTML = "ABCDEFGHIJ"
    } else if(mostrarN.innerHTML === "123456789"){
        mostrarN.innerHTML = "1234567890"               
    }else{
        alert("FALTAN LETRAS O NÚMEROS!")
    }
}