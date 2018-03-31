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

    if (url === "http://localhost:8080/dashboard") {
        getInterestList();
        console.log("this worked")
    }

    function getInterestList() {
        $.get("/api/get_interests", function (data) {
            console.log("api worked" + data[0].title);
            // window.location.href = "/dashtest";
            getInterests(data)
            getBarChart(data);
            displayInterestBudget(data);
            getBigBudget(data);
        });

    }

    function getBigBudget(data) {
        var r = data[3];
        console.log("Budget: " + r);
        var bigCost = r.estCost;
        console.log("Cost: " + bigCost);
        $("#bigCost").html("$" + bigCost);
    }

    function displayInterestBudget(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === "Movies") {
                $(".movie-bucket").html("$" + data[i].estCost);
                $(".movies-cost").attr("data-id", data[i].id);
            } else if (data[i].title === "Concerts") {
                $(".music-bucket").html("$" + data[i].estCost);
                $(".concerts-cost").attr("data-id", data[i].id);
            } else if (data[i].title === "Shopping") {
                $(".shopping-bucket").html("$" + data[i].estCost);
                $(".shopping-cost").attr("data-id", data[i].id);
            } else if (data[i].title === "Eating Out") {
                $(".food-bucket").html("$" + data[i].estCost);
                $(".eating-cost").attr("data-id", data[i].id);
            } else if (data[i].title === "Drinks") {
                $(".drinks-bucket").html("$" + data[i].estCost);
                $(".drinks-cost").attr("data-id", data[i].id);
            } else if (data[i].title === "Outings") {
                $(".outing-bucket").html("$" + data[i].estCost);
                $(".outing-cost").attr("data-id", data[i].id);
            }
        }
    }

    function getInterests(data) {
        console.log(data);
        console.log("Something Happened")
        var dataPlotly = [{
            values: [],
            labels: [],
            type: 'pie',
            marker: {
                colors: ['rgb(54, 50, 153)', 'rgb(17, 123, 153)', 'rgb(37, 180, 167)', 'rgb(134, 191, 118)', 'rgb(249, 210, 41)', 'rgb(244, 236, 21)']
            }
        }];


        for (let i = 0; i < data.length -1; i++) {

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

        for (let i = 0; i < res.length -1; i++) {

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

    $("#actualCost").on("click", function () {
        if ($("#movie-btn").is(":checked")) {

            var movieAmount = $("#movie_amount").val().trim()

            var interest = {
                "id": $(".movies-cost").attr("data-id"),
                "actualCost": movieAmount
            };
            addActualCost(interest);
        }
        if ($("#concert-btn").is(":checked")) {
            var concertAmount = $("#concert_amount").val().trim()

            var interest = {
                "id": $(".concerts-cost").attr("data-id"),
                "actualCost": concertAmount
            };
            addActualCost(interest);

        }
        if ($("#shopping-btn").is(":checked")) {
            var shopAmount = $("#shopping_amount").val().trim()

            var interest = {
                "id": $(".shopping-cost").attr("data-id"),
                "actualCost": shopAmount
            };
            addActualCost(interest);

        }
        if ($("#dinner-btn").is(":checked")) {
            var dinnerAmount = $("#dinner_amount").val().trim();

            var interest = {
                "id": $(".eating-cost").attr("data-id"),
                "actualCost": dinnerAmount
            };
            addActualCost(interest);

        }
        if ($("#drinks-btn").is(":checked")) {
            var drinksAmount = $("#drinks_amount").val().trim();

            var interest = {
                "id": $(".drinks-cost").attr("data-id"),
                "actualCost": drinksAmount
            };
            addActualCost(interest);

        }
        if ($("#outing-btn").is(":checked")) {
            var outingAmount = $("#outing_amount").val().trim();

            var interest = {
                "id": $(".outing-cost").attr("data-id"),
                "actualCost": outingAmount
            };
            addActualCost(interest);

        }
    })

    function addActualCost(interests) {
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



})