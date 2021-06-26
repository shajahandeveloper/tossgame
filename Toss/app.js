function toss(){
    var randomNumberCoin= Math.floor(Math.random()*2)+1;
    var randomImageCoin= "coin"+randomNumberCoin+".png";
    var showCoinImage= document.querySelectorAll(".coin")[0].setAttribute("src",randomImageCoin);

    if (randomNumberCoin==1){
        document.querySelector("#coinDecision").innerHTML="Its HEADS";
    }
    else{
        document.querySelector("#coinDecision").innerHTML="Its TAILS";
    }
}



function roll(){
    var randomNumberHand= Math.floor(Math.random()*3)+1;
    var randomImageHand= "hand"+randomNumberHand+".png";
    var showHandImage= document.querySelectorAll(".hand")[0].setAttribute("src",randomImageHand);


    var randomNumberHand2= Math.floor(Math.random()*3)+1;
    var randomImageHand2= "hand"+randomNumberHand2+".png";
    var showHandImage2= document.querySelectorAll(".hand")[1].setAttribute("src", randomImageHand2);

}