$(document).ready(function () {

    var url = window.location.href;
    console.log(url);
    var userId;

    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.name);
        $(".dashboard-desktop-profile").attr("src", data.pic);
        $(".dashboard-profile").attr("src", data.pic);
        userId = data.Id;
    });

    $("#logout-button").on("click", function () {
        $.get("/api/logout").then(function () {
            console.log("you are logged out");
        })
    })

    $("#delete-user").on("click", function() {
        $.ajax({
            method: "DELETE",
            url: "/api/delete_person" + userId
        })
            .then(function () {
            });
    })



    function getInterestList() {
        $.get("/api/get_interests", function (data) {
            console.log("api worked" + data[0].title);
            // window.location.href = "/dashtest";
            getPieChart(data)
            getBarChart(data);
            getScaleChart(data);
            displayInterestBudget(data);
            getBigBudget(data);
        });

    }

    getInterestList();

    function getBigBudget(data) {
        var r = data.length - 1;
        var bigCost = data[r].estCost;
        $("#bigCost").html("$" + bigCost);

        var bigType = data[r].title;
        if (bigType === "Vacation") {
            $(".big-expense-title").html("Vacation");
            $(".big-expense-dashboard").attr("src", "images/vacation.png");
        } else if (bigType === "Big Purchase") {
            $(".big-expense-title").html("Big Purchase");
            $(".big-expense-dashboard").attr("src", "images/ring.png");
        } else {
            $(".big-expense-title").html("Car");
        }
    }

    var actualInterestCost = {};

    function displayInterestBudget(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === "Movies") {
                $(".movie-bucket").html("$" + data[i].estCost);
                $(".movies-cost").attr("data-id", data[i].id);
                $(".movies-cost").attr("data-actCost", data[i].actualCost);
                console.log(data[i].actualCost);
                var actualMovie = data[i].actualCost
                actualInterestCost.movies = actualMovie;
                console.log(actualInterestCost);
            } else if (data[i].title === "Concerts") {
                $(".music-bucket").html("$" + data[i].estCost);
                $(".concerts-cost").attr("data-id", data[i].id);
                $(".concerts-cost").attr("data-actCost", data[i].actualCost);
            } else if (data[i].title === "Shopping") {
                $(".shopping-bucket").html("$" + data[i].estCost);
                $(".shopping-cost").attr("data-id", data[i].id);
                $(".shopping-cost").attr("data-actCost", data[i].actualCost);
            } else if (data[i].title === "Eating Out") {
                $(".food-bucket").html("$" + data[i].estCost);
                $(".eating-cost").attr("data-id", data[i].id);
                $(".eating-cost").attr("data-actCost", data[i].actualCost);
            } else if (data[i].title === "Drinks") {
                $(".drinks-bucket").html("$" + data[i].estCost);
                $(".drinks-cost").attr("data-id", data[i].id);
                $(".drinks-cost").attr("data-actCost", data[i].actualCost);
            } else if (data[i].title === "Outings") {
                $(".outing-bucket").html("$" + data[i].estCost);
                $(".outing-cost").attr("data-id", data[i].id);
                $(".outing-cost").attr("data-actCost", data[i].actualCost);
            }
        }
    }



    function getPieChart(data) {
        console.log(data);
        console.log("Something Happened")
        var dataPlotly = [{
            values: [],
            labels: [],
            type: 'pie',
            marker: {
                colors: ['rgb(54, 50, 153)', 'rgb(17, 123, 153)', 'rgb(37, 180, 167)', 'rgb(134, 191, 118)', 'rgb(249, 210, 41)', 'rgb(244, 236, 21)']
            },
        }];


        for (let i = 0; i < data.length - 1; i++) {

            var cost = parseInt(data[i].estCost);
            var title = data[i].title;


            dataPlotly[0].values.push(cost);
            dataPlotly[0].labels.push(title);
            if (i === data.length - 2) {
                Plotly.newPlot('myDiv3', dataPlotly);

                console.log(dataPlotly);
            }
        }
    }

    function getScaleChart(data) {
        var percentageToGoal = 0;

        // Trig to calc meter point
        var degrees = 180 - percentageToGoal,
            radius = .5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);

        // Path: may have to change to create a better triangle
        var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        var path = mainPath.concat(pathX, space, pathY, pathEnd);

        var data = [{
            type: 'scatter',
            x: [0], y: [0],
            marker: { size: 28, color: '#a7ff84' },
            showlegend: false,
            name: 'percentage to goal',
            text: percentageToGoal,
            hoverinfo: 'text+name'
        },
        {
            values: [50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50 / 6, 50],
            rotation: 90,
            text: ['100%!', '81-99%', '61-80%', '41-60%',
                '21-40%', '0-20%', ''],
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: ['rgb(8,24,83)', 'rgb(11, 34, 116)',
                    'rgb(15, 47, 163)', 'rgb(20, 61, 210)',
                    'rgb(45, 86, 235)', 'rgb(92, 124, 240)',
                    'rgba(255, 255, 255, 0)']
            },
            labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
            hoverinfo: 'label',
            hole: .5,
            type: 'pie',
            showlegend: false
        }];

        var layout = {
            shapes: [{
                type: 'path',
                path: path,
                fillcolor: '#a7ff84',
                line: {
                    color: '#a7ff84'
                }
            }],
            title: 'Percentage to Goal',
            font: {
                color: "#d9d9d9"
            },
            height: 500,
            width: 500,
            xaxis: {
                zeroline: false, showticklabels: false,
                showgrid: false, range: [-1, 1]
            },
            yaxis: {
                zeroline: false, showticklabels: false,
                showgrid: false, range: [-1, 1]
            }
        };

        Plotly.newPlot('myDiv1', data, layout);
    }

    function getBarChart(res) {
        var trace1 = {
            x: [],
            y: [],
            name: 'Estimated Cost',
            type: 'bar'
        };

        var trace2 = {
            x: [],
            y: [],
            name: 'Actual Cost',
            type: 'bar'
        };

        var data = [trace1, trace2];

        var layout = { barmode: 'group' };

        for (let i = 0; i < res.length - 1; i++) {

            var cost = parseInt(res[i].estCost);
            var title = res[i].title;
            var actualCost = parseInt(res[i].actualCost)


            trace1.x.push(title);
            trace2.x.push(title);
            trace1.y.push(cost);
            trace2.y.push(actualCost);

            if (i === res.length - 2) {
                Plotly.newPlot('myDiv2', data, layout);

            }
        }

    }

    $(".add-expense-btn").on("click", function () {
        $("#movie-btn, #concert-btn, #shopping-btn, #dinner-btn, #drinks-btn, #outing-btn").prop("checked", null);

        $("#movie_amount, #concert_amount, #shopping_amount, #dinner_amount, #drinks_amount, #outing_amount").prop("disabled", true);

        $("#movie_amount, #concert_amount, #shopping_amount, #dinner_amount, #drinks_amount, #outing_amount").val("");

        $("#movie_amount, #concert_amount, #shopping_amount, #dinner_amount, #drinks_amount, #outing_amount").removeClass("valid");

        $("label").attr("class", "");
    });

    $(".edit-budget-btn").on("click", function () {
        $("#movie-btn-2, #concert-btn-2, #shopping-btn-2, #dinner-btn-2, #drinks-btn-2, #outing-btn-2").prop("checked", null);

        $("#movie_amount_2, #concert_amount_2, #shopping_amount_2, #dinner_amount_2, #drinks_amount_2, #outing_amount_2").prop("disabled", true);

        $("#movie_amount_2, #concert_amount_2, #shopping_amount_2, #dinner_amount_2, #drinks_amount_2, #outing_amount_2").val("");

        $("#movie_amount_2, #concert_amount_2, #shopping_amount_2, #dinner_amount_2, #drinks_amount_2, #outing_amount_2").removeClass("valid");

        $("label").attr("class", "");
    })

    $("#actualCost").on("click", function () {

        if ($("#movie-btn").is(":checked")) {
            var previousAmout = $(".movies-cost").attr("data-actCost");
            
            var movieAmount = $("#movie_amount").val().trim();
            movieAmount = parseInt(movieAmount) + parseInt(previousAmout);
            var interest = {
                "id": $(".movies-cost").attr("data-id"),
                "actualCost": movieAmount
            };
            updateCost(interest);
        }
        if ($("#concert-btn").is(":checked")) {

            var previousAmout = $(".concerts-cost").attr("data-actCost");
            var concertAmount = $("#concert_amount").val().trim()
            concertAmount = parseInt(concertAmount) + parseInt(previousAmout);
            var interest = {
                "id": $(".concerts-cost").attr("data-id"),
                "actualCost": concertAmount
            };
            updateCost(interest);

        }
        if ($("#shopping-btn").is(":checked")) {

            var previousAmout = $(".shopping-cost").attr("data-actCost");
            var shopAmount = $("#shopping_amount").val().trim()
            shopAmount = parseInt(shopAmount) + parseInt(previousAmout);
            var interest = {
                "id": $(".shopping-cost").attr("data-id"),
                "actualCost": shopAmount
            };
            updateCost(interest);

        }
        if ($("#dinner-btn").is(":checked")) {

            // var previousAmout = $(".eating-cost").attr("data-actCost");
            var dinnerAmount = $("#dinner_amount").val().trim();
            dinnerAmount = parseInt(dinnerAmount) + parseInt(actualInterestCost.movies);
            var interest = {
                "id": $(".eating-cost").attr("data-id"),
                "actualCost": dinnerAmount
            };
            updateCost(interest);

        }
        if ($("#drinks-btn").is(":checked")) {

            var previousAmout = $(".drinks-cost").attr("data-actCost");
            var drinksAmount = $("#drinks_amount").val().trim();
            drinksAmount = parseInt(drinksAmount) + parseInt(previousAmout);
            var interest = {
                "id": $(".drinks-cost").attr("data-id"),
                "actualCost": drinksAmount
            };
            updateCost(interest);

        }
        if ($("#outing-btn").is(":checked")) {

            var previousAmout = $(".outing-cost").attr("data-actCost");
            var outingAmount = $("#outing_amount").val().trim();
            outingAmount = parseInt(outingAmount) + parseInt(previousAmout);
            var interest = {
                "id": $(".outing-cost").attr("data-id"),
                "actualCost": outingAmount
            };
            updateCost(interest);

        }
    })

    function updateCost(interests) {
        // $.post("/api/get_interests", interests, function() {
        //     // getInterests(interests);
        // })

        $.ajax({
            method: "PUT",
            url: "/api/update_cost",
            data: interests
        })
            .then(function () {
                getInterestList();
            });
    }

    $("#updateGoals").on("click", function () {
        if ($("#movie-btn-2").is(":checked")) {

            var movieAmount = $("#movie_amount_2").val().trim()

            var interest = {
                "id": $(".movies-cost").attr("data-id"),
                "estCost": movieAmount
            };
            updateCost(interest);
        }
        if ($("#concert-btn-2").is(":checked")) {
            var concertAmount = $("#concert_amount_2").val().trim()

            var interest = {
                "id": $(".concerts-cost").attr("data-id"),
                "estCost": concertAmount
            };
            updateCost(interest);

        }
        if ($("#shopping-btn-2").is(":checked")) {
            var shopAmount = $("#shopping_amount_2").val().trim()

            var interest = {
                "id": $(".shopping-cost").attr("data-id"),
                "estCost": shopAmount
            };
            updateCost(interest);

        }
        if ($("#dinner-btn-2").is(":checked")) {
            var dinnerAmount = $("#dinner_amount_2").val().trim();

            var interest = {
                "id": $(".eating-cost").attr("data-id"),
                "estCost": dinnerAmount
            };
            updateCost(interest);

        }
        if ($("#drinks-btn-2").is(":checked")) {
            var drinksAmount = $("#drinks_amount_2").val().trim();

            var interest = {
                "id": $(".drinks-cost").attr("data-id"),
                "estCost": drinksAmount
            };
            updateCost(interest);

        }
        if ($("#outing-btn-2").is(":checked")) {
            var outingAmount = $("#outing_amount_2").val().trim();

            var interest = {
                "id": $(".outing-cost").attr("data-id"),
                "estCost": outingAmount
            };
            updateCost(interest);

        }
    })



})