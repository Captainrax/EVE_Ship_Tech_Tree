var Venture = new Ship("Venture", "Mining Frigate");
Venture.seticon("Scripts/ORE_Data/images/Venture.png");

var Prospect = new Ship("Prospect", "Expedition Frigate");
Prospect.seticon("Scripts/ORE_Data/images/Prospect.png");
var Endurance = new Ship("Endurance", "Expedition Frigate");
Endurance.seticon("Scripts/ORE_Data/images/Endurance.png");

var Procurer = new Ship("Procurer", "Mining Barge");
Procurer.seticon("Scripts/ORE_Data/images/Procurer.png");
var Covetor = new Ship("Covetor", "Mining Barge");
Covetor.seticon("Scripts/ORE_Data/images/Covetor.png");
var Retriever = new Ship("Retriever", "Mining Barge");
Retriever.seticon("Scripts/ORE_Data/images/Retriever.png");

var Hulk = new Ship("Hulk", "Exhumer");
Hulk.seticon("Scripts/ORE_Data/images/Hulk.png");
var Skiff = new Ship("Skiff", "Exhumer");
Skiff.seticon("Scripts/ORE_Data/images/Skiff.png");
var Mackinaw = new Ship("Mackinaw", "Exhumer");
Mackinaw.seticon("Scripts/ORE_Data/images/Mackinaw.png");

var Noctis = new Ship("Noctis", "ORE Industrial Ship");
Noctis.seticon("Scripts/ORE_Data/images/Noctis.png");

var Porpoise = new Ship("Porpoise", "Industrial Command Ship");
Porpoise.seticon("Scripts/ORE_Data/images/Porpoise.png");
var Orca = new Ship("Orca", "Industrial Command Ship");
Orca.seticon("Scripts/ORE_Data/images/Orca.png");

var Rorqual = new Ship("Orca", "Capital Industrial Ship");
Rorqual.seticon("Scripts/ORE_Data/images/Rorqual.png");

var Bowhead = new Ship("Bowhead", "Freighter");
Bowhead.seticon("Scripts/ORE_Data/images/Bowhead.png");

