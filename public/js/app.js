$(document).ready(function () {

    //Materialize initalization
    $('.slider').slider({
        'interval': 4000
    });

    $('.modal').modal();

    $(".button-collapse").sideNav();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
      });

      $('.sidenav').sidenav();

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
    $(".file-upload").on('change', function () {
        readURL(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });

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

    //Budgeting 
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

});