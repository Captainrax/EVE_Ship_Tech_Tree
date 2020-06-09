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
    // top section (image,name,class)
    var Ship_Img = document.querySelector("#Ship_img");
    var Ship_Name = document.querySelector(".ship_name");
    var Ship_Title_Name = document.querySelector(".ship_title_name");

    Ship_Img.src = Ship.geticon();
    Ship_Name.textContent = Ship.Name;
    Ship_Title_Name.textContent = Ship.Name + " (" + Ship.Class + ")" + ": Information";

    // Closes the ship_div window
    function Close() {
        var Ship_Div = document.querySelector("#ship_div");
        const CloseButton = document.querySelector("#close");

        CloseButton.addEventListener("click", function(){

            Ship_Div.remove();
            //From FACTION_EventListener.js - ensures only 1 Ship_Div can be created
            pagecount = false;
            // resets attributes title bool
            Shared_Facilites_Toggled = false;
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
        for (var i = 0; i < btns.length; i++) 
        {
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
    Fleet_Hangar_Capacity(false);
    Jump_Clones(false);
    Jump_Drive_Systems(false);
    Jump_Portal_Activation_Cost(false);
    
    var desc = document.querySelector("#description_text");
    desc.textContent = data["description"];

    // main cargo hold
    var spandata = document.querySelector("#SpanCapacity");
    spandata.textContent = data["capacity"].toLocaleString() + " m3";

    // ordered by attribute_id for the first half, visual display last half
    for(x in data["dogma_attributes"]){
        switch(data["dogma_attributes"][x]["attribute_id"]){
            case 4: // Mass
                var testdata = document.querySelector("#SpanMass");
                var DATA = data["dogma_attributes"][x]["value"];
                testdata.textContent = DATA.toLocaleString() + " kg";
                break;
            case 9: // Structure Hitpoints
                // var spandata = document.querySelector("#SpanStructureHitpoints");
                var DATA = data["dogma_attributes"][x]["value"];
                $("#SpanStructureHitpoints").text(DATA.toLocaleString() + " HP"); // using jquery, might do this to everything
                break;
            case 70: // Inertia Modifier
                var spandata = document.querySelector("#SpanInertiaModifier");
                spandata.textContent = data["dogma_attributes"][x]["value"] + " x";
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
            case 161: // Volume
                var spandata = document.querySelector("#SpanVolume");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                var pack = data["packaged_volume"];
                spandata.textContent += " (" + pack.toLocaleString() + " m3 Packaged)";
                break;
            case 263: // Shield Capacity
                var spandata = document.querySelector("#SpanShieldCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " HP";
                break;
            case 265: // Armor Hitpoints
                var spandata = document.querySelector("#SpanArmorHitpoints");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " HP";
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
            case 283: // Drone Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Attribute_Drone(true);
                }
                var spandata = document.querySelector("#SpanDroneCapacity");
                spandata.textContent = data["dogma_attributes"][x]["value"] + " m3";
                break;
            case 479: // Shield Recharge Time
                var spandata = document.querySelector("#SpanShieldRechargeTime");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = (DATA / 1000).toFixed(2) + " s";
                break;
            case 482: // Capacitor Capacity
                var spandata = document.querySelector("#SpanCapacitorCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toFixed(1) + " GJ";
                break;
            case 55: // Capacitor Recharge Time
                var spandata = document.querySelector("#SpanCapacitorRechargeTime");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = (DATA / 1000).toFixed(2) + " s";
                break;
            case 1271: // Drone Bandwidth
                var spandata = document.querySelector("#SpanDroneBandwitch");
                spandata.textContent = data["dogma_attributes"][x]["value"] + " Mbit/sec";
                break;
            case 2675: // Sybsystem Hold Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Subsystem_Hold_Capacity(true);
                }
                var spandata = document.querySelector("#SpanSybsystemHoldCapacity"); 
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                break;
            case 1556: // Ore Hold Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Ore_Hold_Capacity(true);
                }
                var spandata = document.querySelector("#SpanOreHoldCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                break;
            case 1653: // Planetary Commodities Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Planetary_Commodities_Capacity(true);
                }
                var spandata = document.querySelector("#SpanPlanetaryCommoditiesCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                break;
            case 1558: // Mineral Hold Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Mineral_Hold_Capacity(true);
                }
                var spandata = document.querySelector("#SpanMineralHoldCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                break;
            case 1573: // Ammo Hold Capacity
                if(data["dogma_attributes"][x]["value"] != 0){
                    Ammo_Hold_Capacity(true);
                }
                var spandata = document.querySelector("#SpanAmmoHoldCapacity");
                var DATA = data["dogma_attributes"][x]["value"];
                spandata.textContent = DATA.toLocaleString() + " m3";
                break;
            case 2135: // Remote Electronic Assistance Impedance
                if(data["dogma_attributes"][x]["value"] != 0){
                    Electronic_Resistances(true);
                }
                var spandata = document.querySelector("#SpanRemoteElectronicAssistanceImpedance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2116: // Remote Logistics Impedance
                var spandata = document.querySelector("#SpanRemoteLogisticsImpedance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2045: // Capacitor Warfare Resistance
                var spandata = document.querySelector("#SpanCapacitorWarfareResistance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2112: // Sensor Warfare Resistance
                var spandata = document.querySelector("#SpanSensorWarfareResistance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2115: // Stasis Webifier Resistance
                var spandata = document.querySelector("#SpanStasisWebifierResistance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2114: // Target Painter Resistance
                var spandata = document.querySelector("#SpanTargetPainterResistance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 2113: // Weapon Disruption Resistance
                var spandata = document.querySelector("#SpanWeaponDisruptionResistance");
                spandata.textContent = ((1 - data["dogma_attributes"][x]["value"]) * 100).toFixed(2) + " %";
                if(parseFloat(spandata.textContent) % 1 === 0){
                    spandata.textContent = parseFloat(spandata.textContent).toFixed(0) + " %";
                }
                break;
            case 76: // Maximum Targeting Range
                var spandata = document.querySelector("#SpanMaximumTargetingRange");
                spandata.textContent = ( data["dogma_attributes"][x]["value"] / 1000).toFixed(2) + " km";
                break;
            case 192: // Maximum Locked Targets
                var spandata = document.querySelector("#SpanMaximumLockedTargets");
                spandata.textContent = data["dogma_attributes"][x]["value"];
                break;
            case 552: // Signature Radius
                var spandata = document.querySelector("#SpanSignatureRadius");
                spandata.textContent = ( data["dogma_attributes"][x]["value"] / 1000).toFixed(2) + " km";
                if(data["dogma_attributes"][x]["value"] < 1000){
                    spandata.textContent = data["dogma_attributes"][x]["value"] + " m";
                }
                break;
            case 564: // Scan Resolution
                var spandata = document.querySelector("#SpanScanResolution");
                spandata.textContent = data["dogma_attributes"][x]["value"] + " mm";
                break;
            case 208: // Radar Sensor Strength
                var value = document.querySelector("#radar_sensor_value");
                value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                if(parseFloat(value.textContent) === 0){
                    value.textContent = " -";
                }
                break;
            case 210: // Magnetometric Sensor Strength
                var value = document.querySelector("#magnetometric_sensor_value");
                value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                if(parseFloat(value.textContent) === 0){
                    value.textContent = " -";
                }
                break;
            case 211: // Gravimetric Sensor Strength
                var value = document.querySelector("#gravimetric_sensor_value");
                value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                if(parseFloat(value.textContent) === 0){
                    value.textContent = " -";
                }
                break;
            case 209: // Ladar Sensor Strength
                var value = document.querySelector("#ladar_sensor_value");
                value.textContent = (data["dogma_attributes"][x]["value"]) + " points";
                if(parseFloat(value.textContent) === 0){
                    value.textContent = " -";
                }
                break;
            case 912: // Fleet Hangar Capacity
                    Fleet_Hangar_Capacity(true);
                var spandata = document.querySelector("#SpanFleetHangerCapacity");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                break;
            case 908: // Ship Maintenance Bay Capacity
                    Ship_Maintenance_Bay(true);
                var spandata = document.querySelector("#SpanShipMaintenanceBayCapacity");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                break;
            case 979: // Maximum Jump Clones
                    Jump_Clones(true);
                var spandata = document.querySelector("#SpanMaximumJumpClones");
                spandata.textContent = data["dogma_attributes"][x]["value"];
                break;
            case 898: // Jump Drive Capacitor Need
                    Jump_Drive_Systems(true);
                var spandata = document.querySelector("#SpanJumpDriveCapacitorNeed");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() * 100 + " %";
                break;
            case 867: // Maximum Jump Range
                var spandata = document.querySelector("#SpanMaximumJumpRange");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " ly";
                break;
            case 866: // Jump Drive Fuel Need
                var spandata = document.querySelector("#SpanJumpDriveFuelNeed");
                spandata.textContent = data["dogma_attributes"][x]["value"];
                break;
            case 868: // Jump Drive Consumption Amount
                var spandata = document.querySelector("#SpanJumpDriveConsumptionAmount");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " units";
                break;
            case 1005: // Jump Portal Activation Cost
                    Jump_Portal_Activation_Cost(true);
                var spandata = document.querySelector("#SpanJumpPortalActivationCost");
                spandata.textContent = data["dogma_attributes"][x]["value"] + " GJ";
                break;
            case 1549: // Fuel Bay Capacity
                var spandata = document.querySelector("#SpanFuelBayCapacity");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m3";
                break;
            case 37: // Maximum Velocity
                var spandata = document.querySelector("#SpanMaximumVelocity");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " m/sec";
            break;
            case 600: // Ship Warp Speed
                var spandata = document.querySelector("#SpanShipWarpSpeed");
                spandata.textContent = data["dogma_attributes"][x]["value"].toLocaleString() + " AU/s";
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

        var Attributes_Str_Drone_Capacity = document.querySelector("#AT5");
        var Attributes_Str_Drone_Bandwidth = document.querySelector("#AT7");
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

        var Attributes_Str_Subsystem_Hold_Capacity = document.querySelector("#AT15");
        Attributes_Str_Subsystem_Hold_Capacity.style.display = "grid";
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
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT17");
        Attributes_Str_Hold_Capacity.style.display = "grid";
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
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT19");
        Attributes_Str_Hold_Capacity.style.display = "grid";
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
        
        var Attributes_Str_Hold_Capacity = document.querySelector("#AT21");
        Attributes_Str_Hold_Capacity.style.display = "grid";
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
        
        var Attributes_Elect = document.querySelector("#AT36");
        Attributes_Elect.style.display = "grid";

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

        var Attributes_Elect = document.querySelector("#AT36");
        Attributes_Elect.style.display = "none";

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
// title function, if atleast 1 subcategory is true, set title to true aswell
var Shared_Facilites_Toggled = false;
function Shared_Facilites(Toggle){

    if (Toggle === true) {
        // Title
        var Attributes_Shared = document.querySelector("#AT67");
        Attributes_Shared.style.display = "grid";
        // Bool Toggled
        Shared_Facilites_Toggled = true;
    } else if (Toggle === false) {

        var Attributes_Shared = document.querySelector("#AT67");
        Attributes_Shared.style.display = "none";
    }
}
function Fleet_Hangar_Capacity(Toggle){

    if (Toggle === true) {
        if(Shared_Facilites_Toggled == false){
            Shared_Facilites(true);
        }
        var Attributes_Fleet_Hangar = document.querySelector("#AT68");
        Attributes_Fleet_Hangar.style.display = "grid";
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

        if(Shared_Facilites_Toggled == false){
            Shared_Facilites(true);
        }
        var Attributes_Ship_Maintenance_Bay = document.querySelector("#AT70");
        Attributes_Ship_Maintenance_Bay.style.display = "grid";
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
        if(Shared_Facilites_Toggled == false){
            Shared_Facilites(true);
        }

        var Attributes_Maximum_Jump = document.querySelector("#AT72");
        Attributes_Maximum_Jump.style.display = "grid";
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
        var Attributes_Jump = document.querySelector("#AT74");
        Attributes_Jump.style.display = "grid";
        
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

        
        var Attributes_Jump = document.querySelector("#AT74");
        Attributes_Jump.style.display = "none";

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

        var Attributes_Jump_Portal = document.querySelector("#AT83");
        Attributes_Jump_Portal.style.display = "grid";
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