$(document).ready(function() {

    var interests = [];

    $("#budgetClick").on("click", function() {
        var budget = $("#budget").val().trim();
        console.log(budget);
    })

    $("#interestsClick").on("click", function(){
        if ($("#movie-btn").is(":checked")) {
            interests.push("Movies");
        }
        if ($("#concert-btn").is(":checked")) {
            interests.push("Concerts");
        }
        if ($("#shopping-btn").is(":checked")) {
            interests.push("Shopping");
        }
        if ($("#dinner-btn").is(":checked")) {
            interests.push("Eating Out");
        }
        if ($("#drinks-btn").is(":checked")) {
            interests.push("Drinks");
        }
        if ($("#outing-btn").is(":checked")) {
            interests.push("Outings");
        }
        console.log(interests);
    })
})