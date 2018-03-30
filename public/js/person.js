$(document).ready(function() {

  var firstName = $("#first_name");
  var lastName = $("#last_name");
  var email = $("#email");
  var password = $("#password");
  var budget = $("#budget");
  var bank = 0;
  var newPerson;

  $("#signup_submit").on("click", function() {
        newPerson = {
        firstName: firstName
        .val()
        .trim(),
        lastName: lastName
        .val()
        .trim(),
        email: email
        .val(),
        password: password
        .val(),
        weeklyFunds: 0,
        bank: bank
      }
      console.log(newPerson);
  })

  $("#picSubmit").on("click", function() {
      newPerson.bank = $(".profile-pic").attr("src");
      console.log(newPerson);
  })

  $("#budgetClick").on("click", function() {
      newPerson.weeklyFunds = budget.val();
      console.log(newPerson);
      var person = newPerson;
      createPerson(person);
  })

  function createPerson(personData) {
      $.post("/api/signup", personData)
      .then()
  }
})