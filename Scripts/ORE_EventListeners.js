var Frigate1 = document.querySelector("#showship_frigate1");

var Expedition_Frigate1 = document.querySelector("#showship_expedition_frigate1");
var Expedition_Frigate2 = document.querySelector("#showship_expedition_frigate2");

var Mining_Barge1 = document.querySelector("#showship_mining_barge1");
var Mining_Barge2 = document.querySelector("#showship_mining_barge2");
var Mining_Barge3 = document.querySelector("#showship_mining_barge3");

var Exhumer1 = document.querySelector("#showship_exhumer1");
var Exhumer2 = document.querySelector("#showship_exhumer2");
var Exhumer3 = document.querySelector("#showship_exhumer3");

var Support1 = document.querySelector("#showship_support1");

var Industrial_Command_Ship1 = document.querySelector("#showship_industrial_command_ship1");
var Industrial_Command_Ship2 = document.querySelector("#showship_industrial_command_ship2");

var Capital_Industrial1 = document.querySelector("#showship_capital_industrial1");

var Freighter1 = document.querySelector("#showship_freighter1");

var pagecount = false;


Frigate1.addEventListener("click", function(){
//ensures only 1 Ship_Div can be created
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
        //ShipBuilder.js
        insert(Venture);
        //FACTION_Ship_Info.js
        venture();
        });
    }
});
Expedition_Frigate1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Prospect);
        prospect();
        });
    }
});
Expedition_Frigate2.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Endurance);
        endurance();
        });
    }
});
Mining_Barge1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Procurer);
        procurer();
        });
    }
});
Mining_Barge2.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Covetor);
        covetor();
        });
    }
});
Mining_Barge3.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Retriever);
        retriever();
        });
    }
});
Exhumer1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Hulk);
        hulk();
        });
    }
});
Exhumer2.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Skiff);
        skiff();
        });
    }
});
Exhumer3.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Mackinaw);
        mackinaw();
        });
    }
});
Support1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Noctis);
        noctis();
        });
    }
});
Industrial_Command_Ship1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Porpoise);
        porpoise();
        });
    }
});
Industrial_Command_Ship2.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Orca);
        orca();
        });
    }
});
Capital_Industrial1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Rorqual);
        rorqual();
        });
    }
});
Freighter1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        $("#template").load("StyleSheets/templates/ShipTemplate.html", function(){
          
        insert(Bowhead);
        bowhead();
        });
    }
});