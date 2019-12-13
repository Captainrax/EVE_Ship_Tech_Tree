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

    Traits_img1.id = "traits_icon1";
    Traits_img1.className = "traits_icon";
    Traits_img2.id = "traits_icon2";
    Traits_img2.className = "traits_icon";
    Traits_img3.id = "traits_icon3";
    Traits_img3.className = "traits_icon";
    Traits_img4.id = "traits_icon4";
    Traits_img4.className = "traits_icon";
    Traits_img5.id = "traits_icon5";
    Traits_img5.className = "traits_icon";
    Traits_img6.id = "traits_icon6";
    Traits_img6.className = "traits_icon";
    Traits_img7.id = "traits_icon7";
    Traits_img7.className = "traits_icon";
    Traits_img8.id = "traits_icon8";
    Traits_img8.className = "traits_icon";

    Content_Traits.appendChild(Traits_img1);
    Content_Traits.appendChild(Traits_img2);
    Content_Traits.appendChild(Traits_img3);
    Content_Traits.appendChild(Traits_img4);
    Content_Traits.appendChild(Traits_img5);
    Content_Traits.appendChild(Traits_img6);
    Content_Traits.appendChild(Traits_img7);
    Content_Traits.appendChild(Traits_img8);

    var Content_Description = document.querySelector("#description");
    var Description_P = document.createElement("p");

    Description_P.id = "description_text";
    Content_Description.appendChild(Description_P);

    var Content_Attributes = document.querySelector("#attributes");
    for (var i = 0; i <= 100; i++){
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
    var Attributes_Structure_Mass = document.createElement("p");
    var Attributes_Structure_Mass_Img = document.createElement("img");
    var Attributes_Structure_Volume = document.createElement("p");
    var Attributes_Structure_Volume_Img = document.createElement("img");
    var Attributes_Structure_Inertia_Modifier = document.createElement("p");
    var Attributes_Structure_Inertia_Modifier_Img = document.createElement("img");

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

    // Attribute titles that every ship has
    var Attributes_Str = document.querySelector("#AT0");
    var Attributes_Arm = document.querySelector("#AT26");
    var Attributes_Shi = document.querySelector("#AT30");
    var Attributes_Cap = document.querySelector("#AT51");
    var Attributes_Tar = document.querySelector("#AT56");
    var Attributes_Pro = document.querySelector("#AT90");
    
    var Attributes_Str_Hitpoints = document.querySelector("#AT1");
    var Attributes_Str_Capacity = document.querySelector("#AT3");
    var Attributes_Str_Mass = document.querySelector("#AT9");
    var Attributes_Str_Volume = document.querySelector("#AT11");
    var Attributes_Str_Inertia_Modifier = document.querySelector("#AT13");

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

    Attributes_Str_Mass.appendChild(Attributes_Structure_Mass_Img);
    Attributes_Str_Mass.appendChild(Attributes_Structure_Mass);
    Attributes_Str_Volume.appendChild(Attributes_Structure_Volume_Img);
    Attributes_Str_Volume.appendChild(Attributes_Structure_Volume);
    Attributes_Str_Inertia_Modifier.appendChild(Attributes_Structure_Inertia_Modifier_Img);
    Attributes_Str_Inertia_Modifier.appendChild(Attributes_Structure_Inertia_Modifier);
    // Structure Resistances.
    var Attributes_Structure_EM = document.createElement("div");
    var Attributes_Structure_EM_Bar = document.createElement("div");
    var Attributes_Structure_EM_Value = document.createElement("span");
    var Attributes_Structure_EM_Img = document.createElement("img");
    var Attributes_Structure_Thermal = document.createElement("div");
    var Attributes_Structure_Thermal_Bar = document.createElement("div");
    var Attributes_Structure_Thermal_Value = document.createElement("span");
    var Attributes_Structure_Thermal_Img = document.createElement("img");
    var Attributes_Structure_Kinetic = document.createElement("div");
    var Attributes_Structure_Kinetic_Bar = document.createElement("div");
    var Attributes_Structure_Kinetic_Value = document.createElement("span");
    var Attributes_Structure_Kinetic_Img = document.createElement("img");
    var Attributes_Structure_Explosive = document.createElement("div");
    var Attributes_Structure_Explosive_Bar = document.createElement("div");
    var Attributes_Structure_Explosive_Value = document.createElement("span");
    var Attributes_Structure_Explosive_Img = document.createElement("img");

    Attributes_Structure_EM.className = "attribute_resistance";
    Attributes_Structure_EM.id = "structure_em_resistance";
    Attributes_Structure_EM_Bar.className = "resistance_bar";
    Attributes_Structure_EM_Bar.id = "structure_em_resistance_bar";
    Attributes_Structure_EM_Value.className = "resistance_value";
    Attributes_Structure_EM_Value.id = "structure_em_resistance_value";
    Attributes_Structure_EM_Value.textContent = "";
    Attributes_Structure_EM_Img.className = "attribute_name_img";
    Attributes_Structure_EM_Img.src = "StyleSheets/ship_info_icons/EM.png";

    Attributes_Structure_Thermal.className = "attribute_resistance";
    Attributes_Structure_Thermal.id = "structure_thermal_resistance";
    Attributes_Structure_Thermal_Bar.className = "resistance_bar";
    Attributes_Structure_Thermal_Bar.id = "structure_thermal_resistance_bar";
    Attributes_Structure_Thermal_Value.className = "resistance_value";
    Attributes_Structure_Thermal_Value.id = "structure_thermal_resistance_value";
    Attributes_Structure_Thermal_Value.textContent = "";
    Attributes_Structure_Thermal_Img.className = "attribute_name_img";
    Attributes_Structure_Thermal_Img.src = "StyleSheets/ship_info_icons/Thermal.png";
    
    Attributes_Structure_Kinetic.className = "attribute_resistance";
    Attributes_Structure_Kinetic.id = "structure_kinetic_resistance";
    Attributes_Structure_Kinetic_Bar.className = "resistance_bar";
    Attributes_Structure_Kinetic_Bar.id = "structure_kinetic_resistance_bar";
    Attributes_Structure_Kinetic_Value.className = "resistance_value";
    Attributes_Structure_Kinetic_Value.id = "structure_kinetic_resistance_value";
    Attributes_Structure_Kinetic_Value.textContent = "";
    Attributes_Structure_Kinetic_Img.className = "attribute_name_img";
    Attributes_Structure_Kinetic_Img.src = "StyleSheets/ship_info_icons/Kinetic.png";
    
    Attributes_Structure_Explosive.className = "attribute_resistance";
    Attributes_Structure_Explosive.id = "structure_explosive_resistance";
    Attributes_Structure_Explosive_Bar.className = "resistance_bar";
    Attributes_Structure_Explosive_Bar.id = "structure_explosive_resistance_bar";
    Attributes_Structure_Explosive_Value.className = "resistance_value";
    Attributes_Structure_Explosive_Value.id = "structure_explosive_resistance_value";
    Attributes_Structure_Explosive_Value.textContent = "";
    Attributes_Structure_Explosive_Img.className = "attribute_name_img";
    Attributes_Structure_Explosive_Img.src = "StyleSheets/ship_info_icons/Explosive.png";
    // AT where Structure resistances is placed.
    var Attributes_Str_Resistances = document.querySelector("#AT25");

    Attributes_Str_Resistances.appendChild(Attributes_Structure_EM_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_EM);
    Attributes_Structure_EM.appendChild(Attributes_Structure_EM_Bar);
    Attributes_Structure_EM.appendChild(Attributes_Structure_EM_Value);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Thermal_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Thermal);
    Attributes_Structure_Thermal.appendChild(Attributes_Structure_Thermal_Bar);
    Attributes_Structure_Thermal.appendChild(Attributes_Structure_Thermal_Value)
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Kinetic_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Kinetic);
    Attributes_Structure_Kinetic.appendChild(Attributes_Structure_Kinetic_Bar);
    Attributes_Structure_Kinetic.appendChild(Attributes_Structure_Kinetic_Value);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Explosive_Img);
    Attributes_Str_Resistances.appendChild(Attributes_Structure_Explosive);
    Attributes_Structure_Explosive.appendChild(Attributes_Structure_Explosive_Bar);
    Attributes_Structure_Explosive.appendChild(Attributes_Structure_Explosive_Value);
    // Armor
    var Attributes_Armor_Hitpoints = document.createElement("p");
    var Attributes_Armor_Hitpoints_Img = document.createElement("img");

    Attributes_Armor_Hitpoints.textContent = "Armor Hitpoints";
    Attributes_Armor_Hitpoints.className = "attribute_name";
    Attributes_Armor_Hitpoints_Img.className = "attribute_name_img";
    Attributes_Armor_Hitpoints_Img.src = "StyleSheets/ship_info_icons/Armor.png";

    var Attributes_Arm_Hitpoints = document.querySelector("#AT27");
    
    Attributes_Arm_Hitpoints.appendChild(Attributes_Armor_Hitpoints_Img);
    Attributes_Arm_Hitpoints.appendChild(Attributes_Armor_Hitpoints);
    // Armor Resistances.
    var Attributes_Armor_EM = document.createElement("div");
    var Attributes_Armor_EM_Bar = document.createElement("div");
    var Attributes_Armor_EM_Value = document.createElement("span");
    var Attributes_Armor_EM_Img = document.createElement("img");
    var Attributes_Armor_Thermal = document.createElement("div");
    var Attributes_Armor_Thermal_Bar = document.createElement("div");
    var Attributes_Armor_Thermal_Value = document.createElement("span");
    var Attributes_Armor_Thermal_Img = document.createElement("img");
    var Attributes_Armor_Kinetic = document.createElement("div");
    var Attributes_Armor_Kinetic_Bar = document.createElement("div");
    var Attributes_Armor_Kinetic_Value = document.createElement("span");
    var Attributes_Armor_Kinetic_Img = document.createElement("img");
    var Attributes_Armor_Explosive = document.createElement("div");
    var Attributes_Armor_Explosive_Bar = document.createElement("div");
    var Attributes_Armor_Explosive_Value = document.createElement("span");
    var Attributes_Armor_Explosive_Img = document.createElement("img");
    
    Attributes_Armor_EM.className = "attribute_resistance";
    Attributes_Armor_EM.id = "armor_resistance";
    Attributes_Armor_EM_Bar.className = "resistance_bar";
    Attributes_Armor_EM_Bar.id = "armor_em_resistance_bar";
    Attributes_Armor_EM_Value.className = "resistance_value";
    Attributes_Armor_EM_Value.id = "armor_em_resistance_value";
    Attributes_Armor_EM_Value.textContent = "";
    Attributes_Armor_EM_Img.className = "attribute_name_img";
    Attributes_Armor_EM_Img.src = "StyleSheets/ship_info_icons/EM.png";

    Attributes_Armor_Thermal.className = "attribute_resistance";
    Attributes_Armor_Thermal.id = "armor_resistance";
    Attributes_Armor_Thermal_Bar.className = "resistance_bar";
    Attributes_Armor_Thermal_Bar.id = "armor_thermal_resistance_bar";
    Attributes_Armor_Thermal_Value.className = "resistance_value";
    Attributes_Armor_Thermal_Value.id = "armor_thermal_resistance_value";
    Attributes_Armor_Thermal_Value.textContent = "";
    Attributes_Armor_Thermal_Img.className = "attribute_name_img";
    Attributes_Armor_Thermal_Img.src = "StyleSheets/ship_info_icons/Thermal.png";

    Attributes_Armor_Kinetic.className = "attribute_resistance";
    Attributes_Armor_Kinetic.id = "armor_kinetic_resistance";
    Attributes_Armor_Kinetic_Bar.className = "resistance_bar";
    Attributes_Armor_Kinetic_Bar.id = "armor_kinetic_resistance_bar";
    Attributes_Armor_Kinetic_Value.className = "resistance_value";
    Attributes_Armor_Kinetic_Value.id = "armor_kinetic_resistance_value";
    Attributes_Armor_Kinetic_Value.textContent = "";
    Attributes_Armor_Kinetic_Img.className = "attribute_name_img";
    Attributes_Armor_Kinetic_Img.src = "StyleSheets/ship_info_icons/Kinetic.png";

    Attributes_Armor_Explosive.className = "attribute_resistance";
    Attributes_Armor_Explosive.id = "armor_explosive_resistance";
    Attributes_Armor_Explosive_Bar.className = "resistance_bar";
    Attributes_Armor_Explosive_Bar.id = "armor_explosive_resistance_bar";
    Attributes_Armor_Explosive_Value.className = "resistance_value";
    Attributes_Armor_Explosive_Value.id = "armor_explosive_resistance_value";
    Attributes_Armor_Explosive_Value.textContent = "";
    Attributes_Armor_Explosive_Img.className = "attribute_name_img";
    Attributes_Armor_Explosive_Img.src = "StyleSheets/ship_info_icons/Explosive.png";
    // AT where Armor resistances is placed.
    var Attributes_Arm_Resistances = document.querySelector("#AT29");
    
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_EM_Img);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_EM);
    Attributes_Armor_EM.appendChild(Attributes_Armor_EM_Bar);
    Attributes_Armor_EM.appendChild(Attributes_Armor_EM_Value);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Thermal_Img);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Thermal);
    Attributes_Armor_Thermal.appendChild(Attributes_Armor_Thermal_Bar);
    Attributes_Armor_Thermal.appendChild(Attributes_Armor_Thermal_Value)
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Kinetic_Img);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Kinetic);
    Attributes_Armor_Kinetic.appendChild(Attributes_Armor_Kinetic_Bar);
    Attributes_Armor_Kinetic.appendChild(Attributes_Armor_Kinetic_Value);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Explosive_Img);
    Attributes_Arm_Resistances.appendChild(Attributes_Armor_Explosive);
    Attributes_Armor_Explosive.appendChild(Attributes_Armor_Explosive_Bar);
    Attributes_Armor_Explosive.appendChild(Attributes_Armor_Explosive_Value);
    // Shield
    var Attributes_Shield_Hitpoints = document.createElement("p");
    var Attributes_Shield_Hitpoints_Img = document.createElement("img");
    var Attributes_Shield_Recharge = document.createElement("p");
    var Attributes_Shield_Recharge_Img = document.createElement("img");

    Attributes_Shield_Hitpoints.textContent = "Shield Capacity";
    Attributes_Shield_Hitpoints.className = "attribute_name";
    Attributes_Shield_Hitpoints_Img.className = "attribute_name_img";
    Attributes_Shield_Hitpoints_Img.src = "StyleSheets/ship_info_icons/Shield.png";

    Attributes_Shield_Recharge.textContent = "Shield recharge time";
    Attributes_Shield_Recharge.className = "attribute_name";
    Attributes_Shield_Recharge_Img.className = "attribute_name_img";
    Attributes_Shield_Recharge_Img.src = "StyleSheets/ship_info_icons/Shield_Recharge.png";

    var Attributes_Shi_Hitpoints = document.querySelector("#AT31");
    var Attributes_Shi_Recharge = document.querySelector("#AT33");

    Attributes_Shi_Hitpoints.appendChild(Attributes_Shield_Hitpoints_Img);
    Attributes_Shi_Hitpoints.appendChild(Attributes_Shield_Hitpoints);
    Attributes_Shi_Recharge.appendChild(Attributes_Shield_Recharge_Img);
    Attributes_Shi_Recharge.appendChild(Attributes_Shield_Recharge);
    // Shield Resistances.
    var Attributes_Shield_EM = document.createElement("div");
    var Attributes_Shield_EM_Bar = document.createElement("div");
    var Attributes_Shield_EM_Value = document.createElement("span");
    var Attributes_Shield_EM_Img = document.createElement("img");
    var Attributes_Shield_Thermal = document.createElement("div");
    var Attributes_Shield_Thermal_Bar = document.createElement("div");
    var Attributes_Shield_Thermal_Value = document.createElement("span");
    var Attributes_Shield_Thermal_Img = document.createElement("img");
    var Attributes_Shield_Kinetic = document.createElement("div");
    var Attributes_Shield_Kinetic_Bar = document.createElement("div");
    var Attributes_Shield_Kinetic_Value = document.createElement("span");
    var Attributes_Shield_Kinetic_Img = document.createElement("img");
    var Attributes_Shield_Explosive = document.createElement("div");
    var Attributes_Shield_Explosive_Bar = document.createElement("div");
    var Attributes_Shield_Explosive_Value = document.createElement("span");
    var Attributes_Shield_Explosive_Img = document.createElement("img");

    Attributes_Shield_EM.className = "attribute_resistance";
    Attributes_Shield_EM.id = "shield_resistance";
    Attributes_Shield_EM_Bar.className = "resistance_bar";
    Attributes_Shield_EM_Bar.id = "shield_em_resistance_bar";
    Attributes_Shield_EM_Value.className = "resistance_value";
    Attributes_Shield_EM_Value.id = "shield_em_resistance_value";
    Attributes_Shield_EM_Value.textContent = "";
    Attributes_Shield_EM_Img.className = "attribute_name_img";
    Attributes_Shield_EM_Img.src = "StyleSheets/ship_info_icons/EM.png";

    Attributes_Shield_Thermal.className = "attribute_resistance";
    Attributes_Shield_Thermal.id = "shield_resistance";
    Attributes_Shield_Thermal_Bar.className = "resistance_bar";
    Attributes_Shield_Thermal_Bar.id = "shield_thermal_resistance_bar";
    Attributes_Shield_Thermal_Value.className = "resistance_value";
    Attributes_Shield_Thermal_Value.id = "shield_thermal_resistance_value";
    Attributes_Shield_Thermal_Value.textContent = "";
    Attributes_Shield_Thermal_Img.className = "attribute_name_img";
    Attributes_Shield_Thermal_Img.src = "StyleSheets/ship_info_icons/Thermal.png";

    Attributes_Shield_Kinetic.className = "attribute_resistance";
    Attributes_Shield_Kinetic.id = "shield_kinetic_resistance";
    Attributes_Shield_Kinetic_Bar.className = "resistance_bar";
    Attributes_Shield_Kinetic_Bar.id = "shield_kinetic_resistance_bar";
    Attributes_Shield_Kinetic_Value.className = "resistance_value";
    Attributes_Shield_Kinetic_Value.id = "shield_kinetic_resistance_value";
    Attributes_Shield_Kinetic_Value.textContent = "";
    Attributes_Shield_Kinetic_Img.className = "attribute_name_img";
    Attributes_Shield_Kinetic_Img.src = "StyleSheets/ship_info_icons/Kinetic.png";

    Attributes_Shield_Explosive.className = "attribute_resistance";
    Attributes_Shield_Explosive.id = "shield_explosive_resistance";
    Attributes_Shield_Explosive_Bar.className = "resistance_bar";
    Attributes_Shield_Explosive_Bar.id = "shield_explosive_resistance_bar";
    Attributes_Shield_Explosive_Value.className = "resistance_value";
    Attributes_Shield_Explosive_Value.id = "shield_explosive_resistance_value";
    Attributes_Shield_Explosive_Value.textContent = "";
    Attributes_Shield_Explosive_Img.className = "attribute_name_img";
    Attributes_Shield_Explosive_Img.src = "StyleSheets/ship_info_icons/Explosive.png";
    // AT where Shield resistances is placed.
    var Attributes_Shi_Resistances = document.querySelector("#AT35");

    Attributes_Shi_Resistances.appendChild(Attributes_Shield_EM_Img);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_EM);
    Attributes_Shield_EM.appendChild(Attributes_Shield_EM_Bar);
    Attributes_Shield_EM.appendChild(Attributes_Shield_EM_Value);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Thermal_Img);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Thermal);
    Attributes_Shield_Thermal.appendChild(Attributes_Shield_Thermal_Bar);
    Attributes_Shield_Thermal.appendChild(Attributes_Shield_Thermal_Value)
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Kinetic_Img);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Kinetic);
    Attributes_Shield_Kinetic.appendChild(Attributes_Shield_Kinetic_Bar);
    Attributes_Shield_Kinetic.appendChild(Attributes_Shield_Kinetic_Value);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Explosive_Img);
    Attributes_Shi_Resistances.appendChild(Attributes_Shield_Explosive);
    Attributes_Shield_Explosive.appendChild(Attributes_Shield_Explosive_Bar);
    Attributes_Shield_Explosive.appendChild(Attributes_Shield_Explosive_Value);

    //Capacitor
    var Attributes_Capacitor_Capacity = document.createElement("p");
    var Attributes_Capacitor_Capacity_Img = document.createElement("img");
    var Attributes_Capacitor_Recharge_Time = document.createElement("p");
    var Attributes_Capacitor_Recharge_Time_Img = document.createElement("img");

    Attributes_Capacitor_Capacity.textContent = "Capacitor Capacity";
    Attributes_Capacitor_Capacity.className = "attribute_name";
    Attributes_Capacitor_Capacity_Img.className = "attribute_name_img";
    Attributes_Capacitor_Capacity_Img.src = "StyleSheets/ship_info_icons/Capacitor.png";

    Attributes_Capacitor_Recharge_Time.textContent = "Capacitor Recharge Time";
    Attributes_Capacitor_Recharge_Time.className = "attribute_name";
    Attributes_Capacitor_Recharge_Time_Img.className = "attribute_name_img";
    Attributes_Capacitor_Recharge_Time_Img.src = "StyleSheets/ship_info_icons/Shield_Recharge.png";

    var Attributes_Cap_Capacity = document.querySelector("#AT52");
    var Attributes_Cap_Recharge_Time = document.querySelector("#AT54");

    Attributes_Cap_Capacity.appendChild(Attributes_Capacitor_Capacity_Img);
    Attributes_Cap_Capacity.appendChild(Attributes_Capacitor_Capacity);
    Attributes_Cap_Recharge_Time.appendChild(Attributes_Capacitor_Recharge_Time_Img);
    Attributes_Cap_Recharge_Time.appendChild(Attributes_Capacitor_Recharge_Time);


    // Targeting


    var Attributes_Maximum_Targeting_Range = document.createElement("p");
    var Attributes_Maximum_Targeting_Range_Img = document.createElement("img");
    var Attributes_Maximum_Locked_Targets = document.createElement("p");
    var Attributes_Maximum_Locked_Targets_Img = document.createElement("img");
    var Attributes_Signature_Radius = document.createElement("p");
    var Attributes_Signature_Radius_Img = document.createElement("img");
    var Attributes_Scan_Resolution = document.createElement("p");
    var Attributes_Scan_Resolution_Img = document.createElement("img");

    Attributes_Maximum_Targeting_Range.textContent = "Maximum Targeting Range";
    Attributes_Maximum_Targeting_Range.className = "attribute_name";
    Attributes_Maximum_Targeting_Range_Img.className = "attribute_name_img";
    Attributes_Maximum_Targeting_Range_Img.src = "StyleSheets/ship_info_icons/Targeting_Range.png";

    Attributes_Maximum_Locked_Targets.textContent = "Maximum Locked Targets";
    Attributes_Maximum_Locked_Targets.className = "attribute_name";
    Attributes_Maximum_Locked_Targets_Img.className = "attribute_name_img";
    Attributes_Maximum_Locked_Targets_Img.src = "StyleSheets/ship_info_icons/Locked_Targets.png";

    Attributes_Signature_Radius.textContent = "Signature Radius";
    Attributes_Signature_Radius.className = "attribute_name";
    Attributes_Signature_Radius_Img.className = "attribute_name_img";
    Attributes_Signature_Radius_Img.src = "StyleSheets/ship_info_icons/Signature_Radius.png";

    Attributes_Scan_Resolution.textContent = "Scan Resolution";
    Attributes_Scan_Resolution.className = "attribute_name";
    Attributes_Scan_Resolution_Img.className = "attribute_name_img";
    Attributes_Scan_Resolution_Img.src = "StyleSheets/ship_info_icons/Sensor.png";

    var Attributes_Max_Targeting_Range = document.querySelector("#AT57");
    var Attributes_Max_Locked_Targets = document.querySelector("#AT59");
    var Attributes_Sig_Radius = document.querySelector("#AT61");
    var Attributes_Sca_Resolution = document.querySelector("#AT63");


    Attributes_Max_Targeting_Range.appendChild(Attributes_Maximum_Targeting_Range_Img);
    Attributes_Max_Targeting_Range.appendChild(Attributes_Maximum_Targeting_Range);
    Attributes_Max_Locked_Targets.appendChild(Attributes_Maximum_Locked_Targets_Img);
    Attributes_Max_Locked_Targets.appendChild(Attributes_Maximum_Locked_Targets);
    Attributes_Sig_Radius.appendChild(Attributes_Signature_Radius_Img);
    Attributes_Sig_Radius.appendChild(Attributes_Signature_Radius);
    Attributes_Sca_Resolution.appendChild(Attributes_Scan_Resolution_Img);
    Attributes_Sca_Resolution.appendChild(Attributes_Scan_Resolution);


    var Attributes_Sensor_Strength = document.createElement("p");

    Attributes_Sensor_Strength.textContent = "Sensor strength";
    Attributes_Sensor_Strength.className = "attribute_name";
    
    var Attributes_Sen_Strength = document.querySelector("#AT65");
    
    Attributes_Sen_Strength.appendChild(Attributes_Sensor_Strength);

    var Attributes_Sensor_Strength_Radar = document.createElement("div");
    var Attributes_Sensor_Strength_Radar_Value = document.createElement("span");
    var Attributes_Sensor_Strength_Radar_Img = document.createElement("img");
    var Attributes_Sensor_Strength_Magnetometric = document.createElement("div");
    var Attributes_Sensor_Strength_Magnetometric_Value = document.createElement("span");
    var Attributes_Sensor_Strength_Magnetometric_Img = document.createElement("img");
    var Attributes_Sensor_Strength_Gravimetric = document.createElement("div");
    var Attributes_Sensor_Strength_Gravimetric_Value = document.createElement("span");
    var Attributes_Sensor_Strength_Gravimetric_Img = document.createElement("img");
    var Attributes_Sensor_Strength_Ladar = document.createElement("div");
    var Attributes_Sensor_Strength_Ladar_Value = document.createElement("span");
    var Attributes_Sensor_Strength_Ladar_Img = document.createElement("img");

    Attributes_Sensor_Strength_Radar.className = "attribute_sensor_strength";
    Attributes_Sensor_Strength_Radar.id = "shield_resistance";
    Attributes_Sensor_Strength_Radar_Value.className = "sensor_value";
    Attributes_Sensor_Strength_Radar_Value.id = "radar_sensor_value";
    Attributes_Sensor_Strength_Radar_Value.textContent = " ";
    Attributes_Sensor_Strength_Radar_Img.className = "attribute_name_img";
    Attributes_Sensor_Strength_Radar_Img.src = "StyleSheets/ship_info_icons/Radar_Sensor.png";

    Attributes_Sensor_Strength_Magnetometric.className = "attribute_sensor_strength";
    Attributes_Sensor_Strength_Magnetometric.id = "shield_resistance";
    Attributes_Sensor_Strength_Magnetometric_Value.className = "sensor_value";
    Attributes_Sensor_Strength_Magnetometric_Value.id = "magnetometric_sensor_value";
    Attributes_Sensor_Strength_Magnetometric_Value.textContent = " ";
    Attributes_Sensor_Strength_Magnetometric_Img.className = "attribute_name_img";
    Attributes_Sensor_Strength_Magnetometric_Img.src = "StyleSheets/ship_info_icons/Magnetometric_Sensor.png";

    Attributes_Sensor_Strength_Gravimetric.className = "attribute_sensor_strength";
    Attributes_Sensor_Strength_Gravimetric.id = "shield_resistance";
    Attributes_Sensor_Strength_Gravimetric_Value.className = "sensor_value";
    Attributes_Sensor_Strength_Gravimetric_Value.id = "gravimetric_sensor_value";
    Attributes_Sensor_Strength_Gravimetric_Value.textContent = " ";
    Attributes_Sensor_Strength_Gravimetric_Img.className = "attribute_name_img";
    Attributes_Sensor_Strength_Gravimetric_Img.src = "StyleSheets/ship_info_icons/Gravimetric_Sensor.png";

    Attributes_Sensor_Strength_Ladar.className = "attribute_sensor_strength";
    Attributes_Sensor_Strength_Ladar.id = "shield_resistance";
    Attributes_Sensor_Strength_Ladar_Value.className = "sensor_value";
    Attributes_Sensor_Strength_Ladar_Value.id = "ladar_sensor_value";
    Attributes_Sensor_Strength_Ladar_Value.textContent = " ";
    Attributes_Sensor_Strength_Ladar_Img.className = "attribute_name_img";
    Attributes_Sensor_Strength_Ladar_Img.src = "StyleSheets/ship_info_icons/Ladar_Sensor.png";
    // AT where Sensor Strength bar is placed
    var Attributes_Sen_Strength_Bar = document.querySelector("#AT66");

    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Radar_Img);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Radar);
    Attributes_Sensor_Strength_Radar.appendChild(Attributes_Sensor_Strength_Radar_Value);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Magnetometric_Img);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Magnetometric);
    Attributes_Sensor_Strength_Magnetometric.appendChild(Attributes_Sensor_Strength_Magnetometric_Value);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Gravimetric_Img);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Gravimetric);
    Attributes_Sensor_Strength_Gravimetric.appendChild(Attributes_Sensor_Strength_Gravimetric_Value);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Ladar_Img);
    Attributes_Sen_Strength_Bar.appendChild(Attributes_Sensor_Strength_Ladar);
    Attributes_Sensor_Strength_Ladar.appendChild(Attributes_Sensor_Strength_Ladar_Value);


