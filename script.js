let maineimage = document.getElementsByClassName("mainimage")[0];
let contaier = document.getElementsByClassName("container")[0];
let licolor = document.getElementsByTagName("li");

function phones(phone){
    maineimage.src = phone;
}
function colors(color){
    contaier.style.background = color;
}
function navchangecolor(navcolor){
    for(let i = 0 ; i < licolor.length ; i++){
        licolor[i].style.color = navcolor;
    }
}