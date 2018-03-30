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

    //   function getInterestList() {
    //     $.get("/api/interests", function(data) {
    //         console.log("api worked" + data[0].title);
    //         window.location.href = "/dashtest";
    //         getInterests(data)
    //     });

    //   }

    //   function getInterests(data) {
    //       console.log(data);
    //       console.log("Something Happened")
    //     var dataPlotly = [{
    //         values: [],
    //         labels: [],
    //         type: 'pie',
    //         marker: {
    //             colors: ['rgb(54, 50, 153)', 'rgb(17, 123, 153)', 'rgb(37, 180, 167)', 'rgb(134, 191, 118)', 'rgb(249, 210, 41)', 'rgb(244, 236, 21)']
    //         }
    //     }];


    //     for (let i = 0; i < data.length; i++) {
            
    //             var cost = parseInt(data[i].estCost);
    //             var title = data[i].title;

        
    //                 dataPlotly[0].values.push(cost);
    //                 dataPlotly[0].labels.push(title);
    //                     if (i === data.length -1) {
    //                         Plotly.newPlot('myDiv3', dataPlotly);

    //                         console.log(dataPlotly); 
    //                     }
    //                 }
    //   }

    //   function getBarChart(res) {
    //     var trace1 = {
    //         x: [],
    //         y: [],
    //         name: 'Estimated Cost',
    //         type: 'bar'
    //       };
          
    //       var trace2 = {
    //         x: [],
    //         y: [],
    //         name: 'Actual Cost',
    //         type: 'bar'
    //       };
          
    //       var data = [trace1, trace2];
          
    //       var layout = {barmode: 'group'};

    //       for (let i = 0; i < interests.length; i++) {
      
    //         var cost = parseInt(res[i].EstCost);
    //         var title = res[i].Title;

 
    //         trace1.x.push(title);
    //         trace2.x.push(title);
    //         trace1.y.push(cost);
    //         trace2.y.push(cost - 4)
    //             if (i === interests.length -1) {
    //                 Plotly.newPlot('myDiv2', data, layout);

    //             }
    //         }
          
    //   }
})