function Close() {
    var Ship_Div = document.querySelector("#ship_div");
    const CloseButton = document.querySelector("#close");
    CloseButton.addEventListener("click", function(){

    Ship_Div.remove();
    //From Caldari_EventListener.js - ensures only 1 Ship_Div can be created
    pagecount = false;
    });
}

// Navigation menu inside the Information panel
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
    
    Traits.style.display = "block";
    Description.style.display = "none";
    Attributes.style.display = "none";
    Fitting.style.display = "none";
    Requirements.style.display = "none";
    Mastery.style.display = "none";
    Variations.style.display = "none";
    Industry.style.display = "none";
    Skins.style.display = "none";
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
Ship_nav();
// From DraggableDiv.js
dragElement(document.getElementById("ship_div"));
// insures only 1 window can be open at a time, if more than 1 window is open the close button breaks.
Close();
}

function InsertData(data){
    // this is stupid but hey it works.
    Attribute_Drone(false);
    Subsystem_Hold_Capacity(false);
    Ore_Hold_Capacity(false);
    Planetary_Commodities_Capacity(false);
    Mineral_Hold_Capacity(false);
    Ammo_Hold_Capacity(false);
    Electronic_Resistances(false);
    Shared_Facilites(false);
    Ship_Maintenance_Bay(false);
    Jump_Clones(false);
    Jump_Drive_Systems(false);
    Jump_Portal_Activation_Cost(false);
    
    var desc = document.querySelector("#description_text");
    desc.textContent = data["description"];

    var spandata = document.createElement("span");
    spandata.className = "spandata";
    spandata.textContent = data["capacity"].toLocaleString() + " m3";
    var Capacity = document.querySelector("#AT4");
    Capacity.appendChild(spandata);

    for(x in data["dogma_attributes"]){
        switch(data["dogma_attributes"][x]["attribute_id"]){
            case 4:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT10");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " kg";
                    testdata.appendChild(spandata);
                break;
            case 9:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT2");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " HP";
                    testdata.appendChild(spandata);
                break;
            case 70:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT14");
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " x";
                    testdata.appendChild(spandata);
                break;
            case 109:
                    var resistance = document.querySelector("#structure_kinetic_resistance_bar");
                    var value = document.querySelector("#structure_kinetic_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 110:
                    var resistance = document.querySelector("#structure_thermal_resistance_bar");
                    var value = document.querySelector("#structure_thermal_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 111:
                    var resistance = document.querySelector("#structure_explosive_resistance_bar");
                    var value = document.querySelector("#structure_explosive_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 113:
                    var resistance = document.querySelector("#structure_em_resistance_bar");
                    var value = document.querySelector("#structure_em_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 161:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT12");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    var pack = data["packaged_volume"];
                    spandata.textContent += " (" + pack.toLocaleString() + " m3 Packaged)";
                    testdata.appendChild(spandata);
                break;
            case 263:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT32");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " HP";
                    testdata.appendChild(spandata);
                break;
            case 265:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT28");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " HP";
                    testdata.appendChild(spandata);
                break;
            case 267:
                    var resistance = document.querySelector("#armor_em_resistance_bar");
                    var value = document.querySelector("#armor_em_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 268:
                    var resistance = document.querySelector("#armor_explosive_resistance_bar");
                    var value = document.querySelector("#armor_explosive_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 269:
                    var resistance = document.querySelector("#armor_kinetic_resistance_bar");
                    var value = document.querySelector("#armor_kinetic_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 270:
                    var resistance = document.querySelector("#armor_thermal_resistance_bar");
                    var value = document.querySelector("#armor_thermal_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 271:
                    var resistance = document.querySelector("#shield_em_resistance_bar");
                    var value = document.querySelector("#shield_em_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 272:
                    var resistance = document.querySelector("#shield_explosive_resistance_bar");
                    var value = document.querySelector("#shield_explosive_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 273:
                    var resistance = document.querySelector("#shield_kinetic_resistance_bar");
                    var value = document.querySelector("#shield_kinetic_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 274:
                    var resistance = document.querySelector("#shield_thermal_resistance_bar");
                    var value = document.querySelector("#shield_thermal_resistance_value");
                    resistance.style.width = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    value.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + "%";
                    if(parseFloat(value.textContent) % 1 === 0){
                        resistance.style.width = parseFloat(resistance.textContent).toFixed(0) + "%";
                        value.textContent = parseFloat(value.textContent).toFixed(0) + "%";
                    }
                break;
            case 283:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Attribute_Drone(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT6");
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " m3";
                    testdata.appendChild(spandata);
                break;
            case 479:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT34");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = (DATA / 1000).toFixed(2) + " s";
                    testdata.appendChild(spandata);
                break;
            case 482:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT53");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toFixed(1) + " GJ";
                    testdata.appendChild(spandata);
                    break;
            case 55:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT55");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = (DATA / 1000).toFixed(2) + " s";
                    testdata.appendChild(spandata);
                    break;
            case 1271:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT8");
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " Mbit/sec";
                    testdata.appendChild(spandata);
                break;
            case 2675:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Subsystem_Hold_Capacity(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT16");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 1556:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Ore_Hold_Capacity(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT18");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 1653:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Planetary_Commodities_Capacity(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT20");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 1558:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Mineral_Hold_Capacity(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT22");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 1573:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Ammo_Hold_Capacity(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT24");
                    var DATA = data["dogma_attributes"][x]["value"];
                    spandata.textContent = DATA.toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 2135:
                    if(data["dogma_attributes"][x]["value"] != 0){
                        Electronic_Resistances(true);
                    }
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT38");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2116:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT40");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2045:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT42");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2112:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT44");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2115:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT46");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2114:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT48");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 2113:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT50");
                    spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                    if(parseFloat(spandata.textContent) % 1 === 0){
                        spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                    }
                    testdata.appendChild(spandata);
                break;
            case 76:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT58");
                    spandata.textContent = ( data["dogma_attributes"][x]["value"] / 1000).toFixed(2) + " km";
                    testdata.appendChild(spandata);
                break;
            case 192:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT60");
                    spandata.textContent = data["dogma_attributes"][x]["value"];
                    testdata.appendChild(spandata);
                break;
            case 552:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT62");
                    spandata.textContent = ( data["dogma_attributes"][x]["value"] / 1000).toFixed(2) + " km";
                    if(data["dogma_attributes"][x]["value"] < 1000){
                        spandata.textContent = data["dogma_attributes"][x]["value"] + " m";
                    }
                    testdata.appendChild(spandata);
                break;
            case 564:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT64");
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " mm";
                    testdata.appendChild(spandata);
                break;
            case 208:
                    var value = document.querySelector("#radar_sensor_value");
                    value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                    if(parseFloat(value.textContent) === 0){
                        value.textContent = " -";
                    }
                break;
            case 210:
                    var value = document.querySelector("#magnetometric_sensor_value");
                    value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                    if(parseFloat(value.textContent) === 0){
                        value.textContent = " -";
                    }
                break;
            case 211:
                    var value = document.querySelector("#gravimetric_sensor_value");
                    value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                    if(parseFloat(value.textContent) === 0){
                        value.textContent = " -";
                    }
                break;
            case 209:
                    var value = document.querySelector("#ladar_sensor_value");
                    value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                    if(parseFloat(value.textContent) === 0){
                        value.textContent = " -";
                    }
                break;
            case 912:
                        Shared_Facilites(true);
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT69");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 908:
                        Ship_Maintenance_Bay(true);
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT71");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            case 979:
                        Jump_Clones(true);
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT73");
                    spandata.textContent = data["dogma_attributes"][x]["value"];
                    testdata.appendChild(spandata);
                break;
            case 898:
                        Jump_Drive_Systems(true);
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT76");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() * 100 + " %";
                    testdata.appendChild(spandata);
                break;
            case 867:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT78");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " ly";
                    testdata.appendChild(spandata);
                break;
            case 866:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT80");
                    spandata.textContent = data["dogma_attributes"][x]["value"];
                    testdata.appendChild(spandata);
                break;
            case 868:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT82");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " units";
                    testdata.appendChild(spandata);
                break;
            case 1005:
                        Jump_Portal_Activation_Cost(true);
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT84");
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " GJ";
                    testdata.appendChild(spandata);
                break;
            case 1549:
                    var spandata = document.createElement("span");
                    spandata.className = "spandata";
                    var testdata = document.querySelector("#AT86");
                    spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                    testdata.appendChild(spandata);
                break;
            default:

        }
    }

}
// used in the same place as the json is fetched to display an error if a stat is missing (though it just overrides everything to "error")
function DisplayError(){
    for(var x = 0; x < 100; x++){
        var Testdata = document.querySelector("#AT"+x);
        if (Testdata.innerHTML === ""){
            var Testdata = document.querySelector("#AT"+x);
            Testdata.textContent = "Error";
        }
    }
}

function Attribute_Drone(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Drone_Capacity = document.createElement("p");
        var Attributes_Structure_Drone_Capacity_Img = document.createElement("img");
        var Attributes_Structure_Drone_Bandwidth = document.createElement("p");
        var Attributes_Structure_Drone_Bandwidth_Img = document.createElement("img");

        Attributes_Structure_Drone_Capacity.textContent = "Drone Capacity";
        Attributes_Structure_Drone_Capacity.className = "attribute_name";
        Attributes_Structure_Drone_Capacity_Img.className = "attribute_name_img";
        Attributes_Structure_Drone_Capacity_Img.src = "StyleSheets/ship_info_icons/Drone_Capacity.png";

        Attributes_Structure_Drone_Bandwidth.textContent = "Drone Bandwidth";
        Attributes_Structure_Drone_Bandwidth.className = "attribute_name";
        Attributes_Structure_Drone_Bandwidth_Img.className = "attribute_name_img";
        Attributes_Structure_Drone_Bandwidth_Img.src = "StyleSheets/ship_info_icons/Drone_Bandwidth.png";
        
        var Attributes_Str_Drone_Capacity = document.querySelector("#AT5");
        var Attributes_Str_Drone_Bandwidth = document.querySelector("#AT7");
        
        Attributes_Str_Drone_Capacity.appendChild(Attributes_Structure_Drone_Capacity_Img);
        Attributes_Str_Drone_Capacity.appendChild(Attributes_Structure_Drone_Capacity);
        Attributes_Str_Drone_Bandwidth.appendChild(Attributes_Structure_Drone_Bandwidth_Img);
        Attributes_Str_Drone_Bandwidth.appendChild(Attributes_Structure_Drone_Bandwidth);
        
        Attributes_Str_Drone_Capacity.style.display = "grid";
        Attributes_Str_Drone_Bandwidth.style.display = "grid";
        var Attributes_Str_Drone_Capacity_AT = document.querySelector("#AT6");
        var Attributes_Str_Drone_Bandwidth_AT = document.querySelector("#AT8");
        Attributes_Str_Drone_Capacity_AT.style.display = "grid";
        Attributes_Str_Drone_Bandwidth_AT.style.display = "grid";

    } else if (Toggle === false) {

        var Attributes_Str_Drone_Capacity = document.querySelector("#AT5");
        var Attributes_Str_Drone_Bandwidth = document.querySelector("#AT7");
        Attributes_Str_Drone_Capacity.style.display = "none";
        Attributes_Str_Drone_Bandwidth.style.display = "none";
        var Attributes_Str_Drone_Capacity_AT = document.querySelector("#AT6");
        var Attributes_Str_Drone_Bandwidth_AT = document.querySelector("#AT8");
        Attributes_Str_Drone_Capacity_AT.style.display = "none";
        Attributes_Str_Drone_Bandwidth_AT.style.display = "none";
    }
} 

function Subsystem_Hold_Capacity(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Subsystem_Hold = document.createElement("p");
        var Attributes_Structure_Subsystem_Hold_Img = document.createElement("img");

        Attributes_Structure_Subsystem_Hold.textContent = "Subsystem Hold Capacity";
        Attributes_Structure_Subsystem_Hold.className = "attribute_name";
        Attributes_Structure_Subsystem_Hold_Img.className = "attribute_name_img";
        Attributes_Structure_Subsystem_Hold_Img.src = "StyleSheets/ship_info_icons/Capacity.png";
        
        var Attributes_Str_Subsystem_Hold_Capacity = document.querySelector("#AT15");
        Attributes_Str_Subsystem_Hold_Capacity.style.display = "grid";
        
        Attributes_Str_Subsystem_Hold_Capacity.appendChild(Attributes_Structure_Subsystem_Hold_Img);
        Attributes_Str_Subsystem_Hold_Capacity.appendChild(Attributes_Structure_Subsystem_Hold);
        
        var Attributes_Str_Subsystem_Hold_AT = document.querySelector("#AT16");
        Attributes_Str_Subsystem_Hold_AT.style.display = "grid";

    } else if (Toggle === false) {
        var Attributes_Str_Subsystem_Hold_Capacity = document.querySelector("#AT15");
        Attributes_Str_Subsystem_Hold_Capacity.style.display = "none";
        var Attributes_Str_Subsystem_Hold_AT = document.querySelector("#AT16");
        Attributes_Str_Subsystem_Hold_AT.style.display = "none";
    }
} 

function Ore_Hold_Capacity(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Hold = document.createElement("p");
        var Attributes_Structure_Hold_Img = document.createElement("img");

        Attributes_Structure_Hold.textContent = "Ore Hold Capacity";
        Attributes_Structure_Hold.className = "attribute_name";
        Attributes_Structure_Hold_Img.className = "attribute_name_img";
        Attributes_Structure_Hold_Img.src = "StyleSheets/ship_info_icons/Capacity.png";
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT17");
        Attributes_Str_Hold_Capacity.style.display = "grid";
        
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold_Img);
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold);
        
        var Attributes_Str__Hold_AT = document.querySelector("#AT18");
        Attributes_Str__Hold_AT.style.display = "grid";

    } else if (Toggle === false) {
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT17");
        Attributes_Str_Hold_Capacity.style.display = "none";
        var Attributes_Str_Hold_AT = document.querySelector("#AT18");
        Attributes_Str_Hold_AT.style.display = "none";
    }
} 
function Planetary_Commodities_Capacity(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Hold = document.createElement("p");
        var Attributes_Structure_Hold_Img = document.createElement("img");

        Attributes_Structure_Hold.textContent = "Planetary Commodities Capacity";
        Attributes_Structure_Hold.className = "attribute_name";
        Attributes_Structure_Hold_Img.className = "attribute_name_img";
        Attributes_Structure_Hold_Img.src = "StyleSheets/ship_info_icons/Capacity.png";
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT19");
        Attributes_Str_Hold_Capacity.style.display = "grid";
        
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold_Img);
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold);
        
        var Attributes_Str__Hold_AT = document.querySelector("#AT20");
        Attributes_Str__Hold_AT.style.display = "grid";

    } else if (Toggle === false) {
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT19");
        Attributes_Str_Hold_Capacity.style.display = "none";
        var Attributes_Str_Hold_AT = document.querySelector("#AT20");
        Attributes_Str_Hold_AT.style.display = "none";
    }
} 
function Mineral_Hold_Capacity(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Hold = document.createElement("p");
        var Attributes_Structure_Hold_Img = document.createElement("img");

        Attributes_Structure_Hold.textContent = "Mineral Hold Capacity";
        Attributes_Structure_Hold.className = "attribute_name";
        Attributes_Structure_Hold_Img.className = "attribute_name_img";
        Attributes_Structure_Hold_Img.src = "StyleSheets/ship_info_icons/Capacity.png";
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT21");
        Attributes_Str_Hold_Capacity.style.display = "grid";
        
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold_Img);
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold);
        
        var Attributes_Str__Hold_AT = document.querySelector("#AT22");
        Attributes_Str__Hold_AT.style.display = "grid";

    } else if (Toggle === false) {
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT21");
        Attributes_Str_Hold_Capacity.style.display = "none";
        var Attributes_Str_Hold_AT = document.querySelector("#AT22");
        Attributes_Str_Hold_AT.style.display = "none";
    }
} 
function Ammo_Hold_Capacity(Toggle){

    if (Toggle === true) {
        var Attributes_Structure_Hold = document.createElement("p");
        var Attributes_Structure_Hold_Img = document.createElement("img");

        Attributes_Structure_Hold.textContent = "Ammo Hold Capacity";
        Attributes_Structure_Hold.className = "attribute_name";
        Attributes_Structure_Hold_Img.className = "attribute_name_img";
        Attributes_Structure_Hold_Img.src = "StyleSheets/ship_info_icons/Capacity.png";
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT23");
        Attributes_Str_Hold_Capacity.style.display = "grid";
        
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold_Img);
        Attributes_Str_Hold_Capacity.appendChild(Attributes_Structure_Hold);
        
        var Attributes_Str__Hold_AT = document.querySelector("#AT24");
        Attributes_Str__Hold_AT.style.display = "grid";

    } else if (Toggle === false) {
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT23");
        Attributes_Str_Hold_Capacity.style.display = "none";
        var Attributes_Str_Hold_AT = document.querySelector("#AT24");
        Attributes_Str_Hold_AT.style.display = "none";
    }
} 


