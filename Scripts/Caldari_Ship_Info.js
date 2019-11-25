var Ibis = new Ship("Ibis", "Corvette");
Ibis.seticon("Scripts/Caldari_Data/images/Ibis.png");
var Shuttle = new Ship("Shuttle", "Shuttle");
Shuttle.seticon("Scripts/Caldari_Data/images/Caldari_Shuttle.png");

var Bantam = new Ship("Bantam", "Frigate");
Bantam.seticon("Scripts/Caldari_Data/images/Bantam.png");
var Condor = new Ship("Condor", "Frigate");
Condor.seticon("Scripts/Caldari_Data/images/Condor.png");
var Griffin = new Ship("Griffin", "Frigate");
Griffin.seticon("Scripts/Caldari_Data/images/Griffin.png");
var Kestrel = new Ship("Kestrel", "Frigate");
Kestrel.seticon("Scripts/Caldari_Data/images/Kestrel.png");
var Merlin = new Ship("Merlin", "Frigate");
Merlin.seticon("Scripts/Caldari_Data/images/Merlin.png");
var Heron = new Ship("Heron", "Frigate");
Heron.seticon("Scripts/Caldari_Data/images/Heron.png");

var Kirin = new Ship("Kirin", "Frigate");
Kirin.seticon("Scripts/Caldari_Data/images/Bantam.png");
var Kitsune = new Ship("Kitsune", "Frigate");
Kitsune.seticon("Scripts/Caldari_Data/images/Griffin.png");
var Buzzard = new Ship("Buzzard", "Frigate");
Buzzard.seticon("Scripts/Caldari_Data/images/Heron.png");
var Manticore = new Ship("Manticore", "Frigate");
Manticore.seticon("Scripts/Caldari_Data/images/Manticore.png");
var Hawk = new Ship("Hawk", "Frigate");
Hawk.seticon("Scripts/Caldari_Data/images/Merlin.png");
var Harpy = new Ship("Harpy", "Frigate");
Harpy.seticon("Scripts/Caldari_Data/images/Merlin.png");
var Crow = new Ship("Crow", "Frigate");
Crow.seticon("Scripts/Caldari_Data/images/Crow.png");
var Raptor = new Ship("Raptor", "Frigate");
Raptor.seticon("Scripts/Caldari_Data/images/Crow.png");

var Hookbill = new Ship("Hookbill", "Frigate");
Hookbill.seticon("Scripts/Caldari_Data/images/Hookbill.png");
var Griffin_Navy = new Ship("Griffin Navy Issue", "Frigate");
Griffin_Navy.seticon("Scripts/Caldari_Data/images/Griffin.png");

var Cormorant = new Ship("Cormorant", "Destroyer");
Cormorant.seticon("Scripts/Caldari_Data/images/Cormorant.png");
var Corax = new Ship("Corax", "Destroyer");
Corax.seticon("Scripts/Caldari_Data/images/Corax.png");

var Flycatcher = new Ship("Flycatcher", "Destroyer");
Flycatcher.seticon("Scripts/Caldari_Data/images/Flycatcher.png");
var Stork = new Ship("Stork", "Destroyer");
Stork.seticon("Scripts/Caldari_Data/images/Stork.png");
var Jackdaw = new Ship("Jackdaw", "Destroyer");
Jackdaw.seticon("Scripts/Caldari_Data/images/Jackdaw.png");

var Osprey = new Ship("Osprey", "Cruiser");
Osprey.seticon("Scripts/Caldari_Data/images/Osprey.png");
var Blackbird = new Ship("Blackbird", "Cruiser");
Blackbird.seticon("Scripts/Caldari_Data/images/Blackbird.png");
var Caracal = new Ship("Caracal", "Cruiser");
Caracal.seticon("Scripts/Caldari_Data/images/Caracal.png");
var Moa = new Ship("Moa", "Cruiser");
Moa.seticon("Scripts/Caldari_Data/images/Moa.png");

var Osprey_Navy = new Ship("Osprey Navy Issue", "Cruiser");
Osprey_Navy.seticon("Scripts/Caldari_Data/images/Osprey.png");
var Caracal_Navy = new Ship("Caracal Navy Issue", "Cruiser");
Caracal_Navy.seticon("Scripts/Caldari_Data/images/Caracal.png");

