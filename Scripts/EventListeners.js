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


var Freighter = document.querySelector("#showship_freighter");
var T2_Freighter = document.querySelector("#showship_t2_freighter");
var pagecount = false;


Freighter.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        insert(Charon);
    }
});
Rookie1.addEventListener("click", function(){
//ensures only 1 Ship_Div can be created
    if (pagecount === false){
        pagecount = true;

        insert(Ibis);
        ibis();
    } else if (pagecount === true){
        console.log("wat the fuck");
    }
});

Shuttle.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        insert(Shuttle);
    }
});
Frigate1.addEventListener("click", function(){
    if (pagecount === false){
        pagecount = true;
        insert(Bantam);
        bantam();
    }
});
Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Condor);
        condor();
    } 
});
Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Griffin);
        griffin();
    }
});
Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Kestrel);
        kestrel();
    } 
});
Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Merlin);
        merlin();
    } 
});
Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Heron);
        heron();
    } 
});
T2_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Kirin);
        kirin();
    } 
});
T2_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Kitsune);
        kitsune();
    } 
});
T2_Frigate3.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Buzzard);
        buzzard();
    } 
});
T2_Frigate4.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Manticore);
        manticore();
    } 
});
T2_Frigate5.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Hawk);
        hawk();
    } 
});
T2_Frigate6.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Harpy);
        harpy();
    } 
});
T2_Frigate7.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Crow);
        crow();
    } 
});
T2_Frigate8.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Raptor);
        raptor();
    } 
});
Navy_Frigate1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Griffin_Navy);
        griffin_navy();
    } 
});
Navy_Frigate2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Hookbill);
        hookbill();
    } 
});
Destroyer1.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Cormorant);
        cormorant();
    } 
});
Destroyer2.addEventListener("click", function(){
    if (pagecount == false){
        pagecount = true;
        insert(Corax);
        corax();
    } 
});

// should probably put all of this into one function so its clearerere to read in the actual buttons.
function Ship_nav(){

var Ship_Traits = document.querySelector("#ship_traits");
var Ship_Description = document.querySelector("#ship_description");
var Ship_Attributes = document.querySelector("#ship_attributes");
var Ship_Fitting = document.querySelector("#ship_fitting");
var Ship_Requirements = document.querySelector("#ship_requirements");
var Ship_Mastery = document.querySelector("#ship_mastery");
var Ship_Variations = document.querySelector("#ship_variations");
var Ship_Industry = document.querySelector("#ship_industry");
var Ship_Skins = document.querySelector("#ship_skins");
var Traits = document.querySelector("#traits");
var Description = document.querySelector("#description");
var Attributes = document.querySelector("#attributes");
var Fitting = document.querySelector("#fitting");
var Requirements = document.querySelector("#requirements");
var Mastery = document.querySelector("#mastery");
var Variations = document.querySelector("#variations");
var Industry = document.querySelector("#industry");
var Skins = document.querySelector("#skins");

Ship_Traits.addEventListener("click", function(){
    Traits.style.display = "block";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Description.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "block";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Attributes.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "grid";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Fitting.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "block";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Requirements.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "block";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Mastery.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "block";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Variations.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "block";
    Industry.style.display = "none";
    Skins.style.display = "none";
});
Ship_Industry.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "block";
    Skins.style.display = "none";
});
Ship_Skins.addEventListener("click", function(){
    Traits.style.display = "none";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "block";
});


// Add active class to the current button (highlight it)
var header = document.querySelector(".ship_navbar");
var btns = header.getElementsByClassName("ship_tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
}