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
        insert(Ibis);
        //FACTION_Ship_Info.js
        ibis();
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
          
        insert(Bantam);
        bantam();
        });
    }
});
Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Condor);
        condor();
        });
    } 
});
Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Griffin);
        griffin();
        });
    }
});
Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Kestrel);
        kestrel();
        });
    } 
});
Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Merlin);
        merlin();
        });
    } 
});
Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Heron);
        heron();
        });
    } 
});
T2_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Kirin);
        kirin();
        });
    } 
});
T2_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Kitsune);
        kitsune();
        });
    } 
});
T2_Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Buzzard);
        buzzard();
        });
    } 
});
T2_Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Manticore);
        manticore();
        });
    } 
});
T2_Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Hawk);
        hawk();
        });
    } 
});
T2_Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Harpy);
        harpy();
        });
    } 
});
T2_Frigate7.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Crow);
        crow();
        });
    } 
});
T2_Frigate8.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Raptor);
        raptor();
        });
    } 
});
Navy_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Griffin_Navy);
        griffin_navy();
        });
    } 
});
Navy_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Hookbill);
        hookbill();
        });
    } 
});
Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Cormorant);
        cormorant();
        });
    } 
});
Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;

        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
            insert(Corax);
            corax();
        });
    } 
});
T2_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Stork);
        stork();
        });
    } 
});
T2_Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Flycatcher);
        flycatcher();
        });
    } 
});
T3_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Jackdaw);
        jackdaw();
        });
    } 
});
Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Osprey);
        osprey();
        });
    } 
});
Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Caracal);
        caracal();
        });
    } 
});
Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Blackbird);
        blackbird();
        });
    } 
});
Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Moa);
        moa();
        });
    } 
});
Navy_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Osprey_Navy);
        osprey_navy();
        });
    } 
});
Navy_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Caracal_Navy);
        caracal_navy();
        });
    } 
});
T2_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Basilisk);
        basilisk();
        });
    } 
});
T2_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Onyx);
        onyx();
        });
    } 
});
T2_Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Eagle);
        eagle();
        });
    } 
});
T2_Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Cerberus);
        cerberus();
        });
    } 
});
T2_Cruiser5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Rook);
        rook();
        });
    } 
});
T2_Cruiser6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Falcon);
        falcon();
        });
    } 
});
T3_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Tengu);
        tengu();
        });
    } 
});
Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ferox);
        ferox();
        });
    } 
});
Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Drake);
        drake();
        });
    } 
});
Battlecruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Naga);
        naga();
        });
    } 
});
Navy_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Drake_Navy);
        drake_navy();
        });
    } 
});
T2_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Nighthawk);
        nighthawk();
        });
    } 
});
T2_Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Vulture);
        vulture();
        });
    } 
});
Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Badger);
        badger();
        });
    } 
});
Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Tayra);
        tayra();
        });
    } 
});
T2_Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Crane);
        crane();
        });
    } 
});
T2_Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Bustard);
        bustard();
        });
    } 
});
Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Scorpion);
        scorpion();
        });
    } 
});
Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Rokh);
        rokh();
        });
    } 
});
Battleship3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Raven);
        raven();
        });
    } 
});
Navy_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Scorpion_Navy);
        scorpion_navy();
        });
    } 
});
Navy_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Raven_Navy);
        raven_navy();
        });
    } 
});
T2_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Golem);
        golem();
        });
    } 
});
T2_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Widow);
        widow();
        });
    } 
});
Capital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Phoenix);
        phoenix();
        });
    } 
});
Supercapital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Minokawa);
        minokawa();
        });
    } 
});
Supercapital2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Wyvern);
        wyvern();
        });
    } 
});
Supercapital3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Chimera);
        chimera();
        });
    } 
});
Titan1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Leviathan);
        leviathan();
        });
    } 
});
Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Charon);
        charon();
        });
    }
});
T2_Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Rhea);
        rhea();
        });
    }
});