var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");
var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");
var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");
var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");
var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");
var tbd = new Ship("Corax", "Destroyer");
tbd.seticon("Scripts/Caldari_Data/images/Corax.png");

var Tengu = new Ship("Tengu", "Cruiser");
Tengu.seticon("Scripts/Caldari_Data/images/Tengu.png");

var Ferox = new Ship("Ferox", "Battlecruiser");
Ferox.seticon("Scripts/Caldari_Data/images/Ferox.png");
var Drake = new Ship("Drake", "Battlecruiser");
Drake.seticon("Scripts/Caldari_Data/images/Drake.png");
var Naga = new Ship("Naga", "Battlecruiser");
Naga.seticon("Scripts/Caldari_Data/images/Naga.png");

var Charon = new Ship("Charon", "Freighter");
Charon.seticon("Scripts/Caldari_Data/images/doot.png");


function ibis(){
    
    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/disruption.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";
    Traits_img7.src = "StyleSheets/icons/ECM.png";
    Traits_img8.src = "StyleSheets/icons/shields.png";

    var Traits_Bonus_Div1 = document.createElement("div");
    var Traits_Bonus_Div2 = document.createElement("div");
    var Traits_Bonus_Div3 = document.createElement("div");
    var Traits_Bonus_Div4 = document.createElement("div");

    var Traits_Bonus_Percent = document.createElement("pre");
    var Traits_Bonus_Item = document.createElement("pre");
    var Traits_Bonus_Text1 = document.createElement("pre");
    var Traits_Bonus_Text2 = document.createElement("pre");

    var Traits_Bonus_Percent2 = document.createElement("pre");
    var Traits_Bonus_Item2 = document.createElement("pre");
    var Traits_Bonus_Text21 = document.createElement("pre");
    var Traits_Bonus_Text22 = document.createElement("pre");

    var Traits_Bonus_Percent3 = document.createElement("pre");
    var Traits_Bonus_Item3 = document.createElement("pre");
    var Traits_Bonus_Text31 = document.createElement("pre");
    var Traits_Bonus_Text32 = document.createElement("pre");

    var Traits_Bonus_Percent4 = document.createElement("pre");
    var Traits_Bonus_Item4 = document.createElement("pre");
    var Traits_Bonus_Text41 = document.createElement("pre");
    var Traits_Bonus_Text42 = document.createElement("pre");

    Traits_Bonus_Div1.className = "traits_div";
    Traits_Bonus_Div2.className = "traits_div";
    Traits_Bonus_Div3.className = "traits_div";
    Traits_Bonus_Div4.className = "traits_div";

    var Traits_Role_Bonus = document.createElement("p");
    
    Traits_Role_Bonus.className = "traits_header";
    Traits_Role_Bonus.textContent = "Role Bonus:";

    Traits_Bonus_Percent.className = "traits_percent";
    Traits_Bonus_Percent.textContent = "20%";
    Traits_Bonus_Text1.className = "traits_text";
    Traits_Bonus_Text1.textContent = " bonus to ";
    Traits_Bonus_Item.className = "traits_item";
    Traits_Bonus_Item.textContent = "Small Hybrid Turret";
    Traits_Bonus_Text2.className = "traits_text";
    Traits_Bonus_Text2.textContent = " range";

    Traits_Bonus_Percent2.className = "traits_percent";
    Traits_Bonus_Percent2.textContent = "10%";
    Traits_Bonus_Text21.className = "traits_text";
    Traits_Bonus_Text21.textContent = " bonus to ";
    Traits_Bonus_Item2.className = "traits_item";
    Traits_Bonus_Item2.textContent = "kinetic Light Missile and Rocket damage";
    Traits_Bonus_Text22.className = "traits_text";
    Traits_Bonus_Text22.textContent = "";

    Traits_Bonus_Percent3.className = "traits_percent";
    Traits_Bonus_Percent3.textContent = "30%";
    Traits_Bonus_Text31.className = "traits_text";
    Traits_Bonus_Text31.textContent = " bonus to ";
    Traits_Bonus_Item3.className = "traits_item";
    Traits_Bonus_Item3.textContent = "ECM Target Jammer strength";
    Traits_Bonus_Text32.className = "traits_text";
    Traits_Bonus_Text32.textContent = "";

    Traits_Bonus_Percent4.className = "traits_percent";
    Traits_Bonus_Percent4.textContent = "8%";
    Traits_Bonus_Text41.className = "traits_text";
    Traits_Bonus_Text41.textContent = " bonus to ";
    Traits_Bonus_Item4.className = "traits_item";
    Traits_Bonus_Item4.textContent = "all shield resistances";
    Traits_Bonus_Text42.className = "traits_text";
    Traits_Bonus_Text42.textContent = "";

    Content_Traits.appendChild(Traits_Role_Bonus);
    Content_Traits.appendChild(Traits_Bonus_Div1);
    Traits_Bonus_Div1.appendChild(Traits_Bonus_Percent);
    Traits_Bonus_Div1.appendChild(Traits_Bonus_Text1);
    Traits_Bonus_Div1.appendChild(Traits_Bonus_Item);
    Traits_Bonus_Div1.appendChild(Traits_Bonus_Text2);
    Content_Traits.appendChild(Traits_Bonus_Div2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Percent2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Text21);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Item2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Text22);
    Content_Traits.appendChild(Traits_Bonus_Div3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Percent3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Text31);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Item3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Text32);
    Content_Traits.appendChild(Traits_Bonus_Div4);
    Traits_Bonus_Div4.appendChild(Traits_Bonus_Percent4);
    Traits_Bonus_Div4.appendChild(Traits_Bonus_Text41);
    Traits_Bonus_Div4.appendChild(Traits_Bonus_Item4);
    Traits_Bonus_Div4.appendChild(Traits_Bonus_Text42);

    fetch("Scripts/Caldari_Data/IbisData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
       InsertData(data);
    }
}

