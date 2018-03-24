

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  var url = window.location.search;
  var interestId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?interest_id=") !== -1) {
    interestId = url.split("=")[1];
    getInterestData(interestId);
  }

  // Getting jQuery references to the post body, title, form, and category select
  var descInput = $("#description");
  var titleInput = $("#title");
  var interestForm = $("#interest");
  var estCost = $("#estCost");
  // Adding an event listener for when the form is submitted
  $(interestForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a title
    if (!titleInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newInterest = {
      title: titleInput.val().trim(),
      description: descInput.val().trim(),
      estCost: estCost.val()
    };

    console.log(newInterest);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newInterest.id = postId;
      updateInterest(interestId);
    }
    else {
      submitInterest(interestId);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitInterest(Interest) {
    $.post("/api/interests/", Interest, function() {
      window.location.href = "/members";
    });
  }

  // Gets post data for a post if we're editing
  function getInterestData(id) {
    $.get("/api/interests/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        descInput.val(data.body);
        estCost.val(data.body);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/blog";
      });
  }
});
