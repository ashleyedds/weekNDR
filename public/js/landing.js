$(document).ready(function() {

    var userId;

    var interests = [];

    $("#budgetClick").on("click", function() {
        setTimeout(function() {
          $.get("/api/user_data").then(function(data) {
            userId = data.id;
            console.log(data.id);
         });
       }, 2000);
    });

    

    $("#interestsClick").on("click", function(){
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

    $("#bigClick").on("click", function() {
        if ($("#vacation-btn").is(":checked")) {
            interests.push({
                "Title": "Vacation",
                "EstCost": "50"
            })
        }

        if ($("#car-btn").is(":checked")) {
            interests.push({
                "Title": "Car",
                "EstCost": "50"
            })
        }

        if ($("#ring-btn").is(":checked")) {
            interests.push({
                "Tilte": "Big Purchase",
                "EstCost": "50"
            })
        }

        var myInterests = interests;
        console.log(interests)
        // getInterests(myInterests)
        getInterestList();
        
    })

    function addInterests(interests) {
        $.post("/api/interests", interests, function() {
            // getInterests(interests);
        })
      }


})