function shuttle(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/tackling.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Caldari_ShuttleData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function bantam(){
    var Content_Traits = document.querySelector("#traits");
    
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/support.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";
    
    var Traits_Frigate_Bonus = document.createElement("p");
    var Traits_Bonus_Div = document.createElement("div");
    var Traits_Bonus_Div2 = document.createElement("div");
    var Traits_Bonus_Div3 = document.createElement("div");
    
    var Traits_Bonus_Percent = document.createElement("pre");
    var Traits_Bonus_Item = document.createElement("pre");
    var Traits_Bonus_Text1 = document.createElement("pre");
    var Traits_Bonus_Text2 = document.createElement("pre");

    var Traits_Bonus_Percent2 = document.createElement("pre");
    var Traits_Bonus_Item2 = document.createElement("pre");
    var Traits_Bonus_Text21 = document.createElement("pre");
    var Traits_Bonus_Text22 = document.createElement("pre");

    var Traits_Bonus_Percent3 = document.createElement("pre");
    var Traits_Bonus_Item3 = document.createElement("pre");
    var Traits_Bonus_Text31 = document.createElement("pre");
    var Traits_Bonus_Text32 = document.createElement("pre");

    Traits_Bonus_Div.className = "traits_div";
    Traits_Bonus_Div2.className = "traits_div";
    Traits_Bonus_Div3.className = "traits_div";

    Traits_Frigate_Bonus.className = "traits_header";
    Traits_Frigate_Bonus.textContent = "Caldari Frigate bonuses (per skill level):";

    Traits_Bonus_Percent.className = "traits_percent";
    Traits_Bonus_Percent.textContent = "10%";
    Traits_Bonus_Text1.className = "traits_text";
    Traits_Bonus_Text1.textContent = " bonus to ";
    Traits_Bonus_Text2.className = "traits_text";
    Traits_Bonus_Text2.textContent = " amount";
    Traits_Bonus_Item.className = "traits_item";
    Traits_Bonus_Item.textContent = "Remote Shield Booster";

    Traits_Bonus_Percent2.className = "traits_percent";
    Traits_Bonus_Percent2.textContent = "10%";
    Traits_Bonus_Text21.className = "traits_text";
    Traits_Bonus_Text21.textContent = " reduction in ";
    Traits_Bonus_Text22.className = "traits_text";
    Traits_Bonus_Text22.textContent = " activation cost";
    Traits_Bonus_Item2.className = "traits_item";
    Traits_Bonus_Item2.textContent = "Remote Shield Booster";

    var Traits_Role_Bonus = document.createElement("p");

    Traits_Role_Bonus.className = "traits_header";
    Traits_Role_Bonus.textContent = "Role Bonus:";

    Traits_Bonus_Percent3.className = "traits_percent";
    Traits_Bonus_Percent3.textContent = "300%";
    Traits_Bonus_Text31.className = "traits_text";
    Traits_Bonus_Text31.textContent = " bonus to ";
    Traits_Bonus_Text32.className = "traits_text";
    Traits_Bonus_Text32.textContent = " falloff";
    Traits_Bonus_Item3.className = "traits_item";
    Traits_Bonus_Item3.textContent = "Remote Shield Booster";


    Content_Traits.appendChild(Traits_Frigate_Bonus);
    Content_Traits.appendChild(Traits_Bonus_Div);
    Traits_Bonus_Div.appendChild(Traits_Bonus_Percent);
    Traits_Bonus_Div.appendChild(Traits_Bonus_Text1);
    Traits_Bonus_Div.appendChild(Traits_Bonus_Item);
    Traits_Bonus_Div.appendChild(Traits_Bonus_Text2);
    Content_Traits.appendChild(Traits_Bonus_Div2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Percent2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Text21);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Item2);
    Traits_Bonus_Div2.appendChild(Traits_Bonus_Text22);
    
    Content_Traits.appendChild(Traits_Role_Bonus);
    Content_Traits.appendChild(Traits_Bonus_Div3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Percent3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Text31);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Item3);
    Traits_Bonus_Div3.appendChild(Traits_Bonus_Text32);

    fetch("Scripts/Caldari_Data/BantamData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
       InsertData(data);
    }
}

