
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

function toggleNav() {
    var element = document.getElementById("iconbar").style.width;
    
    console.log(document.getElementById("iconbar"))
    // console.log(element.style.width);
    if(element/16 === 6){
        console.log(document.getElementById("iconbar").style.width);

        closeNav();
    }
    else{
        // console.log(document.getElementById("iconbar").style.width);
        openNav();
    }
        
}


// // document.getElementById("iconbar").onblur = closeNav(70);
function openNav(){
    document.getElementById("iconbar").style.width = "6rem";
}

function closeNav() {
    document.getElementById("iconbar").style.width = "0";
}