function Electronic_Resistances(Toggle){

    if (Toggle === true) {
        // Title
        var Attributes_Electronic_Resistances_Title = document.createElement("p");
        Attributes_Electronic_Resistances_Title.textContent = "Electronic Resistances";
        Attributes_Electronic_Resistances_Title.className = "attributes_titles";
        var Attributes_Elect = document.querySelector("#AT36");
        Attributes_Elect.appendChild(Attributes_Electronic_Resistances_Title);
        
        // Stats
        var Attributes_Remote_Electronic_Assistance_Impedance = document.createElement("p");
        var Attributes_Remote_Electronic_Assistance_Impedance_Img = document.createElement("img");
        var Attributes_Remote_Logistics_Impedance = document.createElement("p");
        var Attributes_Remote_Logistics_Impedance_Img = document.createElement("img");
        var Attributes_Capacitor_Warfare_Resistance = document.createElement("p");
        var Attributes_Capacitor_Warfare_Resistance_Img = document.createElement("img");
        var Attributes_Sensor_Warfare_Resistance = document.createElement("p");
        var Attributes_Sensor_Warfare_Resistance_Img = document.createElement("img");
        var Attributes_Stasis_Webifier_Resistance = document.createElement("p");
        var Attributes_Stasis_Webifier_Resistance_Img = document.createElement("img");
        var Attributes_Target_Painter_Resistance = document.createElement("p");
        var Attributes_Target_Painter_Resistance_Img = document.createElement("img");
        var Attributes_Weapon_Disruption_Resistance = document.createElement("p");
        var Attributes_Weapon_Disruption_Resistance_Img = document.createElement("img");

        Attributes_Remote_Electronic_Assistance_Impedance.textContent = "Remote Electronic Assistance Impedance";
        Attributes_Remote_Electronic_Assistance_Impedance.className = "attribute_name";
        Attributes_Remote_Electronic_Assistance_Impedance_Img.className = "attribute_name_img";
        Attributes_Remote_Electronic_Assistance_Impedance_Img.src = "StyleSheets/ship_info_icons/Sensor.png";

        Attributes_Remote_Logistics_Impedance.textContent = "Remote Logistics Impedance";
        Attributes_Remote_Logistics_Impedance.className = "attribute_name";
        Attributes_Remote_Logistics_Impedance_Img.className = "attribute_name_img";
        Attributes_Remote_Logistics_Impedance_Img.src = "StyleSheets/ship_info_icons/Armour_Repairer.png";

        Attributes_Capacitor_Warfare_Resistance.textContent = "Capacitor Warfare Resistance";
        Attributes_Capacitor_Warfare_Resistance.className = "attribute_name";
        Attributes_Capacitor_Warfare_Resistance_Img.className = "attribute_name_img";
        Attributes_Capacitor_Warfare_Resistance_Img.src = "StyleSheets/ship_info_icons/Powergrid.png";

        Attributes_Sensor_Warfare_Resistance.textContent = "Sensor Warfare Resistance";
        Attributes_Sensor_Warfare_Resistance.className = "attribute_name";
        Attributes_Sensor_Warfare_Resistance_Img.className = "attribute_name_img";
        Attributes_Sensor_Warfare_Resistance_Img.src = "StyleSheets/ship_info_icons/Sensor.png";

        Attributes_Stasis_Webifier_Resistance.textContent = "Stasis Webifier Resistance";
        Attributes_Stasis_Webifier_Resistance.className = "attribute_name";
        Attributes_Stasis_Webifier_Resistance_Img.className = "attribute_name_img";
        Attributes_Stasis_Webifier_Resistance_Img.src = "StyleSheets/ship_info_icons/Speed.png";

        Attributes_Target_Painter_Resistance.textContent = "Target Painter Resistance";
        Attributes_Target_Painter_Resistance.className = "attribute_name";
        Attributes_Target_Painter_Resistance_Img.className = "attribute_name_img";
        Attributes_Target_Painter_Resistance_Img.src = "StyleSheets/ship_info_icons/Signature_Radius.png";

        Attributes_Weapon_Disruption_Resistance.textContent = "Weapon Disruption Resistance";
        Attributes_Weapon_Disruption_Resistance.className = "attribute_name";
        Attributes_Weapon_Disruption_Resistance_Img.className = "attribute_name_img";
        Attributes_Weapon_Disruption_Resistance_Img.src = "StyleSheets/ship_info_icons/Tracking.png";
        
        var Attributes_Remote_Electronic = document.querySelector("#AT37");
        var Attributes_Remote_Logistics = document.querySelector("#AT39");
        var Attributes_Capacitor_Warfare = document.querySelector("#AT41");
        var Attributes_Sensor_Warfare = document.querySelector("#AT43");
        var Attributes_Stasis_Webifier = document.querySelector("#AT45");
        var Attributes_Target_Painter = document.querySelector("#AT47");
        var Attributes_Weapon_Disruption = document.querySelector("#AT49");
        
        Attributes_Remote_Electronic.style.display = "grid";
        Attributes_Remote_Logistics.style.display = "grid";
        Attributes_Capacitor_Warfare.style.display = "grid";
        Attributes_Sensor_Warfare.style.display = "grid";
        Attributes_Stasis_Webifier.style.display = "grid";
        Attributes_Target_Painter.style.display = "grid";
        Attributes_Weapon_Disruption.style.display = "grid";

        Attributes_Remote_Electronic.appendChild(Attributes_Remote_Electronic_Assistance_Impedance_Img);
        Attributes_Remote_Electronic.appendChild(Attributes_Remote_Electronic_Assistance_Impedance);
        Attributes_Remote_Logistics.appendChild(Attributes_Remote_Logistics_Impedance_Img);
        Attributes_Remote_Logistics.appendChild(Attributes_Remote_Logistics_Impedance);
        Attributes_Capacitor_Warfare.appendChild(Attributes_Capacitor_Warfare_Resistance_Img);
        Attributes_Capacitor_Warfare.appendChild(Attributes_Capacitor_Warfare_Resistance);
        Attributes_Sensor_Warfare.appendChild(Attributes_Sensor_Warfare_Resistance_Img);
        Attributes_Sensor_Warfare.appendChild(Attributes_Sensor_Warfare_Resistance);
        Attributes_Stasis_Webifier.appendChild(Attributes_Stasis_Webifier_Resistance_Img);
        Attributes_Stasis_Webifier.appendChild(Attributes_Stasis_Webifier_Resistance);
        Attributes_Target_Painter.appendChild(Attributes_Target_Painter_Resistance_Img);
        Attributes_Target_Painter.appendChild(Attributes_Target_Painter_Resistance);
        Attributes_Weapon_Disruption.appendChild(Attributes_Weapon_Disruption_Resistance_Img);
        Attributes_Weapon_Disruption.appendChild(Attributes_Weapon_Disruption_Resistance);
        
        var Attributes_Remote_Electronic_AT = document.querySelector("#AT38");
        var Attributes_Remote_Logistics_AT = document.querySelector("#AT40");
        var Attributes_Capacitor_Warfare_AT = document.querySelector("#AT42");
        var Attributes_Sensor_Warfare_AT = document.querySelector("#AT44");
        var Attributes_Stasis_Webifier_AT = document.querySelector("#AT46");
        var Attributes_Target_Painter_AT = document.querySelector("#AT48");
        var Attributes_Weapon_Disruption_AT = document.querySelector("#AT50");
        Attributes_Remote_Electronic_AT.style.display = "grid";
        Attributes_Remote_Logistics_AT.style.display = "grid";
        Attributes_Capacitor_Warfare_AT.style.display = "grid";
        Attributes_Sensor_Warfare_AT.style.display = "grid";
        Attributes_Stasis_Webifier_AT.style.display = "grid";
        Attributes_Target_Painter_AT.style.display = "grid";
        Attributes_Weapon_Disruption_AT.style.display = "grid";

    } else if (Toggle === false) {

        var Attributes_Remote_Electronic = document.querySelector("#AT37");
        var Attributes_Remote_Logistics = document.querySelector("#AT39");
        var Attributes_Capacitor_Warfare = document.querySelector("#AT41");
        var Attributes_Sensor_Warfare = document.querySelector("#AT43");
        var Attributes_Stasis_Webifier = document.querySelector("#AT45");
        var Attributes_Target_Painter = document.querySelector("#AT47");
        var Attributes_Weapon_Disruption = document.querySelector("#AT49");
        Attributes_Remote_Electronic.style.display = "none";
        Attributes_Remote_Logistics.style.display = "none";
        Attributes_Capacitor_Warfare.style.display = "none";
        Attributes_Sensor_Warfare.style.display = "none";
        Attributes_Stasis_Webifier.style.display = "none";
        Attributes_Target_Painter.style.display = "none";
        Attributes_Weapon_Disruption.style.display = "none";
        var Attributes_Remote_Electronic_AT = document.querySelector("#AT38");
        var Attributes_Remote_Logistics_AT = document.querySelector("#AT40");
        var Attributes_Capacitor_Warfare_AT = document.querySelector("#AT42");
        var Attributes_Sensor_Warfare_AT = document.querySelector("#AT44");
        var Attributes_Stasis_Webifier_AT = document.querySelector("#AT46");
        var Attributes_Target_Painter_AT = document.querySelector("#AT48");
        var Attributes_Weapon_Disruption_AT = document.querySelector("#AT50");
        Attributes_Remote_Electronic_AT.style.display = "none";
        Attributes_Remote_Logistics_AT.style.display = "none";
        Attributes_Capacitor_Warfare_AT.style.display = "none";
        Attributes_Sensor_Warfare_AT.style.display = "none";
        Attributes_Stasis_Webifier_AT.style.display = "none";
        Attributes_Target_Painter_AT.style.display = "none";
        Attributes_Weapon_Disruption_AT.style.display = "none";
    }
} 
// move title to separate function.
// and check if any one attribute from shared facilites category is true, if true, display title
// stupid bowhead >:L
function Shared_Facilites(Toggle){

    if (Toggle === true) {
        // Title
        var Attributes_Shared_Facilites_Title = document.createElement("p");
        Attributes_Shared_Facilites_Title.textContent = "Shared Facilites";
        Attributes_Shared_Facilites_Title.className = "attributes_titles";
        var Attributes_Shared = document.querySelector("#AT67");
        Attributes_Shared.appendChild(Attributes_Shared_Facilites_Title);
        
        // Stats - Only includes Fleet Hangar Capacity, may need to be moved to a separate function in the future
        var Attributes_Fleet_Hangar_Capacity = document.createElement("p");
        var Attributes_Fleet_Hangar_Capacity_Img = document.createElement("img");

        Attributes_Fleet_Hangar_Capacity.textContent = "Fleet Hangar Capacity";
        Attributes_Fleet_Hangar_Capacity.className = "attribute_name";
        Attributes_Fleet_Hangar_Capacity_Img.className = "attribute_name_img";
        Attributes_Fleet_Hangar_Capacity_Img.src = "StyleSheets/ship_info_icons/Capacity.png";

        
        var Attributes_Fleet_Hangar = document.querySelector("#AT68");
        
        Attributes_Fleet_Hangar.style.display = "grid";

        Attributes_Fleet_Hangar.appendChild(Attributes_Fleet_Hangar_Capacity_Img);
        Attributes_Fleet_Hangar.appendChild(Attributes_Fleet_Hangar_Capacity);
        
        var Attributes_Fleet_Hangar_AT = document.querySelector("#AT69");
        Attributes_Fleet_Hangar_AT.style.display = "grid";

    } else if (Toggle === false) {

        var Attributes_Fleet_Hangar = document.querySelector("#AT68");
        Attributes_Fleet_Hangar.style.display = "none";
        var Attributes_Fleet_Hangar_AT = document.querySelector("#AT69");
        Attributes_Fleet_Hangar_AT.style.display = "none";
    }
} 

