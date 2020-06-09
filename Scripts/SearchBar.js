// todo, add partial searching
// this kinda works...
// document.querySelectorAll('[id*="'+ $(".menu_searchbar").val() +'"]'); // saved for later
$( ".menu_searchbar" ).keyup(function() {

    $( "div,body *" )
    .removeClass(" highlighted")
    .parent().removeClass(" highlighted"); // removes any highlighted classes

    let shiplist;

    if($(".menu_searchbar").val().length > 1){ // need atleast 2 char before it queries
        shiplist = document.querySelectorAll('[id*="'+ $(".menu_searchbar").val().toLowerCase() +'"]');
    };
    
    // .parent().addClass(" highlighted"); // adds highlighted class to parent element
    // console.log(shiplist.length);
    try {
        for (let I = 0; I < shiplist.length; I++) {
            shiplist[I].parentElement.classList.add("highlighted"); // adds highlighted class to parent element

            // console.log(shiplist[I].parentElement.classList);
        };
    } catch {

    };
});