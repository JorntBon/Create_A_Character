/// Guys Array ///
var guys = ["images/Roger.svg", "images/Stan.svg", "images/Joseph.svg" ]

/// Brillen Array ///
var brillen = ["images/Bril_Doorzichtig.svg", "images/Bril_Groen.svg", "images/Bril_Roze.svg" , "images/bril_mono_links.svg", "images/bril_mono_rechts.svg"]

/// Truien Array ///
var truien = ["images/Trui_Doorzichtig.svg","images/Trui_Groen.svg","images/Trui_Rood.svg", "images/Trui_Blauw.svg", "images/Trui_Zwart.svg"]

/// Broeken Array ///
var broeken = ["images/Broek_Doorzichtig.svg", "images/Broek_Blauw.svg", "images/Broek_Groen.svg","images/Broek_Rood.svg", "images/Broek_Zwart.svg"]

/// Schoenen Array ///
var schoenen = ["images/Schoen_Doorzichtig.svg", "images/Schoen_Blauw.svg", "images/Schoen_Geel.svg", "images/Schoen_Groen.svg", "images/Schoen_Rood.svg"]

// Bloos actie ///
var bloosActie = ["images/blozen.svg"]
var confetti = ["images/confetti.gif"]

// Knoppen //
var persoonBu = document.getElementById("knop_persoon")
var brilBu = document.getElementById("knop_bril")
var truiBu = document.getElementById("knop_trui")
var broekBu = document.getElementById("knop_broek")
var schoenBu = document.getElementById("knop_schoen")
var bloosBu = document.getElementById("knop_blozen")

// Aan te passen onderdelen ///
var karakter = document.getElementById('karakter')
var brilletje = document.getElementById('brilletje')
var truitje = document.getElementById('truitje')
var broekkie = document.getElementById('broekkie')
var schoentjes = document.getElementById('schoentjes')
var bloos = document.getElementById('bloos')
var gif = document.getElementById('gif')


guys_welke = 0,1,2;
bril_welke = 0,1,2,3,4;
trui_welke = 0,1,2,3,4;
broek_welke = 0,1,2,3,4;
schoen_welke = 0,1,2,3,4;



function karakterwissel (){
    guys_welke += 1
    if (guys_welke > 2){
        guys_welke = 0
    }
    karakter.src= guys[guys_welke]
    }

    
    persoonBu.addEventListener('click',karakterwissel);


function brilwissel (){
    bril_welke += 1
    if (bril_welke > 4){
        bril_welke = 0
    }
brilletje.src = brillen[bril_welke];
}

brilBu.addEventListener('click',brilwissel);


function truiwissel (){
    trui_welke += 1
    if (trui_welke > 4){
        trui_welke = 0
    }
    truitje.src = truien[trui_welke];
    }
    
    truiBu.addEventListener('click',truiwissel);


function broekwissel (){
    broek_welke += 1
    if (broek_welke > 4){
        broek_welke = 0
    }
    broekkie.src = broeken[broek_welke]
}

broekBu.addEventListener('click', broekwissel)

function schoenwissel (){
    schoen_welke += 1
    if (schoen_welke > 4){
        schoen_welke = 0
    }
    schoentjes.src = schoenen [schoen_welke]
}
schoenBu.addEventListener('click', schoenwissel)



function blozen (){
    bloos.src = bloosActie [0]  
    gif.src = confetti [0]
    setTimeout(niet_blozen, 1500);
}

function niet_blozen(){
    bloos.src = brillen[0]
    gif.src = schoenen[0]
}





bloosBu.addEventListener('click', blozen)