function Ship_Maintenance_Bay(Toggle){
    
    if (Toggle === true) {

        var Attributes_Ship_Maintenance_Bay_Capacity = document.createElement("p");
        var Attributes_Ship_Maintenance_Bay_Capacity_Img = document.createElement("img");

        Attributes_Ship_Maintenance_Bay_Capacity.textContent = "Ship Maintenance Bay Capacity";
        Attributes_Ship_Maintenance_Bay_Capacity.className = "attribute_name";
        Attributes_Ship_Maintenance_Bay_Capacity_Img.className = "attribute_name_img";
        Attributes_Ship_Maintenance_Bay_Capacity_Img.src = "StyleSheets/ship_info_icons/Capacity.png";

        var Attributes_Ship_Maintenance_Bay = document.querySelector("#AT70");

        Attributes_Ship_Maintenance_Bay.style.display = "grid";

        Attributes_Ship_Maintenance_Bay.appendChild(Attributes_Ship_Maintenance_Bay_Capacity_Img);
        Attributes_Ship_Maintenance_Bay.appendChild(Attributes_Ship_Maintenance_Bay_Capacity);

        var Attributes_Ship_Maintenance_Bay_AT = document.querySelector("#AT71");
        Attributes_Ship_Maintenance_Bay_AT.style.display = "grid";


    } else if (Toggle === false) {
        
        var Attributes_Ship_Maintenance_Bay = document.querySelector("#AT70");
        Attributes_Ship_Maintenance_Bay.style.display = "none";
        var Attributes_Ship_Maintenance_Bay_AT = document.querySelector("#AT71");
        Attributes_Ship_Maintenance_Bay_AT.style.display = "none";
    }
}

