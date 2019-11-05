class Ship {
    constructor(Name, Class) {
        this.Name = Name;
        this.Class = Class;

        var shipicon = document.createElement("img");
        this.shipicon = shipicon.src;
    }
    geticon(){
        return this.shipicon;
    }
    seticon(shipicon){
        this.shipicon = shipicon;
    }

}

var Ibis = new Ship("Ibis", "Corvette");
Ibis.seticon("Scripts/images/601.png");
var Shuttle = new Ship("Shuttle", "Shuttle");
Shuttle.seticon("Scripts/images/Caldari_Shuttle.png");

var Bantam = new Ship("Bantam", "Frigate");
Bantam.seticon("Scripts/images/582.png");
var Condor = new Ship("Condor", "Frigate");
Condor.seticon("Scripts/images/583.png");
var Griffin = new Ship("Griffin", "Frigate");
Griffin.seticon("Scripts/images/584.png");
var Kestrel = new Ship("Kestrel", "Frigate");
Kestrel.seticon("Scripts/images/602.png");
var Merlin = new Ship("Merlin", "Frigate");
Merlin.seticon("Scripts/images/603.png");
var Heron = new Ship("Heron", "Frigate");
Heron.seticon("Scripts/images/605.png");

var Kirin = new Ship("Kirin", "Frigate");
Kirin.seticon("Scripts/images/582.png");
var Kitsune = new Ship("Kitsune", "Frigate");
Kitsune.seticon("Scripts/images/584.png");
var Buzzard = new Ship("Buzzard", "Frigate");
Buzzard.seticon("Scripts/images/605.png");
var Manticore = new Ship("Manticore", "Frigate");
Manticore.seticon("Scripts/images/Manticore.png");
var Hawk = new Ship("Hawk", "Frigate");
Hawk.seticon("Scripts/images/603.png");
var Harpy = new Ship("Harpy", "Frigate");
Harpy.seticon("Scripts/images/603.png");
var Crow = new Ship("Crow", "Frigate");
Crow.seticon("../Captainrax.github.ioScripts/images/Crow.png");
var Raptor = new Ship("Raptor", "Frigate");
Raptor.seticon("Scripts/images/583.png");

var Hookbill = new Ship("Hookbill", "Frigate");
Hookbill.seticon("Scripts/images/Hookbill.png");
var Griffin_Navy = new Ship("Griffin_Navy_Issue", "Frigate");
Griffin_Navy.seticon("Scripts/images/584.png");

var Cormorant = new Ship("Cormorant", "Destroyer");
Cormorant.seticon("Scripts/images/Cormorant.png");
var Corax = new Ship("Corax", "Destroyer");
Corax.seticon("Scripts/images/Corax.png");

var Charon = new Ship("Charon", "Freighter");
Charon.seticon("Scripts/images/doot.png");


console.log(Ibis);


