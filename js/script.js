var lista = document.querySelectorAll(".lista p")
//matriz de nombres de clases con los diferentes colores
var colores = ["verde","azul","amarillo","rojo","rosa","rojo-oscuro","naranja","violeta","marron"]
var colorcount = 0;

// Matriz sopa
var sopa = new Array(9);
var soparandom = Math.floor(Math.random() * sopas.length);
// soparandom = 11
sopa = sopas[soparandom];
soluciones = solucionesBD[soparandom];
for (let i = 0; i < lista.length; i++) {
    lista[i].innerHTML = listasol[soparandom][i];
    
}
// Obtén la referencia a la tabla
var tabla = document.getElementById("tablaSopa");

// Recorre la matriz y agrega cada letra a la tabla

tedes = document.querySelectorAll('#tablaSopa td')
//Array que guardará las coordenadas de las letras seleccionadas
var pulsadosCOORD = new Array()
//Array que guardará los TDS de las letras pulsadas
var pulsadosTDS = new Array()



j = 0
k = 0
for (let i = 0; i < tedes.length; i++) {
    tedes[i].innerHTML = sopa[j][k]
    k++
    if (k == sopa[0].length) {
        k = 0
        j++
    }
}


function clickletra(celda, coor1, coor2) {
    // alert(coor1+","+coor2)
    // Verifica si la celda tiene un fondo
    if (celda.style.backgroundColor === "lightgreen") {
        // Si tiene un fondo, vuelve al color de fondo original
        pulsadosCOORD = pulsadosCOORD.filter(function (coordenada) {
            return coordenada !== coor1+","+coor2;
        });
        pulsadosTDS = pulsadosTDS.filter(function (tdborrar) {
            return tdborrar !== celda;
        });
        // pulsadosCOORD.remove(coor1+","+coor2);
        celda.style.backgroundColor = "";
    } else {
        // Si no tiene un fondo, cambia el color de fondo
        pulsadosCOORD.push(coor1+","+coor2);
        pulsadosTDS.push(celda)
        celda.style.backgroundColor = "lightgreen";
    }
    for (const key in soluciones) {
        var pulsadosACT = pulsadosCOORD.sort();

        // alert(pulsadosCOORD+"->"+pulsadosACT);
        soluciones[key]=soluciones[key].sort();
        if (soluciones[key].toString() == pulsadosACT.toString()) {
            pulsadosCOORD=[]
            soluciones[key]=["nada"]
            document.getElementById(key).classList.add("tachado");
            for (let i = 0; i < pulsadosTDS.length; i++) {
                pulsadosTDS[i].style.backgroundColor = "";
                pulsadosTDS[i].classList.add(colores[colorcount])
            }
            pulsadosTDS=[]
            colorcount++
        } 
    } 
    for (let i = 0; i < lista.length; i++) {
        estaTachado = lista[i].classList.contains('tachado')
        
        if (!estaTachado) {
            break;
        }
        if (i==(lista.length-1)) {
            
            confettiEffect();
            mensajexito()
        }
    }
    // alert(pulsadosCOORD +"="+ soluciones["melon"] )
    // alert(pulsadosTDS)
}


function reset()
{
    location.reload();
}

function mensajexito() {
    // Mensaje fin de juego
    var mensaje = document.getElementById("texto");
    mensaje.textContent = "Totes les paraules trobades!";
    mensaje.style.transform = "scale(1.5)"; 
}