function Jump_Clones(Toggle){
    
    if (Toggle === true) {

        var Attributes_Maximum_Jump_Clones = document.createElement("p");
        var Attributes_Maximum_Jump_Clones_Img = document.createElement("img");

        Attributes_Maximum_Jump_Clones.textContent = "Maximum Jump Clones";
        Attributes_Maximum_Jump_Clones.className = "attribute_name";
        Attributes_Maximum_Jump_Clones_Img.className = "attribute_name_img";
        Attributes_Maximum_Jump_Clones_Img.src = "StyleSheets/ship_info_icons/Jump_Clone.png";

        var Attributes_Maximum_Jump = document.querySelector("#AT72");

        Attributes_Maximum_Jump.style.display = "grid";

        Attributes_Maximum_Jump.appendChild(Attributes_Maximum_Jump_Clones_Img);
        Attributes_Maximum_Jump.appendChild(Attributes_Maximum_Jump_Clones);

        var Attributes_Maximum_Jump_AT = document.querySelector("#AT73");

        Attributes_Maximum_Jump_AT.style.display = "grid";

    } else if (Toggle === false) {
        
        var Attributes_Maximum_Jump = document.querySelector("#AT72");
        Attributes_Maximum_Jump.style.display = "none";
        var Attributes_Maximum_Jump_AT = document.querySelector("#AT73");
        Attributes_Maximum_Jump_AT.style.display = "none";
    }
}

