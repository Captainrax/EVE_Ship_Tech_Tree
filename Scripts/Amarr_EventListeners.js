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
        insert(Impairor);
        //FACTION_Ship_Info.js
        impairor();
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
          
        insert(Crucifier);
        crucifier();
        });
    }
});
Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Magnate);
        magnate();
        });
    } 
});
Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
            insert(Executioner);
            executioner();
        });
    }
});
Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Inquisitor);
        inquisitor();
        });
    } 
});
Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Tormentor);
        tormentor();
        });
    } 
});
Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Punisher);
        punisher();
        });
    } 
});
T2_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Deacon);
        deacon();
        });
    } 
});
T2_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Sentinel);
        sentinel();
        });
    } 
});
T2_Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Anathema);
        anathema();
        });
    } 
});
T2_Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Purifier);
        purifier();
        });
    } 
});
T2_Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Retribution);
        retribution();
        });
    } 
});
T2_Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Vengeance);
        vengeance();
        });
    } 
});
T2_Frigate7.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Crusader);
        crusader();
        });
    } 
});
T2_Frigate8.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Malediction);
        malediction();
        });
    } 
});
Navy_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Crucifier_Navy);
        crucifier_navy();
        });
    } 
});
Navy_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Slicer_Navy);
        slicer_navy();
        });
    } 
});
Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Coercer);
        coercer();
        });
    } 
});
Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Dragoon);
        dragoon();
        });
    } 
});
T2_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Heretic);
        heretic();
        });
    } 
});
T2_Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Pontifex);
        pontifex();
        });
    } 
});
T3_Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Confessor);
        confessor();
        });
    } 
});
Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Maller);
        maller();
        });
    } 
});
Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Omen);
        omen();
        });
    } 
});
Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Augoror);
        augoror();
        });
    } 
});
Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Arbitrator);
        arbitrator();
        });
    } 
});
Navy_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Augoror_Navy);
        augoror_navy();
        });
    } 
});
Navy_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Omen_Navy);
        omen_navy();
        });
    } 
});
T2_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Guardian);
        guardian();
        });
    } 
});
T2_Cruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Devoter);
        devoter();
        });
    } 
});
T2_Cruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Zealot);
        zealot();
        });
    } 
});
T2_Cruiser4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Sacrilege);
        sacrilege();
        });
    } 
});
T2_Cruiser5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Curse);
        curse();
        });
    } 
});
T2_Cruiser6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Pilgrim);
        pilgrim();
        });
    } 
});
T3_Cruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Legion);
        legion();
        });
    } 
});
Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Prophecy);
        prophecy();
        });
    } 
});
Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Harbinger);
        harbinger();
        });
    } 
});
Battlecruiser3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Oracle);
        oracle();
        });
    } 
});
Navy_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Harbinger_Navy);
        harbinger_navy();
        });
    } 
});
T2_Battlecruiser1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Absolution);
        absolution();
        });
    } 
});
T2_Battlecruiser2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Damnation);
        damnation();
        });
    } 
});
Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Sigil);
        sigil();
        });
    } 
});
Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Bestower);
        bestower();
        });
    } 
});
T2_Industrial1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Prorator);
        prorator();
        });
    } 
});
T2_Industrial2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Impel);
        impel();
        });
    } 
});
Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Apocalypse);
        apocalypse();
        });
    } 
});
Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Armageddon);
        armageddon();
        });
    } 
});
Battleship3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Abaddon);
        abaddon();
        });
    } 
});
Navy_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Armageddon_Navy);
        armageddon_navy();
        });
    } 
});
Navy_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Apocalypse_Navy);
        apocalypse_navy();
        });
    } 
});
T2_Battleship1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Paladin);
        paladin();
        });
    } 
});
T2_Battleship2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Redeemer);
        redeemer();
        });
    } 
});
Capital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Revelation);
        revelation();
        });
    } 
});
Supercapital1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Apostle);
        apostle();
        });
    } 
});
Supercapital2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Aeon);
        aeon();
        });
    } 
});
Supercapital3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Archon);
        archon();
        });
    } 
});
Titan1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Avatar);
        avatar();
        });
    } 
});
Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Providence);
        providence();
        });
    }
});
T2_Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Ark);
        ark();
        });
    }
});