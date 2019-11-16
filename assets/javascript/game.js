$(document).ready( () => {

    let losses = 0;
    let wins = 0;
    let randomNumber;
    let totalScore = 0;

    $('#losses').append(losses);
    $('#wins').append(wins);
    $('#totalScore').append(totalScore);


    function createRandomNumber(min,max){
        randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
        $("#randomNumber").text(randomNumber);
        
    }
    
    createRandomNumber(19,120);


    let blueGem;
    let purpleGem;
    let greenGem;
    let redGem;

    function crystalCollection(){
        blueGem= Math.floor(Math.random() * 12) +1;
        console.log(blueGem);
        purpleGem= Math.floor(Math.random() * 12) +1;
        console.log(purpleGem);
        greenGem= Math.floor(Math.random() * 12) +1;
        console.log(greenGem);
        redGem= Math.floor(Math.random() * 12) +1;
        console.log(redGem);

    }
    crystalCollection();
})