function Jump_Drive_Systems(Toggle){

    if (Toggle === true) {
        // Title
        var Attributes_Jump_Drive_Systems_Title = document.createElement("p");
        Attributes_Jump_Drive_Systems_Title.textContent = "Jump Drive Systems";
        Attributes_Jump_Drive_Systems_Title.className = "attributes_titles";
        var Attributes_Jump = document.querySelector("#AT74");
        Attributes_Jump.appendChild(Attributes_Jump_Drive_Systems_Title);
        
        // Stats
        var Attributes_Jump_Drive_Capacitor_Need = document.createElement("p");
        var Attributes_Jump_Drive_Capacitor_Need_Img = document.createElement("img");
        var Attributes_Maximum_Jump_Range = document.createElement("p");
        var Attributes_Maximum_Jump_Range_Img = document.createElement("img");
        var Attributes_Jump_Drive_Fuel_Need = document.createElement("p");
        var Attributes_Jump_Drive_Fuel_Need_Img = document.createElement("img");
        var Attributes_Jump_Drive_Consumption_Amount = document.createElement("p");
        var Attributes_Jump_Drive_Consumption_Amount_Img = document.createElement("img");
        var Attributes_Fuel_Bay_Capacity = document.createElement("p");
        var Attributes_Fuel_Bay_Capacity_Img = document.createElement("img");

        Attributes_Jump_Drive_Capacitor_Need.textContent = "Jump Drive Capacitor Need";
        Attributes_Jump_Drive_Capacitor_Need.className = "attribute_name";
        Attributes_Jump_Drive_Capacitor_Need_Img.className = "attribute_name_img";
        Attributes_Jump_Drive_Capacitor_Need_Img.src = "StyleSheets/ship_info_icons/Capacitor_Cost.png";

        Attributes_Maximum_Jump_Range.textContent = "Maximum Jump Range";
        Attributes_Maximum_Jump_Range.className = "attribute_name";
        Attributes_Maximum_Jump_Range_Img.className = "attribute_name_img";
        Attributes_Maximum_Jump_Range_Img.src = "StyleSheets/ship_info_icons/Targeting_Range.png";

        Attributes_Jump_Drive_Fuel_Need.textContent = "Jump Drive Fuel Need";
        Attributes_Jump_Drive_Fuel_Need.className = "attribute_name";
        Attributes_Jump_Drive_Fuel_Need_Img.className = "attribute_name_img";
        Attributes_Jump_Drive_Fuel_Need_Img.src = "StyleSheets/ship_info_icons/Powergrid.png";

        Attributes_Jump_Drive_Consumption_Amount.textContent = "Jump Drive Consumption Amount";
        Attributes_Jump_Drive_Consumption_Amount.className = "attribute_name";
        Attributes_Jump_Drive_Consumption_Amount_Img.className = "attribute_name_img";
        Attributes_Jump_Drive_Consumption_Amount_Img.src = "StyleSheets/ship_info_icons/Blank.png";

        Attributes_Fuel_Bay_Capacity.textContent = "Fuel Bay Capacity";
        Attributes_Fuel_Bay_Capacity.className = "attribute_name";
        Attributes_Fuel_Bay_Capacity_Img.className = "attribute_name_img";
        Attributes_Fuel_Bay_Capacity_Img.src = "StyleSheets/ship_info_icons/Capacity.png";

        var Attributes_Jump_Drive_Cap = document.querySelector("#AT75");
        var Attributes_Maximum_Jump = document.querySelector("#AT77");
        var Attributes_Jump_Drive_Fue = document.querySelector("#AT79");
        var Attributes_Jump_Drive_Con = document.querySelector("#AT81");
        var Attributes_Fuel_Bay = document.querySelector("#AT85");
        
        Attributes_Jump_Drive_Cap.style.display = "grid";
        Attributes_Maximum_Jump.style.display = "grid";
        Attributes_Jump_Drive_Fue.style.display = "grid";
        Attributes_Jump_Drive_Con.style.display = "grid";
        Attributes_Fuel_Bay.style.display = "grid";

        Attributes_Jump_Drive_Cap.appendChild(Attributes_Jump_Drive_Capacitor_Need_Img);
        Attributes_Jump_Drive_Cap.appendChild(Attributes_Jump_Drive_Capacitor_Need);
        Attributes_Maximum_Jump.appendChild(Attributes_Maximum_Jump_Range_Img);
        Attributes_Maximum_Jump.appendChild(Attributes_Maximum_Jump_Range);
        Attributes_Jump_Drive_Fue.appendChild(Attributes_Jump_Drive_Fuel_Need_Img);
        Attributes_Jump_Drive_Fue.appendChild(Attributes_Jump_Drive_Fuel_Need);
        Attributes_Jump_Drive_Con.appendChild(Attributes_Jump_Drive_Consumption_Amount_Img);
        Attributes_Jump_Drive_Con.appendChild(Attributes_Jump_Drive_Consumption_Amount);
        Attributes_Fuel_Bay.appendChild(Attributes_Fuel_Bay_Capacity_Img);
        Attributes_Fuel_Bay.appendChild(Attributes_Fuel_Bay_Capacity);
        
        var Attributes_Jump_Drive_Cap_AT = document.querySelector("#AT76");
        var Attributes_Maximum_Jump_AT = document.querySelector("#AT78");
        var Attributes_Jump_Drive_Fue_AT = document.querySelector("#AT80");
        var Attributes_Jump_Drive_Con_AT = document.querySelector("#AT82");
        var Attributes_Fuel_Bay_AT = document.querySelector("#AT86");
        Attributes_Jump_Drive_Cap_AT.style.display = "grid";
        Attributes_Maximum_Jump_AT.style.display = "grid";
        Attributes_Jump_Drive_Fue_AT.style.display = "grid";
        Attributes_Jump_Drive_Con_AT.style.display = "grid";
        Attributes_Fuel_Bay_AT.style.display = "grid";

    } else if (Toggle === false) {

        var Attributes_Jump_Drive_Cap = document.querySelector("#AT75");
        var Attributes_Maximum_Jump = document.querySelector("#AT77");
        var Attributes_Jump_Drive_Fue = document.querySelector("#AT79");
        var Attributes_Jump_Drive_Con = document.querySelector("#AT81");
        var Attributes_Fuel_Bay = document.querySelector("#AT85");
        Attributes_Jump_Drive_Cap.style.display = "none";
        Attributes_Maximum_Jump.style.display = "none";
        Attributes_Jump_Drive_Fue.style.display = "none";
        Attributes_Jump_Drive_Con.style.display = "none";
        Attributes_Fuel_Bay.style.display = "none";
       var Attributes_Jump_Drive_Cap_AT = document.querySelector("#AT76");
        var Attributes_Maximum_Jump_AT = document.querySelector("#AT78");
        var Attributes_Jump_Drive_Fue_AT = document.querySelector("#AT80");
        var Attributes_Jump_Drive_Con_AT = document.querySelector("#AT82");
        var Attributes_Fuel_Bay_AT = document.querySelector("#AT86");
        Attributes_Jump_Drive_Cap_AT.style.display = "none";
        Attributes_Maximum_Jump_AT.style.display = "none";
        Attributes_Jump_Drive_Fue_AT.style.display = "none";
        Attributes_Jump_Drive_Con_AT.style.display = "none";
        Attributes_Fuel_Bay_AT.style.display = "none";
    }
} 

