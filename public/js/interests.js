$(document).ready(function() {

    $("#interestBtn").on("click", function() {
        getInterests();
    })

    $("#submitBtn").on("click", function() {
        var userInterests = {
            title: $("#title").val().trim(),
            estCost: $("#estCost").val().trim()
          
        }
    
        addInterests(userInterests);
    
      })
    
      function addInterests(userInterests) {
        $.post("/api/interests", {interests: userInterests}, function() {
            getInterests();
        })
      }

      function getInterests() {

      $("#forms").empty();

      

      $.get("/api/interests").then(function(data) {
            var dataPlotly = [{
                    values: [],
                    labels: [],
                    type: 'pie',
                    marker: {
                        colors: ['rgb(54, 50, 153)', 'rgb(17, 123, 153)', 'rgb(37, 180, 167)', 'rgb(134, 191, 118)', 'rgb(249, 210, 41)', 'rgb(244, 236, 21)']
                    }
                }];


          for (let i = 0; i < data.length; i++) {
              
        var cost = parseInt(data[i].estCost);
        var title = data[i].title;
        console.log(cost);
        $("#interestsDiv").append("<h3>" + data[i].title + " -  $" + data[i].estCost + "<br>" );
         
            dataPlotly[0].values.push(cost);
            dataPlotly[0].labels.push(title);
                if (i === data.length -1) {
                    Plotly.newPlot('myDiv', dataPlotly);

                    console.log(dataPlotly); 
                }
            }
        })

        
      

        
    }
    //   var dataPlotly = [{
    //         values: [10, 50],
    //         labels: ["Movies", "Drinks"],
    //         type: 'pie'
    //     }];
      
    //   Plotly.newPlot('myDiv', dataPlotly);

    //   console.log(dataPlotly);

    
})