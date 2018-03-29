$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var firstName = $("#first_name");
  var lastName = $("#last_name");
  var email = $("#email");
  var password = $("#password");
  var budget = $("#budget");
  var bank = 0;
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#signupForm", handleAuthorFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    console.log("clicked");
    // Don't do anything if the name fields hasn't been filled out
    if (!firstName.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
   
  var newAuthor = {
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
    weeklyFunds: budget.val(),
    bank: bank
  };
  console.log(newAuthor)
  upsertAuthor(newAuthor);
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    var newTr = $("<tr>");
    newTr.data("user", authorData);
    newTr.append("<td>" + authorData.firstName + "</td>");
    newTr.append("<td>" + authorData.weeklyFunds + "</td>");
    newTr.append("<td>" + authorData.bank + "</td>");
    newTr.append("<td> " + authorData.Posts.length + "</td>");
    newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Interests</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Interest</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete User</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      firstName.val("");
      lastName.val("");
      email.val("");
      password.val("");
      budget.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a User before you can create a Interest.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  }
});
