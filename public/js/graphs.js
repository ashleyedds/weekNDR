$(document).ready(function() {

    var interests = [];

    $("#budgetClick").on("click", function() {
        var budget = $("#budget").val().trim();
        console.log(budget);
    })

    $("#interestsClick").on("click", function(){
        if ($("#movie-btn").is(":checked")) {
            
            var movieAmount = $("#movie_amount").val().trim()
            interests.push({
                "Title": "Movies",
                "EstCost": movieAmount
            });
            console.log(interests);
        }
        if ($("#concert-btn").is(":checked")) {
            var concertAmount = $("#concert_amount").val().trim()
            interests.push({
                "Title": "Concerts",
                "EstCost": concertAmount
            });
        }
        if ($("#shopping-btn").is(":checked")) {
            var shopAmount = $("#shopping_amount").val().trim()
            interests.push({
                "Title": "Shopping",
                "EstCost": shopAmount
            });
        }
        if ($("#dinner-btn").is(":checked")) {
            var dinnerAmount = $("#dinner_amount").val().trim();
            interests.push({
                "Title": "Eating Out",
                "EstCost": dinnerAmount
            });
        }
        if ($("#drinks-btn").is(":checked")) {
            var drinksAmount = $("#drinks_amount").val().trim();
            interests.push({
                "Title": "Drinks",
                "EstCost": drinksAmount
            });
        }
        if ($("#outing-btn").is(":checked")) {
            var outingAmount = $("#outing_amount").val().trim();
            interests.push({
                "Title": "Outings",
                "EstCost": outingAmount
            });
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
        getInterests(myInterests)
        
    })

    function addInterests(interests) {
        $.post("/api/interests", {user: interests}, function() {
            getInterests(interests);
        })
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


  for (let i = 0; i < interests.length; i++) {
      
        var cost = parseInt(data[i].EstCost);
        var title = data[i].Title;

 
            dataPlotly[0].values.push(cost);
            dataPlotly[0].labels.push(title);
                if (i === interests.length -1) {
                    Plotly.newPlot('myDiv', dataPlotly);

                    console.log(dataPlotly); 
                }
            }
      }
})