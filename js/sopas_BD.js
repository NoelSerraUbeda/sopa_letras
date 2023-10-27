// SOPAS SIEMPRE DE 9X9 CON 9 SOLUCIONES
// Array de sopas

var sopas = [
    // SOPA 0
    [
        ["V", "A", "P", "O", "O", "U", "V", "A", "A"],
        ["C", "F", "R", "E", "S", "A", "E", "J", "I"],
        ["E", "R", "E", "T", "R", "S", "N", "R", "I"],
        ["R", "M", "A", "N", "Z", "A", "N", "A", "M"],
        ["E", "L", "U", "P", "R", "N", "A", "I", "E"],
        ["Z", "N", "I", "A", "E", "D", "N", "N", "L"],
        ["A", "E", "N", "M", "D", "I", "A", "N", "O"],
        ["Z", "D", "A", "I", "O", "A", "D", "A", "N"],
        ["E", "D", "D", "I", "S", "N", "R", "E", "P"]
    ],
    // SOPA 1
    [
        ["I","D","E","C","A","V","A","L","L"],
        ["A","N","E","C","A","E","T","R","E"],
        ["O","O","L","P","O","C","R","X","R"],
        ["C","N","V","V","U","X","A","A","B"],
        ["E","A","B","E","I","I","T","V","E"],
        ["L","S","L","O","L","O","E","C","L"],
        ["L","O","M","E","L","L","C","R","L"],
        ["A","I","N","I","L","A","A","O","E"],
        ["A","O","R","T","B","E","S","P","M"]
    ],
    // SOPA 2
    [
        ["M","O","L","I","N","E","T","B","A"],
        ["I","I","E","L","I","E","R","A","O"],
        ["I","O","P","C","E","I","P","L","I"],
        ["U","I","I","A","S","A","I","D","I"],
        ["S","B","T","O","T","E","D","U","D"],
        ["L","T","A","I","E","I","Y","F","G"],
        ["L","T","N","O","L","R","N","A","P"],
        ["N","S","N","I","N","A","S","E","B"],
        ["P","I","L","O","T","A","R","P","T"]
    ],
    // SOPA 3
    [
        ["G", "T", "A", "M", "B", "O", "R", "A", "C"],
        ["U", "S", "I", "T", "E", "L", "R", "L", "N"],
        ["I", "I", "B", "L", "T", "M", "N", "P", "I"],
        ["T", "A", "E", "A", "O", "C", "R", "I", "L"],
        ["A", "S", "R", "N", "T", "A", "I", "A", "O"],
        ["R", "T", "I", "P", "I", "E", "R", "N", "I"],
        ["R", "C", "N", "C", "A", "I", "R", "O", "V"],
        ["A", "M", "A", "R", "A", "C", "A", "I", "E"],
        ["F", "L", "A", "U", "T", "A", "E", "A", "A"]
    ],
    // SOPA 4
    [
        ["D","E","E","P","A","P","E","R","R"],
        ["S","I","P","A","L","L","S","R","S"],
        ["G","L","R","R","S","E","S","P","O"],
        ["O","T","L","D","R","L","C","A","E"],
        ["M","O","E","O","O","O","R","L","C"],
        ["A","X","S","M","L","L","S","G","E"],
        ["C","I","D","A","O","D","R","E","P"],
        ["T","N","M","T","C","G","S","R","O"],
        ["O","R","I","L","O","B","L","A","I"]
    ],
    // SOPA 5
    [
        ["Y", "V", "F", "V", "O", "F", "T", "A", "T"],
        ["L", "O", "B", "O", "D", "O", "R", "D", "T"],
        ["N", "C", "E", "B", "O", "C", "A", "I", "E"],
        ["I", "O", "U", "O", "E", "A", "B", "N", "Y"],
        ["F", "K", "S", "E", "L", "U", "A", "E", "L"],
        ["L", "O", "O", "L", "R", "L", "E", "O", "N"],
        ["E", "A", "N", "O", "A", "V", "I", "Y", "A"],
        ["D", "L", "N", "N", "O", "C", "O", "O", "L"],
        ["T", "A", "J", "I", "R", "A", "F", "A", "C"]
    ],
    // SOPA 6
    [
        ["U","L","Q","A","G","A","H","G","O"],
        ["S","E","E","N","A","O","I","F","R"],
        ["E","I","F","D","Q","E","E","U","U"],
        ["Q","B","N","U","A","R","L","T","G"],
        ["A","E","E","N","U","P","O","B","B"],
        ["S","I","X","D","E","R","V","O","I"],
        ["E","F","L","O","G","T","A","L","O"],
        ["R","D","A","N","S","A","D","R","C"],
        ["T","E","U","Q","S","A","B","I","N"]
    ],
    // SOPA 7
    [
        ["G", "R", "O", "M", "E", "R", "O", "X", "S"],
        ["E", "A", "C", "L", "A", "D", "Z", "U", "U"],
        ["R", "L", "E", "L", "L", "N", "T", "S", "C"],
        ["A", "O", "F", "U", "A", "C", "D", "G", "I"],
        ["N", "E", "C", "C", "A", "V", "E", "S", "F"],
        ["I", "A", "A", "C", "R", "E", "E", "D", "U"],
        ["O", "G", "C", "E", "S", "O", "A", "L", "A"],
        ["C", "R", "L", "O", "T", "O", "S", "O", "U"],
        ["L", "I", "R", "I", "O", "R", "P", "A", "R"]
    ],
    // SOPA 8
    [
        ["U", "T", "F", "R", "E", "D", "C", "S", "A"],
        ["S", "C", "E", "R", "O", "L", "A", "C", "O"],
        ["U", "E", "N", "M", "E", "O", "A", "V", "F"],
        ["U", "O", "D", "H", "P", "O", "O", "A", "I"],
        ["T", "L", "N", "U", "R", "E", "S", "C", "A"],
        ["N", "O", "O", "R", "E", "O", "S", "J", "A"],
        ["E", "V", "N", "A", "L", "E", "U", "T", "O"],
        ["V", "U", "A", "C", "L", "L", "A", "L", "A"],
        ["U", "N", "J", "A", "P", "T", "C", "E", "E"]
    ],
    // SOPA 9
    [
        ["A", "E", "R", "N", "L", "L", "B", "Z", "P"],
        ["A", "S", "Z", "B", "O", "T", "A", "E", "B"],
        ["N", "A", "I", "F", "B", "P", "T", "S", "U"],
        ["A", "B", "A", "M", "A", "U", "A", "P", "I"],
        ["F", "R", "A", "T", "A", "P", "A", "C", "R"],
        ["A", "I", "O", "C", "R", "C", "T", "A", "M"],
        ["L", "G", "C", "J", "E", "R", "S", "E", "Y"],
        ["D", "O", "G", "O", "R", "R", "A", "E", "B"],
        ["A", "N", "S", "J", "O", "L", "E", "R", "A"]
    ],
    // SOPA 10
    [
        ["P", "G", "R", "M", "L", "I", "L", "A", "D"],
        ["S", "A", "S", "O", "R", "E", "Z", "R", "U"],
        ["D", "Ñ", "L", "R", "D", "U", "N", "V", "O"],
        ["O", "I", "L", "A", "L", "A", "E", "O", "N"],
        ["E", "J", "S", "D", "R", "O", "G", "O", "O"],
        ["Z", "D", "O", "O", "D", "O", "R", "Ñ", "D"],
        ["Q", "E", "R", "R", "E", "R", "O", "S", "R"],
        ["O", "R", "A", "E", "A", "Ñ", "R", "O", "E"],
        ["G", "Y", "R", "M", "V", "A", "Ñ", "I", "L"]
    ],
    // SOPA 12
    [
        ["S", "A", "G", "A", "Z", "Z", "A", "U", "C"],
        ["I", "P", "A", "E", "A", "M", "O", "P", "E"],
        ["T", "S", "A", "R", "L", "N", "Z", "N", "A"],
        ["S", "P", "D", "S", "R", "A", "T", "P", "A"],
        ["A", "Z", "S", "E", "T", "R", "T", "I", "A"],
        ["P", "P", "A", "S", "E", "A", "Q", "Z", "I"],
        ["R", "J", "O", "P", "I", "G", "I", "Z", "R"],
        ["L", "P", "A", "S", "O", "R", "R", "A", "P"],
        ["A", "T", "R", "U", "I", "T", "A", "S", "N"]
    ],

]
var listasol = [
    // SOLUCIONES 0
    ["Pera","Manzana","Naranja","Uva","Melón","Sandía","Cereza","Fresa","Limón"],
    // SOLUCIONES 1
    ["Ocell","Moix","Cavall","Llebre","Porc","Vaca","Ratolí","Ànec","Ovella"],
    // SOLUCIONES 2
    ["Pilota","Patins","Molinet","Nina","Baldufa","Bici","Patinet","Estel","Io-Io"],
    // SOLUCIONES 3
    ["Guitarra", "Tambor", "Armónica", "Batería", "Arpa", "Maraca", "Flauta", "Piano", "Violín"],
    // SOLUCIONES 4
    ["Llapis","Paper","Tisores","Boli","Goma","Cola","Regla","Colors","Gomet"],
    // SOLUCIONES 5
    ["Koala", "Cuervo", "Oso", "Delfín", "Tiburón", "Lobo", "Foca", "León", "Jirafa"],
    // SOLUCIONES 6
    ["Futbol", "Bàsquet", "Golf", "Tennis", "Hoquei", "Rugbi", "Pàdel", "Vòlei", "Dansa"],
    // SOLUCIONES 7
    ["Geranio", "Cactus", "Rosa", "Clavel", "Ficus", "Loto", "Aloe", "Romero", "Lirio"],
    // SOLUCIONES 8
    ["Sol", "Pluja", "Vent", "Núvol", "Tempesta", "Calor", "Huracà", "Neu", "Fred"],
    // SOLUCIONES 9
    ["Gorra","Abrigo","Bota","Zapato","Falda","Reloj","Jersey","Camisa","Bata"],
    // SOLUCIONES 10
    ["Rojo","Verde","Azul","Rosa","Lila","Marrón","Morado","Negro","Añil"],
    // SOLUCIONES 11
    ["Entrepà","Pastís","Truita","Gelat","Pizza","Arròs","Pasta","Poma","Sopa"],
]
// PRIMERA COORDENADA FILA, SEGUNDA COORDENADA COLUMNA EMPEZANDO POR 0
var solucionesBD = [
    // COORDENADAS 0
    {
            lista1: ["0,2","1,3","2,4","3,5"],   // Coordenadas de Pera
            lista2: ["3,1","3,2","3,3","3,4","3,5","3,6","3,7"],    // Coordenadas de Manzana
            lista3: ["0,8","1,7","2,6","3,5","4,4","5,3","6,2"], // Coordenadas de Naranja
            lista4: ["0,5","0,6","0,7"],   // Coordenadas de Uva
            lista5: ["3,8","4,8","5,8","6,8","7,8"],   // Coordenadas de Melon
            lista6: ["2,5","3,5","4,5","5,5","6,5","7,5"],   // Coordenadas de Sandia
            lista7: ["1,0","2,0","3,0","4,0","5,0","6,0"],   // Coordenadas de Cereza
            lista8: ["1,1","1,2","1,3","1,4","1,5"], // Coordenadas de Fresa
            lista9: ["4,1","5,2","6,3","7,4","8,5"], // Coordenadas de Limon
    },
    // COORDENADAS 1
    {
        lista1: ["2,0","3,0","4,0","5,0","6,0"],   // Coordenadas de Ocell
        lista2: ["3,5","4,4","5,3","6,2"],    // Coordenadas de Moix
        lista3: ["0,3","0,4","0,5","0,6","0,7","0,8"], // Coordenadas de Cavall
        lista4: ["1,8","2,8","3,8","4,8","5,8","6,8"],   // Coordenadas de Llebre
        lista5: ["5,7","6,7","7,7","8,7"],   // Coordenadas de Porc
        lista6: ["1,4","2,5","3,6","4,7"],   // Coordenadas de Vaca
        lista7: ["2,8","3,7","4,6","5,5","6,4","7,3"],   // Coordenadas de Ratolí
        lista8: ["1,0","1,1","1,2","1,3"], // Coordenadas de Ànec
        lista9: ["2,1","3,2","4,3","5,4","6,5","7,6"], // Coordenadas de Ovella
    },
     // COORDENADAS 2
     {
        lista1: ["8,0","8,1","8,2","8,3","8,4","8,5"], // Coordenadas de pilota
        lista2: ["2,6","3,5","4,4","5,3","6,2","7,1"], // Coordenadas de patins
        lista3: ["0,0","0,1","0,2","0,3","0,4","0,5","0,6"],   // Coordenadas de molinet
        lista4: ["7,2","7,3","7,4","7,5"],   // Coordenadas de nina
        lista5: ["0,7","1,7","2,7","3,7","4,7","5,7","6,7"],    // Coordenadas de baldufa
        lista6: ["1,4","2,3","3,2","4,1"],   // Coordenadas de bici
        lista7: ["2,2","3,3","4,4","5,5","6,6","7,7","8,8"],   // Coordenadas de patinet
        lista8: ["2,4","3,4","4,4","5,4","6,4"], // Coordenadas de estel
        lista9: ["1,0","2,1","3,2","4,3"],   // Coordenadas de ioio
    },
     // COORDENADAS 3
     {
        lista1: ["0,0","1,0","2,0","3,0","4,0","5,0","6,0","7,0"],   // Coordenadas de Guitarra
        lista2: ["0,1","0,2","0,3","0,4","0,5","0,6"],    // Coordenadas de Tambor
        lista3: ["0,7","1,6","2,5","3,4","4,3","5,2","6,1","7,0"], // Coordenadas de Armonica
        lista4: ["2,2","3,3","4,4","5,5","6,6","7,7","8,8"],   // Coordenadas de Bateria
        lista5: ["3,1","4,2","5,3","6,4"],   // Coordenadas de Arpa
        lista6: ["7,1","7,2","7,3","7,4","7,5","7,6"],   // Coordenadas de Maraca
        lista7: ["8,0","8,1","8,2","8,3","8,4","8,5"],   // Coordenadas de Flauta
        lista8: ["2,7","3,7","4,7","5,7","6,7"], // Coordenadas de Piano
        lista9: ["6,8","5,8","4,8","3,8","2,8","1,8"], // Coordenadas de Violin
    },
     // COORDENADAS 4
     {
        lista1: ["1,0","1,1","1,2","1,3","1,4","1,5"],   // Coordenadas de llapis
        lista2: ["0,3","0,4","0,5","0,6","0,7"],    // Coordenadas de paper
        lista3: ["1,6","2,5","3,4","4,3","5,2","6,1","7,0"], // Coordenadas de tisores
        lista4: ["8,2","8,3","8,4","8,5"],   // Coordenadas de boli
        lista5: ["2,0","3,0","4,0","5,0"],   // Coordenadas de goma
        lista6: ["3,6","4,5","5,4","6,3"],   // Coordenadas de cola
        lista7: ["3,7","4,7","5,7","6,7","7,7"],   // Coordenadas de regla
        lista8: ["2,4","3,4","4,4","5,4","6,4","7,4"], // Coordenadas de colors
        lista9: ["3,1","4,2","5,3","6,4","7,5"], // Coordenadas de gomet
    },
     // COORDENADAS 5
     {
        lista1: ["4,1","5,1","6,1","7,1","8,1"],   // Coordenadas de Koala
        lista2: ["2,1","3,2","4,3","5,4","6,5","7,6"],    // Coordenadas de Cuervo
        lista3: ["3,3","4,2","5,1"], // Coordenadas de Oso
        lista4: ["2,0","3,0","4,0","5,0","6,0","7,0"],   // Coordenadas de Delfín
        lista5: ["1,8","2,7","3,6","4,5","5,4","6,3","7,2"],   // Coordenadas de Tiburón
        lista6: ["1,0","1,1","1,2","1,3"],   // Coordenadas de Lobo
        lista7: ["0,5","1,5","2,5","3,5"],   // Coordenadas de Foca
        lista8: ["5,5","5,6","5,7","5,8"], // Coordenadas de León
        lista9: ["8,2","8,3","8,4","8,5","8,6","8,7"], // Coordenadas de Jirafa
    },
     // COORDENADAS 6
     {
        lista1: ["1,7","2,7","3,7","4,7","5,7","6,7"],   // Coordenadas de futbol
        lista2: ["8,0","8,1","8,2","8,3","8,4","8,5","8,6"],    // Coordenadas de basquet
        lista3: ["6,1","6,2","6,3","6,4"], // Coordenadas de golf
        lista4: ["1,0","2,1","3,2","4,3","5,4","6,5"],   // Coordenadas de tennis
        lista5: ["0,6","1,5","2,4","3,3","4,2","5,1"],   // Coordenadas de hoquei
        lista6: ["1,8","2,8","3,8","4,8","5,8"],   // Coordenadas de rugbi
        lista7: ["0,1","1,2","2,3","3,4","4,5"],   // Coordenadas de padel
        lista8: ["1,6","2,6","3,6","4,6","5,6"], // Coordenadas de volei
        lista9: ["7,1","7,2","7,3","7,4","7,5"], // Coordenadas de dansa
    },
    // COORDENADAS 7
    {
        lista1: ["0,0","1,0","2,0","3,0","4,0","5,0","6,0"],   // Coordenadas de Geranio
        lista2: ["5,3","4,4","3,5","2,6","1,7","0,8"],    // Coordenadas de Cactus
        lista3: ["5,4","6,5","7,6","8,7"], // Coordenadas de Rosa
        lista4: ["1,2","2,3","3,4","4,5","5,6","6,7"],   // Coordenadas de Clavel
        lista5: ["0,8","1,8","2,8","3,8","4,8"],   // Coordenadas de Ficus
        lista6: ["7,2","7,3","7,4","7,5"],   // Coordenadas de Loto
        lista7: ["1,1","2,1","3,1","4,1"],   // Coordenadas de Aloe
        lista8: ["0,1","0,2","0,3","0,4","0,5","0,6"], // Coordenadas de Romero
        lista9: ["8,0","8,1","8,2","8,3","8,4"], // Coordenadas de Lirio
    },
    // COORDENADAS 8
    {
        lista1: ["4,6","5,5","6,4"],   // Coordenadas de Sol
        lista2: ["8,4","7,5","6,6","5,7","4,8"],    // Coordenadas de Pluja
        lista3: ["4,0","5,0","6,0","7,0"], // Coordenadas de Vent
        lista4: ["4,1","5,1","6,1","7,1","8,1"],   // Coordenadas de Núvol
        lista5: ["0,1","1,2","2,3","3,4","4,5","5,6","6,7","7,8"],   // Coordenadas de Tempesta
        lista6: ["1,3","1,4","1,5","1,6","1,7"],   // Coordenadas de Calor
        lista7: ["3,3","4,3","5,3","6,3","7,3","8,3"],   // Coordenadas de Huracá
        lista8: ["2,0","2,1","2,2"], // Coordenadas de Neu
        lista9: ["0,2","0,3","0,4","0,5"], // Coordenadas de Fred
    },
    // COORDENADAS 9
    {
        lista1: ["7,2","7,3","7,4","7,5","7,6"],   // Coordenadas de Gorra
        lista2: ["2,1","3,1","4,1","5,1","6,1","7,1"],    // Coordenadas de Abrigo
        lista3: ["1,3","1,4","1,5","1,6"], // Coordenadas de bota
        lista4: ["0,7","1,6","2,5","3,4","4,3","5,2"],   // Coordenadas de Zapato
        lista5: ["4,0","5,0","6,0","7,0","8,0"],   // Coordenadas de Falda
        lista6: ["8,3","8,4","8,5","8,6","8,7"],   // Coordenadas de reloj
        lista7: ["6,3","6,4","6,5","6,6","6,7","6,8"],   // Coordenadas de jersey
        lista8: ["0,0","1,1","2,2","3,3","4,4","5,5"], // Coordenadas de camisa
        lista9: ["0,6","1,6","2,6","3,6"], // Coordenadas de bata
    },
    // COORDENADAS 10
    {
        lista1: ["3,0","4,1","5,2","6,3"],   // Coordenadas de rojo
        lista2: ["4,0","5,1","6,2","7,3","8,4"],    // Coordenadas de verde
        lista3: ["0,7","1,6","2,5","3,4"], // Coordenadas de azul
        lista4: ["1,1","1,2","1,3","1,4"],   // Coordenadas de rosa
        lista5: ["0,4","0,5","0,6","0,7"],   // Coordenadas de lila
        lista6: ["3,8","4,7","5,6","6,5","7,4","8,3"],   // Coordenadas de marron
        lista7: ["0,3","1,3","2,3","3,3","4,3","5,3"],   // Coordenadas de morado
        lista8: ["2,6","3,6","4,6","5,6","6,6"], // Coordenadas de negro
        lista9: ["8,5","8,6","8,7","8,8"], // Coordenadas de añil
    },
    // COORDENADAS 11
    {
        lista1: ["1,8","2,7","3,6","4,5","5,4","6,3","7,2"],   // Coordenadas de Entrepa
        lista2: ["0,0","1,0","2,0","3,0","4,0","5,0"],    // Coordenadas de Pastis
        lista3: ["8,1","8,2","8,3","8,4","8,5","8,6"], // Coordenadas de Truita
        lista4: ["0,2","1,3","2,4","3,5","4,6"],   // Coordenadas de Gelat
        lista5: ["3,7","4,7","5,7","6,7","7,7"],   // Coordenadas de Pizza
        lista6: ["7,3","7,4","7,5","7,6","7,7"],   // Coordenadas de Arros
        lista7: ["1,1","2,2","3,3","4,4","5,5"],   // Coordenadas de Pasta
        lista8: ["1,4","1,5","1,6","1,7"], // Coordenadas de Poma
        lista9: ["5,3","6,2","7,1","8,0"], // Coordenadas de Sopa
    },
]