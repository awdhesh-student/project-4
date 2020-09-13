/*************************************************************************************/
/*******************************detecting click press********************************/
/***********************************************************************************/

var numberOfdrums= document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfdrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}    
/*************************************************************************************/
/*****************************detecting keyboard press*******************************/
/***********************************************************************************/

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) 
        {
            case "w":
                var w= new Audio("w.mp3");
                w.play();
            break;

            case "a":
                var a= new Audio("a.mp3");
                a.play();
            break;

            case "s":
                var s= new Audio("s.mp3");
                s.play();
            break;

            case "d":
                var d= new Audio("d.mp3");
                d.play();
            break;

            case "j":
                var j= new Audio("j.mp3");
                j.play();
            break;   
                
            case "k":
                var k= new Audio("k.mp3");
                k.play();
            break;

            case "l":
                var l= new Audio("l.mp3");
                l.play();
            break;

            default: console.log(buttonInnerHTML);
            break;
        }
}

function buttonAnimation(currentKey)
{
    var activeButton= document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}