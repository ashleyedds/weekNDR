$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our bigBudgets
    var blogContainer = $(".blog-container");
    var bigBudgetCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleBigBudgetDelete);
    $(document).on("click", "button.edit", handleBigBudgetEdit);
    // Variable to hold our bigBudgets
    var bigBudgets;
  
    // The code below handles the case where we want to get blog bigBudgets for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var authorId;
    if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
      getBigBudgets(authorId);
    }
    // If there's no authorId we just get all bigBudgets as usual
    else {
      getBigBudgets();
    }
  
  
    // This function grabs bigBudgets from the database and updates the view
    function getBigBudgets(author) {
      authorId = author || "";
      if (authorId) {
        authorId = "/?author_id=" + authorId;
      }
      $.get("/api/bigBudgets" + authorId, function(data) {
        console.log("BigBudgets", data);
        bigBudgets = data;
        if (!bigBudgets || !bigBudgets.length) {
          displayEmpty(author);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete bigBudgets
    function deleteBigBudget(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/bigBudgets/" + id
      })
        .then(function() {
          getBigBudgets(bigBudgetCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed bigBudget HTML inside blogContainer
    function initializeRows() {
      blogContainer.empty();
      var bigBudgetsToAdd = [];
      for (var i = 0; i < bigBudgets.length; i++) {
        bigBudgetsToAdd.push(createNewRow(bigBudgets[i]));
      }
      blogContainer.append(bigBudgetsToAdd);
    }
  
    // This function constructs a bigBudget's HTML
    function createNewRow(bigBudget) {
      var formattedDate = new Date(bigBudget.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY a");
      var newBigBudgetPanel = $("<div>");
      newBigBudgetPanel.addClass("panel panel-default");
      var newBigBudgetPanelHeading = $("<div>");
      newBigBudgetPanelHeading.addClass("panel-heading");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newBigBudgetTitle = $("<h2>");
      var newBigBudgetDate = $("<small>");
      var newBigBudgetAuthor = $("<h5>");
      newBigBudgetAuthor.text("Written by: " + bigBudget.Author.firstName);
      newBigBudgetAuthor.css({
        float: "right",
        color: "blue",
        "margin-top":
        "-10px"
      });
      var newBigBudgetPanelBody = $("<div>");
      newBigBudgetPanelBody.addClass("panel-body");
      var newBigBudgetBody = $("<p>");
      newBigBudgetTitle.text(bigBudget.title + " ");
      newBigBudgetBody.text(bigBudget.body);
      newBigBudgetDate.text(formattedDate);
      newBigBudgetTitle.append(newBigBudgetDate);
      newBigBudgetPanelHeading.append(deleteBtn);
      newBigBudgetPanelHeading.append(editBtn);
      newBigBudgetPanelHeading.append(newBigBudgetTitle);
      newBigBudgetPanelHeading.append(newBigBudgetAuthor);
      newBigBudgetPanelBody.append(newBigBudgetBody);
      newBigBudgetPanel.append(newBigBudgetPanelHeading);
      newBigBudgetPanel.append(newBigBudgetPanelBody);
      newBigBudgetPanel.data("bigBudget", bigBudget);
      return newBigBudgetPanel;
    }
  
    // This function figures out which bigBudget we want to delete and then calls deleteBigBudget
    function handleBigBudgetDelete() {
      var currentBigBudget = $(this)
        .parent()
        .parent()
        .data("bigBudget");
      deleteBigBudget(currentBigBudget.id);
    }
  
    // This function figures out which bigBudget we want to edit and takes it to the appropriate url
    function handleBigBudgetEdit() {
      var currentBigBudget = $(this)
        .parent()
        .parent()
        .data("bigBudget");
      window.location.href = "/cms?bigBudget_id=" + currentBigBudget.id;
    }
  
    // This function displays a messgae when there are no bigBudgets
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      blogContainer.empty();
      var messageh2 = $("<h2>");
      messageh2.css({ "text-align": "center", "margin-top": "50px" });
      messageh2.html("No bigBudgets yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      blogContainer.append(messageh2);
    }
  
  });
  