function insert(Ship) {
    
    var grid = document.querySelector(".grid-container");
    var Ship_Div = document.createElement("div");
    var Ship_Name = document.createElement("pre");
    var Ship_Div_Title = document.createElement("div");
    var Ship_Div_Header = document.createElement("div");
    var Ship_Div_Header_Img = document.createElement("div");
    var Ship_Div_Header_Name = document.createElement("div");
    var Ship_Div_Body = document.createElement("div");
    var Ship_Div_Body_Nav = document.createElement("div");
    var Ship_Div_Body_Content = document.createElement("div");
    var Ship_Close = document.createElement("pre");
    var Ship_Title_Name = document.createElement("pre");
    var Ship_Img = document.createElement("img");

    var Ship_Div_Body_Nav_Ul = document.createElement("ul");
    var Ship_Div_Body_Nav_Ul_Li_Traits = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Description = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Attributes = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Fitting = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Requirements = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Mastery = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Variations = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Industry = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Skins = document.createElement("li");
    var Ship_Div_Body_Nav_Ul_Li_Traits_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Description_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Attributes_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Fitting_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Requirements_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Mastery_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Variations_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Industry_P = document.createElement("p");
    var Ship_Div_Body_Nav_Ul_Li_Skins_P = document.createElement("p");

    var Ship_Div_Body_Content_Traits = document.createElement("div");
    var Ship_Div_Body_Content_Description = document.createElement("div");
    var Ship_Div_Body_Content_Attributes = document.createElement("div");
    var Ship_Div_Body_Content_Fitting = document.createElement("div");
    var Ship_Div_Body_Content_Requirements = document.createElement("div");
    var Ship_Div_Body_Content_Mastery = document.createElement("div");
    var Ship_Div_Body_Content_Variations = document.createElement("div");
    var Ship_Div_Body_Content_Industy = document.createElement("div");
    var Ship_Div_Body_Content_Skins = document.createElement("div");

    Ship_Div_Header_Img.className = "ship_div_header_img";
    Ship_Div_Header_Name.className = "ship_div_header_name";
    Ship_Div_Header.className = "ship_div_header";
    
    Ship_Img.src = Ship.geticon();
    Ship_Img.id = "Ship_img";


    Ship_Name.className = "ship_name";

    Ship_Name.textContent = Ship.Name;

    Ship_Close.id = "close";
    Ship_Close.textContent = "x";

    Ship_Title_Name.className = "ship_title_name";
    Ship_Title_Name.textContent = Ship.Name + " (" + Ship.Class + ")" + ": Information";

    Ship_Div_Title.className = "ship_div_title";

    Ship_Div.id = "ship_div";

    Ship_Div_Body.className = "ship_div_body";

    Ship_Div_Body_Nav.className = "ship_div_body_nav";
    Ship_Div_Body_Nav_Ul.className = "ship_navbar";
    Ship_Div_Body_Nav_Ul_Li_Traits.className = "ship_tab active";
    Ship_Div_Body_Nav_Ul_Li_Traits.id = "ship_traits";
    Ship_Div_Body_Nav_Ul_Li_Traits_P.id = "ship_traits_tab";
    Ship_Div_Body_Nav_Ul_Li_Traits_P.textContent = "Traits";
    Ship_Div_Body_Nav_Ul_Li_Description.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Description.id = "ship_description";
    Ship_Div_Body_Nav_Ul_Li_Description_P.id = "ship_description_tab";
    Ship_Div_Body_Nav_Ul_Li_Description_P.textContent = "Description";
    Ship_Div_Body_Nav_Ul_Li_Attributes.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Attributes.id = "ship_attributes";
    Ship_Div_Body_Nav_Ul_Li_Attributes_P.id = "ship_attributes_tab";
    Ship_Div_Body_Nav_Ul_Li_Attributes_P.textContent = "Attributes";
    Ship_Div_Body_Nav_Ul_Li_Fitting.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Fitting.id = "ship_fitting";
    Ship_Div_Body_Nav_Ul_Li_Fitting_P.id = "ship_fitting_tab";
    Ship_Div_Body_Nav_Ul_Li_Fitting_P.textContent = "Fitting";
    Ship_Div_Body_Nav_Ul_Li_Requirements.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Requirements.id = "ship_requirements";
    Ship_Div_Body_Nav_Ul_Li_Requirements_P.id = "ship_requirements_tab";
    Ship_Div_Body_Nav_Ul_Li_Requirements_P.textContent = "Requirements";
    Ship_Div_Body_Nav_Ul_Li_Mastery.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Mastery.id = "ship_mastery";
    Ship_Div_Body_Nav_Ul_Li_Mastery_P.id = "ship_mastery_tab";
    Ship_Div_Body_Nav_Ul_Li_Mastery_P.textContent = "Mastery";
    Ship_Div_Body_Nav_Ul_Li_Variations.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Variations.id = "ship_variations";
    Ship_Div_Body_Nav_Ul_Li_Variations_P.id = "ship_variations_tab";
    Ship_Div_Body_Nav_Ul_Li_Variations_P.textContent = "Variations";
    Ship_Div_Body_Nav_Ul_Li_Industry.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Industry.id = "ship_industry";
    Ship_Div_Body_Nav_Ul_Li_Industry_P.id = "ship_industry_tab";
    Ship_Div_Body_Nav_Ul_Li_Industry_P.textContent = "Industry";
    Ship_Div_Body_Nav_Ul_Li_Skins.className = "ship_tab";
    Ship_Div_Body_Nav_Ul_Li_Skins.id = "ship_skins";
    Ship_Div_Body_Nav_Ul_Li_Skins_P.id = "ship_skins_tab";
    Ship_Div_Body_Nav_Ul_Li_Skins_P.textContent = "Skins";

    Ship_Div_Body_Content.className = "ship_div_body_content";
    Ship_Div_Body_Content_Traits.id = "traits";
    Ship_Div_Body_Content_Description.id = "description";
    Ship_Div_Body_Content_Attributes.id = "attributes";
    Ship_Div_Body_Content_Fitting.id = "fitting";
    Ship_Div_Body_Content_Requirements.id = "requirements";
    Ship_Div_Body_Content_Mastery.id = "mastery";
    Ship_Div_Body_Content_Variations.id = "variations";
    Ship_Div_Body_Content_Industy.id = "industry";
    Ship_Div_Body_Content_Skins.id = "skins";

    grid.appendChild(Ship_Div);
    Ship_Div.appendChild(Ship_Div_Title);
    Ship_Div_Title.appendChild(Ship_Close);
    Ship_Div_Title.appendChild(Ship_Title_Name);
    Ship_Div.appendChild(Ship_Div_Header);
    Ship_Div_Header_Img.appendChild(Ship_Img);
    Ship_Div_Header_Name.appendChild(Ship_Name);
    Ship_Div_Header.appendChild(Ship_Div_Header_Img);
    Ship_Div_Header.appendChild(Ship_Div_Header_Name);
    Ship_Div.appendChild(Ship_Div_Body);

    Ship_Div_Body.appendChild(Ship_Div_Body_Nav);
    Ship_Div_Body_Nav.appendChild(Ship_Div_Body_Nav_Ul);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Traits);
    Ship_Div_Body_Nav_Ul_Li_Traits.appendChild(Ship_Div_Body_Nav_Ul_Li_Traits_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Description);
    Ship_Div_Body_Nav_Ul_Li_Description.appendChild(Ship_Div_Body_Nav_Ul_Li_Description_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Attributes);
    Ship_Div_Body_Nav_Ul_Li_Attributes.appendChild(Ship_Div_Body_Nav_Ul_Li_Attributes_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Fitting);
    Ship_Div_Body_Nav_Ul_Li_Fitting.appendChild(Ship_Div_Body_Nav_Ul_Li_Fitting_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Requirements);
    Ship_Div_Body_Nav_Ul_Li_Requirements.appendChild(Ship_Div_Body_Nav_Ul_Li_Requirements_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Mastery);
    Ship_Div_Body_Nav_Ul_Li_Mastery.appendChild(Ship_Div_Body_Nav_Ul_Li_Mastery_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Variations);
    Ship_Div_Body_Nav_Ul_Li_Variations.appendChild(Ship_Div_Body_Nav_Ul_Li_Variations_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Industry);
    Ship_Div_Body_Nav_Ul_Li_Industry.appendChild(Ship_Div_Body_Nav_Ul_Li_Industry_P);
    Ship_Div_Body_Nav_Ul.appendChild(Ship_Div_Body_Nav_Ul_Li_Skins);
    Ship_Div_Body_Nav_Ul_Li_Skins.appendChild(Ship_Div_Body_Nav_Ul_Li_Skins_P);

    Ship_Div_Body.appendChild(Ship_Div_Body_Content);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Traits);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Description);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Attributes);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Fitting);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Requirements);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Mastery);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Variations);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Industy);
    Ship_Div_Body_Content.appendChild(Ship_Div_Body_Content_Skins);
    

    // prebuilt stuff.
    var Content_Traits = document.querySelector("#traits");
    
    var Traits_Characteristics = document.createElement("p");

    Traits_Characteristics.className = "traits_header";
    Traits_Characteristics.textContent = "Ship Characteristics:";
    
    Content_Traits.appendChild(Traits_Characteristics);

    var Traits_img1 = document.createElement("img");
    var Traits_img2 = document.createElement("img");
    var Traits_img3 = document.createElement("img");
    var Traits_img4 = document.createElement("img");
    var Traits_img5 = document.createElement("img");
    var Traits_img6 = document.createElement("img");
    var Traits_img7 = document.createElement("img");
    var Traits_img8 = document.createElement("img");

    Traits_img1.className = "traits_icon1";
    Traits_img2.className = "traits_icon2";
    Traits_img3.className = "traits_icon3";
    Traits_img4.className = "traits_icon4";
    Traits_img5.className = "traits_icon5";
    Traits_img6.className = "traits_icon6";
    Traits_img7.className = "traits_icon7";
    Traits_img8.className = "traits_icon8";
    
    Content_Traits.appendChild(Traits_img1);
    Content_Traits.appendChild(Traits_img2);
    Content_Traits.appendChild(Traits_img3);
    Content_Traits.appendChild(Traits_img4);
    Content_Traits.appendChild(Traits_img5);
    Content_Traits.appendChild(Traits_img6);
    Content_Traits.appendChild(Traits_img7);
    Content_Traits.appendChild(Traits_img8);


    var Content_Attributes = document.querySelector("#attributes");
    for (var i = 0; i <= 45; i++){
        var Attributes_Div = document.createElement("div");
        Attributes_Div.className = "AT";
        Attributes_Div.id = "AT" + i;
        Content_Attributes.appendChild(Attributes_Div);
    }

    var Attributes_Structure_Title = document.createElement("p");
    var Attributes_Armor_Title = document.createElement("p");
    var Attributes_Shield_Title = document.createElement("p");
    var Attributes_Capacitor_Title = document.createElement("p");
    var Attributes_Targeting_Title = document.createElement("p");
    var Attributes_Propulsion_Title = document.createElement("p");

    var Attributes_Structure_Hitpoints = document.createElement("p");
    var Attributes_Structure_Hitpoints_Img = document.createElement("img");
    var Attributes_Structure_Capacity = document.createElement("p");
    var Attributes_Structure_Capacity_Img = document.createElement("img");
    var Attributes_Structure_Drone_Capacity = document.createElement("p");
    var Attributes_Structure_Drone_Capacity_Img = document.createElement("img");
    var Attributes_Structure_Drone_Bandwidth = document.createElement("p");
    var Attributes_Structure_Drone_Bandwidth_Img = document.createElement("img");
    var Attributes_Structure_Mass = document.createElement("p");
    var Attributes_Structure_Mass_Img = document.createElement("img");
    var Attributes_Structure_Volume = document.createElement("p");
    var Attributes_Structure_Volume_Img = document.createElement("img");
    var Attributes_Structure_Inertia_Modifier = document.createElement("p");
    var Attributes_Structure_Inertia_Modifier_Img = document.createElement("img");
    // Structure Resistances
    var Attributes_Structure_EM = document.createElement("p");
    var Attributes_Structure_EM_Img = document.createElement("img");
    var Attributes_Structure_Thermal = document.createElement("p");
    var Attributes_Structure_Thermal_Img = document.createElement("img");
    var Attributes_Structure_Kinetic = document.createElement("p");
    var Attributes_Structure_Kinetic_Img = document.createElement("img");
    var Attributes_Structure_Explosive = document.createElement("p");
    var Attributes_Structure_Explosive_Img = document.createElement("img");

    Attributes_Structure_Title.textContent = "Structure";
    Attributes_Structure_Title.className = "attributes_titles";
    Attributes_Armor_Title.textContent = "Armor";
    Attributes_Armor_Title.className = "attributes_titles";
    Attributes_Shield_Title.textContent = "Shield";
    Attributes_Shield_Title.className = "attributes_titles";
    Attributes_Capacitor_Title.textContent = "Capacitor";
    Attributes_Capacitor_Title.className = "attributes_titles";
    Attributes_Targeting_Title.textContent = "Targeting";
    Attributes_Targeting_Title.className = "attributes_titles";
    Attributes_Propulsion_Title.textContent = "Propulsion";
    Attributes_Propulsion_Title.className = "attributes_titles";
    // Structure 
    Attributes_Structure_Hitpoints.textContent = "Structure Hitpoints";
    Attributes_Structure_Hitpoints.className = "attribute_name";
    Attributes_Structure_Hitpoints_Img.className = "attribute_name_img";
    Attributes_Structure_Hitpoints_Img.src = "StyleSheets/ship_info_icons/Structure.png";

    Attributes_Structure_Capacity.textContent = "Capacity";
    Attributes_Structure_Capacity.className = "attribute_name";
    Attributes_Structure_Capacity_Img.className = "attribute_name_img";
    Attributes_Structure_Capacity_Img.src = "StyleSheets/ship_info_icons/Capacity.png";

    Attributes_Structure_Drone_Capacity.textContent = "Drone Capacity";
    Attributes_Structure_Drone_Capacity.className = "attribute_name";
    Attributes_Structure_Drone_Capacity_Img.className = "attribute_name_img";
    Attributes_Structure_Drone_Capacity_Img.src = "StyleSheets/ship_info_icons/Drone_Capacity.png";

    Attributes_Structure_Drone_Bandwidth.textContent = "Drone Bandwidth";
    Attributes_Structure_Drone_Bandwidth.className = "attribute_name";
    Attributes_Structure_Drone_Bandwidth_Img.className = "attribute_name_img";
    Attributes_Structure_Drone_Bandwidth_Img.src = "StyleSheets/ship_info_icons/Drone_Bandwidth.png";

    Attributes_Structure_Mass.textContent = "Mass";
    Attributes_Structure_Mass.className = "attribute_name";
    Attributes_Structure_Mass_Img.className = "attribute_name_img";
    Attributes_Structure_Mass_Img.src = "StyleSheets/ship_info_icons/Mass.png";

    Attributes_Structure_Volume.textContent = "Volume";
    Attributes_Structure_Volume.className = "attribute_name";
    Attributes_Structure_Volume_Img.className = "attribute_name_img";
    Attributes_Structure_Volume_Img.src = "StyleSheets/ship_info_icons/Structure.png";

    Attributes_Structure_Inertia_Modifier.textContent = "Inertia Modifier";
    Attributes_Structure_Inertia_Modifier.className = "attribute_name";
    Attributes_Structure_Inertia_Modifier_Img.className = "attribute_name_img";
    Attributes_Structure_Inertia_Modifier_Img.src = "StyleSheets/ship_info_icons/Inertia_Modifier.png";
    // Resistances
    Attributes_Structure_EM.textContent = "%";
    Attributes_Structure_EM.className = "attribute_structure_resistance";
    Attributes_Structure_EM_Img.className = "attribute_name_img";
    Attributes_Structure_EM_Img.src = "StyleSheets/ship_info_icons/EM.png";

    Attributes_Structure_Thermal.textContent = "%";
    Attributes_Structure_Thermal.className = "attribute_structure_resistance";
    Attributes_Structure_Thermal_Img.className = "attribute_name_img";
    Attributes_Structure_Thermal_Img.src = "StyleSheets/ship_info_icons/Thermal.png";
    
    Attributes_Structure_Kinetic.textContent = "%";
    Attributes_Structure_Kinetic.className = "attribute_structure_resistance";
    Attributes_Structure_Kinetic_Img.className = "attribute_name_img";
    Attributes_Structure_Kinetic_Img.src = "StyleSheets/ship_info_icons/Kinetic.png";
    
    Attributes_Structure_Explosive.textContent = "%";
    Attributes_Structure_Explosive.className = "attribute_structure_resistance";
    Attributes_Structure_Explosive_Img.className = "attribute_name_img";
    Attributes_Structure_Explosive_Img.src = "StyleSheets/ship_info_icons/Explosive.png";
    
    var Attributes_Str = document.querySelector("#AT0");
    var Attributes_Arm = document.querySelector("#AT16");
    var Attributes_Shi = document.querySelector("#AT20");
    var Attributes_Cap = document.querySelector("#AT26");
    var Attributes_Tar = document.querySelector("#AT31");
    var Attributes_Pro = document.querySelector("#AT41");
    
    var Attributes_Str_Hitpoints = document.querySelector("#AT1");
    var Attributes_Str_Capacity = document.querySelector("#AT3");
    var Attributes_Str_Drone_Capacity = document.querySelector("#AT5");
    var Attributes_Str_Drone_Bandwidth = document.querySelector("#AT7");
    var Attributes_Str_Mass = document.querySelector("#AT9");
    var Attributes_Str_Volume = document.querySelector("#AT11");
    var Attributes_Str_Inertia_Modifier = document.querySelector("#AT13");

    var Attributes_Str_Resistances = document.querySelector("#AT15");

    Attributes_Str.appendChild(Attributes_Structure_Title);
    Attributes_Arm.appendChild(Attributes_Armor_Title);
    Attributes_Shi.appendChild(Attributes_Shield_Title);
    Attributes_Cap.appendChild(Attributes_Capacitor_Title);
    Attributes_Tar.appendChild(Attributes_Targeting_Title);
    Attributes_Pro.appendChild(Attributes_Propulsion_Title);
    
    Attributes_Str_Hitpoints.appendChild(Attributes_Structure_Hitpoints_Img);
    Attributes_Str_Hitpoints.appendChild(Attributes_Structure_Hitpoints);
    Attributes_Str_Capacity.appendChild(Attributes_Structure_Capacity_Img);
    Attributes_Str_Capacity.appendChild(Attributes_Structure_Capacity);
    Attributes_Str_Drone_Capacity.appendChild(Attributes_Structure_Drone_Capacity_Img);
    Attributes_Str_Drone_Capacity.appendChild(Attributes_Structure_Drone_Capacity);
    Attributes_Str_Drone_Bandwidth.appendChild(Attributes_Structure_Drone_Bandwidth_Img);
    Attributes_Str_Drone_Bandwidth.appendChild(Attributes_Structure_Drone_Bandwidth);
    Attributes_Str_Mass.appendChild(Attributes_Structure_Mass_Img);
    Attributes_Str_Mass.appendChild(Attributes_Structure_Mass);
    Attributes_Str_Volume.appendChild(Attributes_Structure_Volume_Img);
    Attributes_Str_Volume.appendChild(Attributes_Structure_Volume);
    Attributes_Str_Inertia_Modifier.appendChild(Attributes_Structure_Inertia_Modifier_Img);
    Attributes_Str_Inertia_Modifier.appendChild(Attributes_Structure_Inertia_Modifier);
    
    Attributes_Str_Resistances.appendChild(Attributes_Structure_EM_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_EM);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Thermal_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Thermal);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Kinetic_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Kinetic);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Explosive_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Explosive);



function Close() {
    var Ship_Div = document.querySelector("#ship_div");
    const CloseButton = document.querySelector("#close");
    CloseButton.addEventListener("click", function(){

    Ship_Div.remove();
    //From EventListener.js - ensures only 1 Ship_Div can be created
    pagecount = false;
    });
}

Ship_nav();

dragElement(document.getElementById("ship_div"));
Close();
}



