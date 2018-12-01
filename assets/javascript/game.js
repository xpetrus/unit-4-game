$(document).ready(function(){

var numToMatch;
var aValue;
var bValue;
var cValue;
var dValue;

var wins=0;
var losses=0;

var totalScore = 0;

var gameBegin = true;


nextRound();



function nextRound(){
    resetScore(); //all varibles set to zero
    numToMatch = Math.floor(Math.random() * 101)+19;
    aValue = Math.floor(Math.random() * 12)+1;
    bValue = Math.floor(Math.random()*12)+1;
    cValue = Math.floor(Math.random()*12)+1;
    dValue = Math.floor(Math.random()*12)+1;
    $("#point-goal").html(numToMatch); 

    console.log(aValue, bValue, cValue, dValue);
}   
    console.log(totalScore);

    $("#amethyst").on("click", function(){
        totalScore = totalScore + aValue;
        $("#urscore").html(totalScore);
        console.log(totalScore);
        checkScore();
    })
    $("#diamond").on("click", function(){
        totalScore = totalScore + bValue;
        $("#urscore").html(totalScore);
        checkScore();
    })
    $("#emerald").on("click", function(){
        totalScore = totalScore + cValue;
        $("#urscore").html(totalScore);
        checkScore();
    })
    $("#sapphire").on("click", function(){
        totalScore = totalScore + dValue;
        $("#urscore").html(totalScore);
        checkScore();
    })
    




function checkScore(){
    if(totalScore == numToMatch){
        wins++;
        $("#notif").html("<h5>You Win!</h5>");
        $(".winCount").html(wins);
        $(".lossCount").html(losses);
        console.log("win");
        
        nextRound();
        
        
    }
    else if(totalScore>numToMatch){
        losses++
        $("#notif").html("<h5>You Lose!</h5>");
        $(".winCount").html(wins);
        $(".lossCount").html(losses);
        console.log("lose");
        
        nextRound();
        
    }
    else{
        return;
    }
}
function resetScore(){
    
    
    numToMatch = 0;
    aValue = 0;
    bValue = 0;
    cValue = 0;
    dValue = 0;
    totalScore = 0;
     $("#urscore").html(totalScore);

}






    
});