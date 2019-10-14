$(document).ready(function () {
    let randomN = Math.floor(Math.random() * 100 + 1)
    let randomN = Math.floor((Math.random() * (120 - 19)) + 19)

    $("#randomNumber").text(randomN);

    let gemB1 = Math.floor(Math.random() * 12 + 1)
    let gemG2 = Math.floor(Math.random() * 12 + 1)
    let gemY3 = Math.floor(Math.random() * 12 + 1)
    let gemP4 = Math.floor(Math.random() * 12 + 1)
    let gemB1 = Math.floor((Math.random() * 12) + 1)
    let gemG2 = Math.floor((Math.random() * 12) + 1)
    let gemY3 = Math.floor((Math.random() * 12) + 1)
    let gemP4 = Math.floor((Math.random() * 12) + 1)

    newFunction(gemB1, gemG2, gemY3, gemP4);

    $(document).ready(function () {
        let losses = 0;

        // wins and losses counter //

        function winner() {
            wins++;
            $("#wins").text(wins);
            alert("Winner!");
            reset();
        }

        function loser() {
            losses++;
            alert("Loser");
            $("#losses").text(losses);
            alert("Loser");
            reset();
        }
    }


    $("#blueGem").on("click", function () {
        userScore = userScore + gemB1;
        $("totalScore").text(userScore);
        $("#totalScore").text(userScore);

        if (userScore == randomN) {
            alert("You Win!")
            winner();
        }

        else if (userScore > randomN) {
            alert("Nope, you lose!");
            loser();
        }
    })

    $("#greenGem").on("click", function () {
        userScore = userScore + gemG2;
        $("totalScore").text(userScore);
        $("#totalScore").text(userScore);

        if (userScore == randomN) {
            alert("You Win!")
            winner();
        }

        else if (userScore > randomN) {
            alert("Nope, you lose!");
            loser();
        }
    })


            $("#yellowGem").on("click", function () {
        userScore = userScore + gemY3;
        $("totalScore").text(userScore);
        $("#totalScore").text(userScore);

        if (userScore == randomN) {
            alert("You Win!")
            winner();
        }

        else if (userScore > randomN) {
            alert("Nope, you lose!");
            loser();
        }
    })

                $("#purpleGem").on("click", function () {
        userScore = userScore + gemP4;
        $("totalScore").text(userScore);
        $("#totalScore").text(userScore);

        if (userScore == randomN) {
            alert("You Win!")
            winner();
        }

        else if (userScore > randomN) {
            alert("Nope, you lose!");
            loser();
        }
    })

            });

function newFunction(gemB1, gemG2, gemY3, gemP4) {
    console.log("Blue: " + gemB1, "Green: " + gemG2, "Yellow: " + gemY3, "Purple: " + gemP4);
}

function reset() {
    Random = Math.floor((Math.random() * (120 - 19)) + 19);
    $("#randomNumber").text(randomN);
    gemB1 = Math.floor((Math.random() * 12) + 1);
    gemG2 = Math.floor((Math.random() * 12) + 1);
    gemY3 = Math.floor((Math.random() * 12) + 1);
    gemP4 = Math.floor((Math.random() * 12) + 1);
    userScore = 0;
    $("#totalScore").text("0");
}

$("#restart").on("click", function () {
    reset();
});




