var total9 = 0;
var total7 = 0;
var total31 = 0;
var total15 = 0;
var total120 = 0;
var total150 = 0;
var total2 = 0;
var total83 = 0;
var total66 = 0;
var total05 = 0;

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
    total120 = Math.round(aleat * 0.012) * 100;
}
function generar150() {
    var max150 = document.getElementById("max150").value / 100;
    var min150 = document.getElementById("min150").value / 100;
    document.getElementById('lbl150').innerHTML = numeroAleatorio(min150, max150);
    aleat = document.getElementById('lbl150').innerHTML = numeroAleatorio(min150, max150);
    total150 = Math.round(aleat * 0.015) * 100;
}
function generar2() {
    var max2 = document.getElementById("max2").value / 100;
    var min2 = document.getElementById("min2").value / 100;
    document.getElementById('lbl2').innerHTML = numeroAleatorio(min2, max2);
    aleat = document.getElementById('lbl2').innerHTML = numeroAleatorio(min2, max2);
    total2 = aleat * 2;
}
//Malas
function generar83() {
    var max83 = document.getElementById("max83").value / 100;
    var min83 = document.getElementById("min83").value / 100;
    document.getElementById('lbl83').innerHTML = numeroAleatorio(min83, max83);
    aleat = document.getElementById('lbl83').innerHTML = numeroAleatorio(min83, max83);
    total83 = Math.round(aleat * 0.00833) * 100;
}
function generar66() {
    var max66 = document.getElementById("max66").value / 100;
    var min66 = document.getElementById("min66").value / 100;
    document.getElementById('lbl66').innerHTML = numeroAleatorio(min66, max66);
    aleat = document.getElementById('lbl66').innerHTML = numeroAleatorio(min66, max66);
    total66 = Math.round(aleat * 0.00666) * 100;
}
function generar05() {
    var max05 = document.getElementById("max05").value / 100;
    var min05 = document.getElementById("min05").value / 100;
    document.getElementById('lbl05').innerHTML = numeroAleatorio(min05, max05);
    aleat = document.getElementById('lbl05').innerHTML = numeroAleatorio(min05, max05);
    total05 = Math.round(aleat / 200) * 100;
}

//Dar resultado
//Camuninas
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

//Cuadro
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

//Enganches
//Buenas
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

//malas
function probar83(){
    var resu83 = document.getElementById("result83");
    var res83 = resu83.value;
    var prueba83 = res83 - total83;
    if (prueba83 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total83 + ". No " + res83);
        score -= 1;
    }
    intento += 1;
    resu83.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar66(){
    var resu66 = document.getElementById("result66");
    var res66 = resu66.value;
    var prueba66 = res66 - total66;
    if (prueba66 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total66 + ". No " + res66);
        score -= 1;
    }
    intento += 1;
    resu66.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}
function probar05(){
    var resu05 = document.getElementById("result05");
    var res05 = resu05.value;
    var prueba05 = res05 - total05;
    if (prueba05 === 0) {
        alert("Muy bien!");
        score += 1;
    }
    else {
        alert("El total es de " + total05 + ". No " + res05);
        score -= 1;
    }
    intento += 1;
    resu05.value = "";
    document.getElementById("lblScr").innerHTML = score;
    document.getElementById("lblTry").innerHTML = intento;
}

//Limpiar campos
//Camuninas
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

//Cuadro
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

//Enganche
//Buenas
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
//Malas
function limpiarMin83() {
    min83.value = "";
}
function limpiarMax83() {
    max83.value = "";
}
function limpiarMin66() {
    min66.value = "";
}
function limpiarMax66() {
    max66.value = "";
}
function limpiarMin05() {
    min05.value = "";
}
function limpiarMax05() {
    max05.value = "";
}