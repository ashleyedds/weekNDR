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
          for (let i = 0; i < data.length; i++) {
              
          
        $("#interestsDiv").append("<h3>" + data[i].title + " -  $" + data[i].estCost + "<br>" );
         }
        })
      }
})