function condor(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/tackling.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CondorData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function griffin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/disruption.png";
    Traits_img5.src = "StyleSheets/icons/ECM.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/GriffinData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}
// Kestrel
function kestrel(){


    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/KestrelData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function merlin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/MerlinData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function heron(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/HeronData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function kirin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/KirinData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function kitsune(){

    var Content_Traits = document.querySelector("#traits");

    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/KitsuneData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function buzzard(){

    var Content_Traits = document.querySelector("#traits");

    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/BuzzardData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function manticore(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/ManticoreData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function hawk(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/HawkData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function harpy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/HarpyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function crow(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/attack.png";
    Traits_img4.src = "StyleSheets/icons/tackling.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CrowData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function raptor(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";
    Traits_img5.style.display = "none";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/RaptorData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function griffin_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/disruption.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img7.src = "StyleSheets/icons/ECM.png";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Navy_GriffinData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function hookbill(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/HookbillData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function cormorant(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CormorantData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        InsertData(data);
    }
}

function corax(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CoraxData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}

function flycatcher(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/FlycatcherData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}

function stork(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/StorkData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function jackdaw(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/JackdawData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function osprey(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/OspreyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function caracal(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CaracalData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function blackbird(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/BlackbirdData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function moa(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/MoaData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function osprey_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Osprey_NavyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function caracal_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Caracal_NavyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function tengu(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/TenguData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function ferox(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/FeroxData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function drake(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/DrakeData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function naga(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/NagaData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function drake_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Drake_NavyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function nighthawk(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/NighthawkData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function vulture(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/VultureData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function badger(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/BadgerData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function tayra(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/TayraData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function crane(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CraneData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function bustard(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/BustardData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function scorpion(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/ScorpionData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function rokh(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/RokhData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function raven(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/RavenData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function scorpion_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Scorpion_NavyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function raven_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/Raven_NavyData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function widow(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/WidowData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function golem(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/GolemData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function phoenix(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/PhoenixData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function minokawa(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/MinokawaData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function wyvern(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/WyvernData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function chimera(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/ChimeraData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function leviathan(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/LeviathanData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function charon(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/CharonData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}
function rhea(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector("#traits_icon1");
    var Traits_img2 = document.querySelector("#traits_icon2");
    var Traits_img3 = document.querySelector("#traits_icon3");
    var Traits_img4 = document.querySelector("#traits_icon4");
    var Traits_img5 = document.querySelector("#traits_icon5");
    var Traits_img6 = document.querySelector("#traits_icon6");
    var Traits_img7 = document.querySelector("#traits_icon7");
    var Traits_img8 = document.querySelector("#traits_icon8");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.style.display = "none";
    Traits_img7.style.display = "none";
    Traits_img8.style.display = "none";

    fetch("Scripts/Caldari_Data/RheaData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
        DisplayError();
    });
    function appendData(data) {
        //From ShipBuilder.js
        InsertData(data);
    }
}


