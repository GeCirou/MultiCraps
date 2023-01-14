var total9 = 0;
var total7 = 0;
var total31 = 0;
var total15 = 0;
var total120 = 0;
var total150 = 0;
var total2 = 0;

var aleat = 0;

var score = 0;
var intento = 0;


//Generar números aleatorios
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
function generar120() {
    var max120 = document.getElementById("max120").value / 100;
    var min120 = document.getElementById("min120").value / 100;
    document.getElementById('lbl120').innerHTML = numeroAleatorio(min120, max120);
    aleat = document.getElementById('lbl120').innerHTML = numeroAleatorio(min120, max120);
    total120 = aleat * 1.2;
}
function generar150() {
    var max150 = document.getElementById("max150").value / 100;
    var min150 = document.getElementById("min150").value / 100;
    document.getElementById('lbl150').innerHTML = numeroAleatorio(min150, max150);
    aleat = document.getElementById('lbl150').innerHTML = numeroAleatorio(min150, max150);
    total150 = aleat * 1.5;
}
function generar2() {
    var max2 = document.getElementById("max2").value / 100;
    var min2 = document.getElementById("min2").value / 100;
    document.getElementById('lbl2').innerHTML = numeroAleatorio(min2, max2);
    aleat = document.getElementById('lbl2').innerHTML = numeroAleatorio(min2, max2);
    total2 = aleat * 2;
}

//Dar resultado
function probar9(){
    var resu9  = document.getElementById("result9");
    var res9 = resu9.value;
    var prueba9 = res9 - total9;
    if (prueba9 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total9 + ". No " + res9);
        score -= 1;
    }
    intento += 1;
    resu9.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar7(){
    var resu7 = document.getElementById("result7");
    var res7 = resu7.value;
    var prueba7 = res7 - total7;
    if (prueba7 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total7 + ". No " + res7);
        score -= 1;
    }
    intento += 1;
    resu7.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar31(){
    var resu31 = document.getElementById("result31");
    var res31 = resu31.value;
    var prueba31 = res31 - total31;
    if (prueba31 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total31 + ". No " + res31);
        score -= 1;
    }
    intento += 1;
    resu31.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar15(){
    var resu15 = document.getElementById("result15");
    var res15 = resu15.value;
    var prueba15 = res15 - total15;
    if (prueba15 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total15 + ". No " + res15);
        score -= 1;
    }
    intento += 1;
    resu15.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar120(){
    var resu120 = document.getElementById("result120");
    var res120 = resu120.value;
    var prueba120 = res120 - total120;
    if (prueba120 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total120 + ". No " + res120);
        score -= 1;
    }
    intento += 1;
    resu120.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar150(){
    var resu150 = document.getElementById("result150");
    var res150 = resu150.value;
    var prueba150 = res150 - total150;
    if (prueba150 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total150 + ". No " + res150);
        score -= 1;
    }
    intento += 1;
    resu150.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar2(){
    var resu2 = document.getElementById("result2");
    var res2 = resu2.value;
    var prueba2 = res2 - total2;
    if (prueba2 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total2 + ". No " + res2);
        score -= 1;
    }
    intento += 1;
    resu2.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}

//Limpiar campos
function limpiarMin9() {
    min9.value = "";
}
function limpiarMax9() {
    max9.value = "";
}
function limpiarMin7() {
    min7.value = "";
}
function limpiarMax7() {
    max7.value = "";
}
function limpiarMin31() {
    min31.value = "";
}
function limpiarMax31() {
    max31.value = "";
}
function limpiarMin15() {
    min15.value = "";
}
function limpiarMax15() {
    max15.value = "";
}
function limpiarMin120() {
    min120.value = "";
}
function limpiarMax120() {
    max120.value = "";
}
function limpiarMin150() {
    min150.value = "";
}
function limpiarMax150() {
    max150.value = "";
}
function limpiarMin2() {
    min2.value = "";
}
function limpiarMax2() {
    max2.value = "";
}