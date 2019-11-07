
function ibis(){
    
    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");
    var Traits_img6 = document.querySelector(".traits_icon5");
    var Traits_img7 = document.querySelector(".traits_icon6");
    var Traits_img8 = document.querySelector(".traits_icon7");

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

    var Content_Description = document.querySelector("#description");
    var Description = document.createElement("p");

    Description.textContent = "ibis very Corvettey";


    Content_Description.appendChild(Description);
    
}

function bantam(){
    var Content_Traits = document.querySelector("#traits");
    
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/support.png";
    
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



    
    var Content_Description = document.querySelector("#description");
    var Description = document.createElement("p");


    Description.textContent = "In YC114 each major empire faction, having been embroiled in a harrowing, extensive, long-term war, recognized the growing need for support and logistics functionality in their vessels during the kind of protracted interstellar warfare that might otherwise prove exhausting for its participants. In the Caldari State, this led to the redesign and redeployment of the Bantam. The Bantam, a strong and sturdy craft, was originally an extremely effective mining frigate. After its redesign, the Bantam's large structure had to give way for logistics systems that ate up some of its interior room but allowed it to focus extensively on shield support for fellow vessels. ";
    
    Content_Description.appendChild(Description);

    // fetch("Scripts/KestrelData.json")
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     appendData(data);
    // })
    // .catch(function (err) {
    //     console.log('error: ' + err);
    // });
    // function appendData(data) {
    //     for(var i = 0;i < data.Kestrel.length;i++){

    //         if(data.Kestrel[i]["Kestrel_Data.Column1.attribute_id"] === "4"){
    //             var testdata = document.querySelector("#AT10");
    //             testdata.textContent = data.Kestrel[i]["Kestrel_Data.Column1.value"] + " kg";
    //             console.log(data.Kestrel[i]["Kestrel_Data.Column1.value"]);
    //         }
    //     }
    // }
}

function condor(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");
    var Traits_img6 = document.querySelector(".traits_icon6");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/dot.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";

}

function griffin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/disruption.png";
    Traits_img5.src = "StyleSheets/icons/ECM.png";

}
// Kestrel

function kestrel(){


    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";

    fetch("Scripts/KestrelData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {
        for(var i = 0;i < data.Kestrel.length;i++){

            if(data.Kestrel[i]["Kestrel_Data.Column1.attribute_id"] === "4"){
                var testdata = document.querySelector("#AT10");
                testdata.textContent = data.Kestrel[i]["Kestrel_Data.Column1.value"] + " kg";
                console.log(data.Kestrel[i]["Kestrel_Data.Column1.value"]);
            }
        }
    }
}

function merlin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";

}

function heron(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function kirin(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function kitsune(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function buzzard(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function manticore(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function hawk(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function harpy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function crow(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");
    var Traits_img6 = document.querySelector(".traits_icon6");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/attack.png";
    Traits_img4.src = "StyleSheets/icons/tackling.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/missiles.png";

}

function raptor(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/shields.png";
    Traits_img4.src = "StyleSheets/icons/exploration.png";

}

function griffin_navy(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");
    var Traits_img6 = document.querySelector(".traits_icon6");
    var Traits_img7 = document.querySelector(".traits_icon7");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/dot.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    Traits_img6.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img7.src = "StyleSheets/icons/ECM.png";

}

function hookbill(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/combat.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";

}

function cormorant(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/hybridTurrets.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";

}

function corax(){

    var Content_Traits = document.querySelector("#traits");
    
    var Traits_img1 = document.querySelector(".traits_icon1");
    var Traits_img2 = document.querySelector(".traits_icon2");
    var Traits_img3 = document.querySelector(".traits_icon3");
    var Traits_img4 = document.querySelector(".traits_icon4");
    var Traits_img5 = document.querySelector(".traits_icon5");

    Traits_img1.src = "StyleSheets/icons/dot.png";
    Traits_img2.src = "StyleSheets/icons/small.png";
    Traits_img3.src = "StyleSheets/icons/missiles.png";
    Traits_img4.src = "StyleSheets/icons/attack.png";
    Traits_img5.src = "StyleSheets/icons/shields.png";
    
    var testdata = document.querySelector("#AT6");
    testdata.textContent = "0";
    var testdata1 = document.querySelector("#AT8");
    testdata1.textContent = "0";

    fetch("Scripts/CoraxData.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {
        for(var i = 0;i < data.length;i++){

            if(data[i]["A"] === "4"){
                var testdata = document.querySelector("#AT10");
                testdata.textContent = data[i]["B"] + " kg";
                //console.log(data[i]["B"]);
            }
            if(data[i]["A"] === "482"){
                var testdata = document.querySelector("#AT4");
                testdata.textContent = data[i]["B"] + " m3";
            }
            if(data[i]["A"] === "9"){
                var testdata = document.querySelector("#AT2");
                testdata.textContent = data[i]["B"] + " HP";
            }
            if(data[i]["A"] === "161"){
                var testdata = document.querySelector("#AT12");
                testdata.textContent = data[i]["B"] + " m3";
            }
            if(data[i]["A"] === "70"){
                var testdata = document.querySelector("#AT14");
                testdata.textContent = data[i]["B"];
            }
        }
    }
}