function venture(){
    
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

    // var Traits_Bonus_Div1 = document.createElement("div");
    // var Traits_Bonus_Div2 = document.createElement("div");
    // var Traits_Bonus_Div3 = document.createElement("div");
    // var Traits_Bonus_Div4 = document.createElement("div");

    // var Traits_Bonus_Percent = document.createElement("pre");
    // var Traits_Bonus_Item = document.createElement("pre");
    // var Traits_Bonus_Text1 = document.createElement("pre");
    // var Traits_Bonus_Text2 = document.createElement("pre");

    // var Traits_Bonus_Percent2 = document.createElement("pre");
    // var Traits_Bonus_Item2 = document.createElement("pre");
    // var Traits_Bonus_Text21 = document.createElement("pre");
    // var Traits_Bonus_Text22 = document.createElement("pre");

    // var Traits_Bonus_Percent3 = document.createElement("pre");
    // var Traits_Bonus_Item3 = document.createElement("pre");
    // var Traits_Bonus_Text31 = document.createElement("pre");
    // var Traits_Bonus_Text32 = document.createElement("pre");

    // var Traits_Bonus_Percent4 = document.createElement("pre");
    // var Traits_Bonus_Item4 = document.createElement("pre");
    // var Traits_Bonus_Text41 = document.createElement("pre");
    // var Traits_Bonus_Text42 = document.createElement("pre");

    // Traits_Bonus_Div1.className = "traits_div";
    // Traits_Bonus_Div2.className = "traits_div";
    // Traits_Bonus_Div3.className = "traits_div";
    // Traits_Bonus_Div4.className = "traits_div";

    // var Traits_Role_Bonus = document.createElement("p");
    
    // Traits_Role_Bonus.className = "traits_header";
    // Traits_Role_Bonus.textContent = "Role Bonus:";

    // Traits_Bonus_Percent.className = "traits_percent";
    // Traits_Bonus_Percent.textContent = "20%";
    // Traits_Bonus_Text1.className = "traits_text";
    // Traits_Bonus_Text1.textContent = " bonus to ";
    // Traits_Bonus_Item.className = "traits_item";
    // Traits_Bonus_Item.textContent = "Small Hybrid Turret";
    // Traits_Bonus_Text2.className = "traits_text";
    // Traits_Bonus_Text2.textContent = " range";

    // Traits_Bonus_Percent2.className = "traits_percent";
    // Traits_Bonus_Percent2.textContent = "10%";
    // Traits_Bonus_Text21.className = "traits_text";
    // Traits_Bonus_Text21.textContent = " bonus to ";
    // Traits_Bonus_Item2.className = "traits_item";
    // Traits_Bonus_Item2.textContent = "kinetic Light Missile and Rocket damage";
    // Traits_Bonus_Text22.className = "traits_text";
    // Traits_Bonus_Text22.textContent = "";

    // Traits_Bonus_Percent3.className = "traits_percent";
    // Traits_Bonus_Percent3.textContent = "30%";
    // Traits_Bonus_Text31.className = "traits_text";
    // Traits_Bonus_Text31.textContent = " bonus to ";
    // Traits_Bonus_Item3.className = "traits_item";
    // Traits_Bonus_Item3.textContent = "ECM Target Jammer strength";
    // Traits_Bonus_Text32.className = "traits_text";
    // Traits_Bonus_Text32.textContent = "";

    // Traits_Bonus_Percent4.className = "traits_percent";
    // Traits_Bonus_Percent4.textContent = "8%";
    // Traits_Bonus_Text41.className = "traits_text";
    // Traits_Bonus_Text41.textContent = " bonus to ";
    // Traits_Bonus_Item4.className = "traits_item";
    // Traits_Bonus_Item4.textContent = "all shield resistances";
    // Traits_Bonus_Text42.className = "traits_text";
    // Traits_Bonus_Text42.textContent = "";

    // Content_Traits.appendChild(Traits_Role_Bonus);
    // Content_Traits.appendChild(Traits_Bonus_Div1);
    // Traits_Bonus_Div1.appendChild(Traits_Bonus_Percent);
    // Traits_Bonus_Div1.appendChild(Traits_Bonus_Text1);
    // Traits_Bonus_Div1.appendChild(Traits_Bonus_Item);
    // Traits_Bonus_Div1.appendChild(Traits_Bonus_Text2);
    // Content_Traits.appendChild(Traits_Bonus_Div2);
    // Traits_Bonus_Div2.appendChild(Traits_Bonus_Percent2);
    // Traits_Bonus_Div2.appendChild(Traits_Bonus_Text21);
    // Traits_Bonus_Div2.appendChild(Traits_Bonus_Item2);
    // Traits_Bonus_Div2.appendChild(Traits_Bonus_Text22);
    // Content_Traits.appendChild(Traits_Bonus_Div3);
    // Traits_Bonus_Div3.appendChild(Traits_Bonus_Percent3);
    // Traits_Bonus_Div3.appendChild(Traits_Bonus_Text31);
    // Traits_Bonus_Div3.appendChild(Traits_Bonus_Item3);
    // Traits_Bonus_Div3.appendChild(Traits_Bonus_Text32);
    // Content_Traits.appendChild(Traits_Bonus_Div4);
    // Traits_Bonus_Div4.appendChild(Traits_Bonus_Percent4);
    // Traits_Bonus_Div4.appendChild(Traits_Bonus_Text41);
    // Traits_Bonus_Div4.appendChild(Traits_Bonus_Item4);
    // Traits_Bonus_Div4.appendChild(Traits_Bonus_Text42);

    fetch("Scripts/ORE_Data/VentureData.json")
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

function prospect(){

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

    fetch("Scripts/ORE_Data/ProspectData.json")
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

function endurance(){
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

    fetch("Scripts/ORE_Data/EnduranceData.json")
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

function procurer(){

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

    fetch("Scripts/ORE_Data/ProcurerData.json")
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

function covetor(){

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

    fetch("Scripts/ORE_Data/CovetorData.json")
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

function retriever(){

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

    fetch("Scripts/ORE_Data/RetrieverData.json")
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

function hulk(){

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

    fetch("Scripts/ORE_Data/HulkData.json")
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

function skiff(){

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

    fetch("Scripts/ORE_Data/SkiffData.json")
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

function mackinaw(){

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

    fetch("Scripts/ORE_Data/MackinawData.json")
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

function noctis(){

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

    fetch("Scripts/ORE_Data/NoctisData.json")
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

function porpoise(){

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

    fetch("Scripts/ORE_Data/porpoiseData.json")
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

function orca(){

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

    fetch("Scripts/ORE_Data/OrcaData.json")
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

function rorqual(){

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

    fetch("Scripts/ORE_Data/RorqualData.json")
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

function bowhead(){

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

    fetch("Scripts/ORE_Data/BowheadData.json")
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