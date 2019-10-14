$(document).ready(function () {
    let Random = Math.floor(Math.random() * 100 + 1)
    let Random = Math.floor((Math.random() * (120 - 19)) + 19)

    $("#targetNumber").text(Random);

    let crystal1 = Math.floor(Math.random() * 12 + 1)
    let crystal2 = Math.floor(Math.random() * 12 + 1)
    let crystal3 = Math.floor(Math.random() * 12 + 1)
    let crystal4 = Math.floor(Math.random() * 12 + 1)
    let crystal1 = Math.floor((Math.random() * 12) + 1)
    let crystal2 = Math.floor((Math.random() * 12) + 1)
    let crystal3 = Math.floor((Math.random() * 12) + 1)
    let crystal4 = Math.floor((Math.random() * 12) + 1)

    console.log("Pink: " + crystal1, "Blue: " + crystal2, "Purple: " + crystal3, "Green: " + crystal4);

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

    // click commands for each gem //

    $("#pink").on("click", function () {
        playerScore = playerScore + crystal1;
        $("totalScore").text(playerScore);
        $("#playerScore").text(playerScore);

        if (playerScore == Random) {
            alert("You Win!")
            winner();
        }

        else if (playerScore > Random) {
            alert("Nope, you lose!");
            loser();
        }
    })

    $(".blue").on("click", function () {
        $("#blue").on("click", function () {
            playerScore = playerScore + crystal2;
            $("totalScore").text(playerScore);
            $("#playerScore").text(playerScore);

            if (playerScore == Random) {
                alert("You Win!")
                winner();
            }

            else if (playerScore > Random) {
                alert("Nope, you lose!");
                loser();
            }
        })

        $(".purple").on("click", function () {

            $("#purple").on("click", function () {
                playerScore = playerScore + crystal3;
                $("totalScore").text(playerScore);
                $("#playerScore").text(playerScore);

                if (playerScore == Random) {
                    alert("You Win!")
                    winner();
                }

                else if (playerScore > Random) {
                    alert("Nope, you lose!");
                    loser();
                }
            })

            $(".green").on("click", function () {
                $("#green").on("click", function () {
                    playerScore = playerScore + crystal4;
                    $("totalScore").text(playerScore);
                    $("#playerScore").text(playerScore);

                    if (playerScore == Random) {
                        alert("You Win!")
                        winner();
                    }

                    else if (playerScore > Random) {
                        alert("Nope, you lose!");
                        loser();
                    }
                })

            });

            function reset() {
                Random = Math.floor((Math.random() * (120 - 19)) + 19);
                $("#targetNumber").text(Random);
                crystal1 = Math.floor((Math.random() * 12) + 1);
                crystal2 = Math.floor((Math.random() * 12) + 1);
                crystal3 = Math.floor((Math.random() * 12) + 1);
                crystal4 = Math.floor((Math.random() * 12) + 1);
                playerScore = 0;
                $("#playerScore").text("0");
            }

            $("#reset").on("click", function () {
                reset();
            })

        });
    }); 