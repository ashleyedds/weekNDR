$(document).ready(function () {

    var userId;
    var budget;
    var interests = [];

    $("#budgetClick").on("click", function () {
        setTimeout(function () {
            $.get("/api/user_data").then(function (data) {
                userId = data.id;
                // budget = data.budget
                console.log(data.id);
                putBudget();
            });
        }, 2000);
    });

    function putBudget() {
        $.get("/api/user_data").then(function (data) {
            budget = data.budget
            $(".weekly-budget").text(budget);
        });
        
    }

    $("#movie_amount").change(function() {
        var amount = $("#movie_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
        
        
    })

    $("#concert_amount").change(function() {
        var amount = $("#concert_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
    })

    $("#shopping_amount").change(function() {
        var amount = $("#shopping_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
    })

    $("#dinner_amount").change(function() {
        var amount = $("#dinner_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
    })

    $("#drinks_amount").change(function() {
        var amount = $("#drinks_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
    })

    $("#outing_amount").change(function() {
        var amount = $("#outing_amount").val().trim();
        amount = parseInt(budget) - parseInt(amount);
        $(".weekly-budget").text(amount);
        budget = amount;
    })

    $("#interestsClick").on("click", function () {
        if ($("#movie-btn").is(":checked")) {

            var movieAmount = $("#movie_amount").val().trim()

            var interest = {
                "title": "Movies",
                "estCost": movieAmount,
                "PersonId": userId
            };
            addInterests(interest);
        }
        if ($("#concert-btn").is(":checked")) {
            var concertAmount = $("#concert_amount").val().trim()

            var interest = {
                "title": "Concerts",
                "estCost": concertAmount,
                "PersonId": userId
            }
            addInterests(interest)
        }
        if ($("#shopping-btn").is(":checked")) {
            var shopAmount = $("#shopping_amount").val().trim()

            var interest = {
                "title": "Shopping",
                "estCost": shopAmount,
                "PersonId": userId
            }

            addInterests(interest)
        }
        if ($("#dinner-btn").is(":checked")) {
            var dinnerAmount = $("#dinner_amount").val().trim();

            var interest = {
                "title": "Eating Out",
                "estCost": dinnerAmount,
                "PersonId": userId
            }

            addInterests(interest)
        }
        if ($("#drinks-btn").is(":checked")) {
            var drinksAmount = $("#drinks_amount").val().trim();

            var interest = {
                "title": "Drinks",
                "estCost": drinksAmount,
                "PersonId": userId
            }

            addInterests(interest)
        }
        if ($("#outing-btn").is(":checked")) {
            var outingAmount = $("#outing_amount").val().trim();

            var interest = {
                "title": "Outings",
                "estCost": outingAmount,
                "PersonId": userId
            }
            addInterests(interest)
        }
        console.log(interests);
    })

    $("#bigClick").on("click", function () {
        if ($("#vacation-btn").is(":checked")) {
            var vacationAmount = $("#big_amount").val().trim();

            var interest = {
                "title": "Vacation",
                "estCost": vacationAmount,
                "PersonId": userId
            }
            addInterests(interest)
        }
        if ($("#car-btn").is(":checked")) {
            var carAmount = $("#big_amount").val().trim();

            var interest = {
                "title": "Car",
                "estCost": carAmount,
                "PersonId": userId
            }
            addInterests(interest)
        }
        if ($("#ring-btn").is(":checked")) {
            var bigAmount = $("#big_amount").val().trim();

            var interest = {
                "title": "BigAmt",
                "estCost": bigAmount,
                "PersonId": userId
            }
            addInterests(interest)
        }


        var myInterests = interests;
        console.log(interests)
        // getInterests(myInterests)
        getInterestList();

    })

    function addInterests(interests) {
        $.post("/api/interests", interests, function () {
            // getInterests(interests);
        })
    }


})