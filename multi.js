

var total9 = 0;
var total7 = 0;
var total31 = 0;
var total15 = 0;

var aleat = 0;

function numeroAleatorio(min, max) { 
    return parseInt(Math.random() * (max - min) + min) * 100;
} 

function generar9() {
    var max9 = document.getElementById("max9").value / 100;
    var min9 = document.getElementById("min9").value / 100;
    document.getElementById('lbl9').innerHTML = numeroAleatorio(min9, max9);
    aleat = document.getElementById('lbl9').innerHTML = numeroAleatorio(min9, max9);
    total9 = aleat * 9;
}
function generar7() {
    var max7 = document.getElementById("max7").value / 100;
    var min7 = document.getElementById("min7").value / 100;
    document.getElementById('lbl7').innerHTML = numeroAleatorio(min7, max7);
    aleat = document.getElementById('lbl7').innerHTML = numeroAleatorio(min7, max7);
    total7 = aleat * 7;
}
function generar31() {
    var max31 = document.getElementById("max31").value / 100;
    var min31 = document.getElementById("min31").value / 100;
    document.getElementById('lbl31').innerHTML = numeroAleatorio(min31, max31);
    aleat = document.getElementById('lbl31').innerHTML = numeroAleatorio(min31, max31);
    total31 = aleat * 31;
}
function generar15() {
    var max15 = document.getElementById("max15").value / 100;
    var min15 = document.getElementById("min15").value / 100;
    document.getElementById('lbl15').innerHTML = numeroAleatorio(min15, max15);
    aleat = document.getElementById('lbl15').innerHTML = numeroAleatorio(min15, max15);
    total15 = aleat * 15;
}

function probar9(){
    var res9 = document.getElementById("result9").value;
    var prueba9 = res9 - total9;
    if (prueba9 === 0) {
        alert("Muy bien!");
    }
    else {
        alert("El total es de " + total9 + ". No " + res9);
    }
}
function probar7(){
    var res7 = document.getElementById("result7").value;
    var prueba7 = res7 - total7;
    if (prueba7 === 0) {
        alert("Muy bien!");
    }
    else {
        alert("El total es de " + total7 + ". No " + res7);
    }
}
function probar31(){
    var res31 = document.getElementById("result31").value;
    var prueba31 = res31 - total31;
    if (prueba31 === 0) {
        alert("Muy bien!");
    }
    else {
        alert("El total es de " + total31 + ". No " + res31);
    }
}
function probar15(){
    var res15 = document.getElementById("result15").value;
    var prueba15 = res15 - total15;
    if (prueba15 === 0) {
        alert("Muy bien!");
    }
    else {
        alert("El total es de " + total15 + ". No " + res15);
    }
}