function Jump_Portal_Activation_Cost(Toggle){
    
    if (Toggle === true) {

        var Attributes_Jump_Portal_Activation_Cost = document.createElement("p");
        var Attributes_Jump_Portal_Activation_Cost_Img = document.createElement("img");

        Attributes_Jump_Portal_Activation_Cost.textContent = "Jump portal activation cost";
        Attributes_Jump_Portal_Activation_Cost.className = "attribute_name";
        Attributes_Jump_Portal_Activation_Cost_Img.className = "attribute_name_img";
        Attributes_Jump_Portal_Activation_Cost_Img.src = "StyleSheets/ship_info_icons/Capacitor_Cost.png";

        var Attributes_Jump_Portal = document.querySelector("#AT83");

        Attributes_Jump_Portal.style.display = "grid";

        Attributes_Jump_Portal.appendChild(Attributes_Jump_Portal_Activation_Cost_Img);
        Attributes_Jump_Portal.appendChild(Attributes_Jump_Portal_Activation_Cost);

        var Attributes_Jump_Portal_AT = document.querySelector("#AT84");
        Attributes_Jump_Portal_AT.style.display = "grid";

    } else if (Toggle === false) {
        
        var Attributes_Jump_Portal = document.querySelector("#AT83");
        Attributes_Jump_Portal.style.display = "none";
        var Attributes_Jump_Portal_AT = document.querySelector("#AT84");
        Attributes_Jump_Portal_AT.style.display = "none";
    }
}


// faction menu highlighting
var faction_header = document.querySelector(".menu_navbar");
var faction_btns = faction_header.getElementsByClassName("menu_tab");
for (var i = 0; i < faction_btns.length; i++) {
    faction_btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("faction_active");
        current[0].className = current[0].className.replace(" faction_active", "");
        this.className += " faction_active";
    });
}