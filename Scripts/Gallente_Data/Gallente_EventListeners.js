var Rookie1 = document.querySelector("#showship_rookie1");

var Shuttle = document.querySelector("#showship_shuttle");

var Frigate1 = document.querySelector("#showship_frigate1");
var Frigate2 = document.querySelector("#showship_frigate2");
var Frigate3 = document.querySelector("#showship_frigate3");
var Frigate4 = document.querySelector("#showship_frigate4");
var Frigate5 = document.querySelector("#showship_frigate5");
var Frigate6 = document.querySelector("#showship_frigate6");

var T2_Frigate1 = document.querySelector("#showship_t2_frigate1");
var T2_Frigate2 = document.querySelector("#showship_t2_frigate2");
var T2_Frigate3 = document.querySelector("#showship_t2_frigate3");
var T2_Frigate4 = document.querySelector("#showship_t2_frigate4");
var T2_Frigate5 = document.querySelector("#showship_t2_frigate5");
var T2_Frigate6 = document.querySelector("#showship_t2_frigate6");
var T2_Frigate7 = document.querySelector("#showship_t2_frigate7");
var T2_Frigate8 = document.querySelector("#showship_t2_frigate8");

var Navy_Frigate1 = document.querySelector("#showship_navy_frigate1");
var Navy_Frigate2 = document.querySelector("#showship_navy_frigate2");

var Destroyer1 = document.querySelector("#showship_destroyer1");
var Destroyer2 = document.querySelector("#showship_destroyer2");

var T2_Destroyer1 = document.querySelector("#showship_t2_destroyer1");
var T2_Destroyer2 = document.querySelector("#showship_t2_destroyer2");
var T3_Destroyer1 = document.querySelector("#showship_t3_destroyer1");

var Cruiser1 = document.querySelector("#showship_cruiser1");
var Cruiser2 = document.querySelector("#showship_cruiser2");
var Cruiser3 = document.querySelector("#showship_cruiser3");
var Cruiser4 = document.querySelector("#showship_cruiser4");

var Navy_Cruiser1 = document.querySelector("#showship_navy_cruiser1");
var Navy_Cruiser2 = document.querySelector("#showship_navy_cruiser2");

var T2_Cruiser1 = document.querySelector("#showship_t2_cruiser1");
var T2_Cruiser2 = document.querySelector("#showship_t2_cruiser2");
var T2_Cruiser3 = document.querySelector("#showship_t2_cruiser3");
var T2_Cruiser4 = document.querySelector("#showship_t2_cruiser4");
var T2_Cruiser5 = document.querySelector("#showship_t2_cruiser5");
var T2_Cruiser6 = document.querySelector("#showship_t2_cruiser6");
var T3_Cruiser1 = document.querySelector("#showship_t3_cruiser1");

var Battlecruiser1 = document.querySelector("#showship_battlecruiser1");
var Battlecruiser2 = document.querySelector("#showship_battlecruiser2");
var Battlecruiser3 = document.querySelector("#showship_battlecruiser3");

var Navy_Battlecruiser1 = document.querySelector("#showship_navy_battlecruiser1");

var T2_Battlecruiser1 = document.querySelector("#showship_t2_battlecruiser1");
var T2_Battlecruiser2 = document.querySelector("#showship_t2_battlecruiser2");

var Industrial1 = document.querySelector("#showship_industrial1");
var Industrial2 = document.querySelector("#showship_industrial2");
var Industrial3 = document.querySelector("#showship_industrial3");
var Industrial4 = document.querySelector("#showship_industrial4");
var Industrial5 = document.querySelector("#showship_industrial5");

var T2_Industrial1 = document.querySelector("#showship_t2_industrial1");
var T2_Industrial2 = document.querySelector("#showship_t2_industrial2");

var Battleship1 = document.querySelector("#showship_battleship1");
var Battleship2 = document.querySelector("#showship_battleship2");
var Battleship3 = document.querySelector("#showship_battleship3");

var Navy_Battleship1 = document.querySelector("#showship_navy_battleship1");
var Navy_Battleship2 = document.querySelector("#showship_navy_battleship2");

var T2_Battleship1 = document.querySelector("#showship_t2_battleship1");
var T2_Battleship2 = document.querySelector("#showship_t2_battleship2");

var Capital1 = document.querySelector("#showship_capital1");

var Supercapital1 = document.querySelector("#showship_supercapital1");
var Supercapital2 = document.querySelector("#showship_supercapital2");
var Supercapital3 = document.querySelector("#showship_supercapital3");

