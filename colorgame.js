/*var color=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];*/
var color=generaterandomcolor(6);

var square=document.querySelectorAll(".square");
var rgb=document.getElementById("rgb");
var colorcode=pickcolor(6);
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
//set easy game
easy.addEventListener("click",function(){
    easy.classList.add("btncolor");
    hard.classList.remove("btncolor");

    color=generaterandomcolor(3);
    colorcode=pickcolor(3);
    rgb.textContent=colorcode;
    message.textContent="";


    for(var i=0;i<square.length;i++){
        if(color[i]){
        square[i].style.background=color[i];
        }
        else{
            square[i].style.background="none";   
        }    
    }
    
})
//set hard game
hard.addEventListener("click",function(){
    hard.classList.add("btncolor");
    easy.classList.remove("btncolor");

    color=generaterandomcolor(6);
    colorcode=pickcolor(6);
    rgb.textContent=colorcode;
    message.textContent="";
   
    for(var i=0;i<square.length;i++){
        if(color[i]){
        square[i].style.background=color[i];
        }
        else{
            square[i].style.background="block";   
        }    
    }
})

//reset game
reset.addEventListener("click",function(){
    color=generaterandomcolor(6);
    colorcode=pickcolor(6);
    rgb.textContent=colorcode;
    h1.style.background="steelblue";
    reset.textContent="New Color"
    message.textContent="";
    

    for(var i=0;i<square.length;i++){
        square[i].style.background=color[i];
    }
})

rgb.textContent=colorcode;

//check wheather click square color match or not
for(var i=0; i<square.length; i++){
    square[i].style.background=color[i]; 

    square[i].addEventListener("click",function(){
        var clickcolor=this.style.background;
        if(colorcode===clickcolor){
            message.textContent="Correct"
            changecolor(colorcode);
            h1.style.background=colorcode;
            reset.textContent="Play Again"
        }
        else{
            
            this.style.background="#232323";
            message.textContent="try again";
        }
    })
}

//makes all square color as winning color
function changecolor(colors){
    for(var j=0;j<square.length;j++){
        square[j].style.background=colors;
    }
};

//pick a single random color from array
function pickcolor(range){
    var random=Math.floor(Math.random() *range );
    return color[random];
}

//generate list of colors in array 
function generaterandomcolor(num){
    var array=[];
    for(var i=0;i<num; i++){
    array.push(randomcolor());
    }
    return array;
}
//generate a random color
function randomcolor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r + ", "+ g +", "+ b +")"
}