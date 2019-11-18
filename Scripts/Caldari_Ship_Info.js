
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

    fetch("Scripts/Ship_Data/IbisData.json")
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

    fetch("Scripts/Ship_Data/BantamData.json")
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

    fetch("Scripts/Ship_Data/CondorData.json")
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

    fetch("Scripts/Ship_Data/GriffinData.json")
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

    fetch("Scripts/Ship_Data/KestrelData.json")
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

    fetch("Scripts/Ship_Data/MerlinData.json")
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

    fetch("Scripts/Ship_Data/HeronData.json")
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

    fetch("Scripts/Ship_Data/KirinData.json")
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

    fetch("Scripts/Ship_Data/KitsuneData.json")
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

    fetch("Scripts/Ship_Data/BuzzardData.json")
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

    fetch("Scripts/Ship_Data/ManticoreData.json")
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

    fetch("Scripts/Ship_Data/HawkData.json")
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

    fetch("Scripts/Ship_Data/HarpyData.json")
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

    fetch("Scripts/Ship_Data/CrowData.json")
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

    fetch("Scripts/Ship_Data/RaptorData.json")
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

    fetch("Scripts/Ship_Data/Navy_GriffinData.json")
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

    fetch("Scripts/Ship_Data/HookbillData.json")
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

    fetch("Scripts/Ship_Data/CormorantData.json")
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

    fetch("Scripts/Ship_Data/CoraxData.json")
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
