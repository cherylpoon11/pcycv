
// document.getElementsByTagName("BODY")[0].addEventListener('click',closeNav);
// const el= document.getElementsByTagName("section");
// // // document.querySelectorAll("#page1", "#page2" ,"#page3");
// // // el.addEventListener('click', closeNav);
// if (document.getElementById("iconbar")=="80px") {
//     el[0].addEventListener("click",closeNav, true);
//    }


window.onload = function(){
 document.body.addEventListener("click", closeNav, true);
//  const el= document.querySelectorAll("#page1", "#page2" ,"#page3");
// document.getElementsByTagName("body")
//  el[0].addEventListener("click",closeNav, true);

}


    var url = window.location.toString();
    // console.log(url);
    //Remove anchor from url when reload
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
        url = url.split("#")[0];
        // console.log(url);
        location.href = url;
        // console.log(location.href);
    }


  
function toggleNav() {
    // var element = document.getElementById("iconbar").clientWidth;
    const activated = document.getElementById("iconbar").activated ? true : false;

    
    if(!activated){
        openNav();
        // console.log(activated);
    }
    else{

        closeNav();
    }
    // var foo = document.getElementById("iconbar");
    // foo.activated = !activated;
    document.getElementById("iconbar").activated = !activated;
    // console.log(docume/nt.getElementById("iconbar").activated);
}


function openNav(){
    document.getElementById("iconbar").style.width = "6rem";
}

function closeNav() {
    document.getElementById("iconbar").style.width = "0";
}
