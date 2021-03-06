$(document).ready(function () {

    //Materialize initalization
    $('.slider').slider({
        'interval': 4000
    });

    $('.modal').modal();

    $(".button-collapse").sideNav();

    $('.carousel.carousel-slider').carousel({
        numVisible: 0
    });

    $(".swipe-left").click(function(){
        $(".carousel.carousel-slider").carousel("prev");
    });

    $(".swipe-right").click(function(){
        $(".carousel.carousel-slider").carousel("next");
    });


    //Upload profile picture
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    //Profile picture upload

    $("#profile-one").on("click", function () {
        $(".profile-pic").attr("src", "images/profile1.png");
    });
    $("#profile-two").on("click", function () {
        $(".profile-pic").attr("src", "images/profile2.png");
    });
    $("#profile-three").on("click", function () {
        $(".profile-pic").attr("src", "images/profile3.png");
    });
    $("#profile-four").on("click", function () {
        $(".profile-pic").attr("src", "images/profile4.png");
    });
    $("#profile-five").on("click", function () {
        $(".profile-pic").attr("src", "images/profile5.png");
    });
    $("#profile-six").on("click", function () {
        $(".profile-pic").attr("src", "images/profile6.png");
    });
    $("#profile-seven").on("click", function () {
        $(".profile-pic").attr("src", "images/profile7.png");
    });
    $("#profile-eight").on("click", function () {
        $(".profile-pic").attr("src", "images/profile8.png");
    });
    $("#profile-nine").on("click", function () {
        $(".profile-pic").attr("src", "images/profile9.png");
    });

    //Budgeting Landing
    $("#movie-btn").on("click", function () {
        $("#movie_amount").prop("disabled", false);
    });
    $("#concert-btn").on("click", function () {
        $("#concert_amount").prop("disabled", false);
    });
    $("#shopping-btn").on("click", function () {
        $("#shopping_amount").prop("disabled", false);
    });
    $("#dinner-btn").on("click", function () {
        $("#dinner_amount").prop("disabled", false);
    });
    $("#drinks-btn").on("click", function () {
        $("#drinks_amount").prop("disabled", false);
    });
    $("#outing-btn").on("click", function () {
        $("#outing_amount").prop("disabled", false);
    });

    //Budgeting Dashboard
    $("#movie-btn-2").on("click", function () {
        $("#movie_amount_2").prop("disabled", false);
    });
    $("#concert-btn-2").on("click", function () {
        $("#concert_amount_2").prop("disabled", false);
    });
    $("#shopping-btn-2").on("click", function () {
        $("#shopping_amount_2").prop("disabled", false);
    });
    $("#dinner-btn-2").on("click", function () {
        $("#dinner_amount_2").prop("disabled", false);
    });
    $("#drinks-btn-2").on("click", function () {
        $("#drinks_amount_2").prop("disabled", false);
    });
    $("#outing-btn-2").on("click", function () {
        $("#outing_amount_2").prop("disabled", false);
    });

    //Big Expenses
    $("#vacation-btn").on("click", function () {
        $("#big_amount").prop("disabled", false);
        var x = document.getElementById("car");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        var x = document.getElementById("ring");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
    $("#car-btn").on("click", function () {
        $("#big_amount").prop("disabled", false);
        var x = document.getElementById("vacation");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        var x = document.getElementById("ring");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
    $("#ring-btn").on("click", function () {
        $("#big_amount").prop("disabled", false);
        var x = document.getElementById("car");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        var x = document.getElementById("vacation");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });


});