var Typed =  new Typed("#loops",{
    strings : ["You Tuber" , "Frontent Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    looped :true
});


let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}
