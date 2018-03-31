$(document).ready(function() {

    var url = window.location.href;
    console.log(url);
    var userId;

    $.get("/api/user_data").then(function(data) {
        $(".member-name").text(data.name);
        $(".dashboard-desktop-profile").attr("src", data.pic);
        $(".dashboard-profile").attr("src", data.pic);
        userId = data.Id;
      });

    $("#logout-button").on("click", function() {
        $.get("/api/logout").then(function() {
            console.log("you are logged out");
        })
    })  

    if (url === "http://localhost:8080/dashboard") {
        getInterestList();
        console.log("this worked")
    }

    function getInterestList() {
        $.get("/api/get_interests", function(data) {
            console.log("api worked" + data[0].title);
            // window.location.href = "/dashtest";
            getInterests(data)
            getBarChart(data);
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
                        if (i === data.length -2) {
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
          
          var layout = {barmode: 'group'};

          for (let i = 0; i < res.length -1; i++) {
      
            var cost = parseInt(res[i].estCost);
            var title = res[i].title;

 
            trace1.x.push(title);
            trace2.x.push(title);
            trace1.y.push(cost);
            trace2.y.push(cost - 4)
                if (i === res.length -2) {
                    Plotly.newPlot('myDiv2', data, layout);

                }
            }
          
      }

})