var Titan1 = document.querySelector("#showship_titan1");

var Freighter = document.querySelector("#showship_freighter");
var T2_Freighter = document.querySelector("#showship_t2_freighter");
var pagecount = false;


Rookie1.addEventListener("click", function(){
//ensures only 1 Ship_Div can be created
    if (pagecount === false){
        pagecount = true;
        
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
        //ShipBuilder.js
        insert(Velator);
        //FACTION_Ship_Info.js
        velator();
        });
    }
});

Shuttle.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Shuttle);
        shuttle();
        });
    }
});
Frigate1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Navitas);
        navitas();
        });
    }
});
Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Tristan);
        tristan();
        });
    } 
});
Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Incursus);
        incursus();
        });
    }
});
Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Imicus);
        imicus();
        });
    } 
});
Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Atron);
        atron();
        });
    } 
});
Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Maulus);
        maulus();
        });
    } 
});
T2_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Thalia);
        thalia();
        });
    } 
});
T2_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Keres);
        keres();
        });
    } 
});
T2_Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Helios);
        helios();
        });
    } 
});
T2_Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Nemesis);
        nemesis();
        });
    } 
});
T2_Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ishkur);
        ishkur();
        });
    } 
});
T2_Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Enyo);
        enyo();
        });
    } 
});
T2_Frigate7.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Taranis);
        taranis();
        });
    } 
});
T2_Frigate8.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ares);
        ares();
        });
    } 
});
Navy_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Comet_Navy);
        comet_Navy();
        });
    } 
});
Navy_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Maulus_Navy);
        maulus_Navy();
        });
    } 
});
Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Catalyst);
        catalyst();
        });
    } 
});
Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;

        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
            insert(Algos);
            algos();
        });
    } 
});
T2_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Magus);
        magus();
        });
    } 
});
T2_Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Eris);
        eris();
        });
    } 
});
T3_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Hecate);
        hecate();
        });
    } 
});
Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Vexor);
        vexor();
        });
    } 
});
Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Thorax);
        thorax();
        });
    } 
});
Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Celestis);
        celestis();
        });
    } 
});
Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Exequror);
        exequror();
        });
    } 
});
Navy_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Exequror_Navy);
        exequror_Navy();
        });
    } 
});
Navy_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Vexor_Navy);
        vexor_Navy();
        });
    } 
});
T2_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Oneiros);
        oneiros();
        });
    } 
});
T2_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Phobos);
        phobos();
        });
    } 
});
T2_Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ishtar);
        ishtar();
        });
    } 
});
T2_Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Deimos);
        deimos();
        });
    } 
});
T2_Cruiser5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Lachesis);
        lachesis();
        });
    } 
});
T2_Cruiser6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Arazu);
        arazu();
        });
    } 
});
T3_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Proteus);
        proteus();
        });
    } 
});
Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Brutix);
        brutix();
        });
    } 
});
Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Myrmidon);
        myrmidon();
        });
    } 
});
Battlecruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Talos);
        talos();
        });
    } 
});
Navy_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Brutix_Navy);
        brutix_Navy();
        });
    } 
});
T2_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Astarte);
        astarte();
        });
    } 
});
T2_Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Eos);
        eos();
        });
    } 
});
Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Nereus);
        nereus();
        });
    } 
});
Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Kryos);
        kryos();
        });
    } 
});
Industrial3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Epithal);
        epithal();
        });
    } 
});
Industrial4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Miasmos);
        miasmos();
        });
    } 
});
Industrial5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(IteronMarkV);
        iteronMarkV();
        });
    } 
});
T2_Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Viator);
        viator();
        });
    } 
});
T2_Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Occator);
        occator();
        });
    } 
});
Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Megathron);
        megathron();
        });
    } 
});
Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Dominix);
        dominix();
        });
    } 
});
Battleship3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Hyperion);
        hyperion();
        });
    } 
});
Navy_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Dominix_Navy);
        dominix_Navy();
        });
    } 
});
Navy_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Megathron_Navy);
        megathron_Navy();
        });
    } 
});
T2_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Kronos);
        kronos();
        });
    } 
});
T2_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Sin);
        sin();
        });
    } 
});
Capital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Moros);
        moros();
        });
    } 
});
Supercapital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ninazu);
        ninazu();
        });
    } 
});
Supercapital2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Nyx);
        nyx();
        });
    } 
});
Supercapital3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Thanatos);
        thanatos();
        });
    } 
});
Titan1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Erebus);
        erebus();
        });
    } 
});
Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Obelisk);
        obelisk();
        });
    }
});
T2_Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Anshar);
        anshar();
        });
    }
});