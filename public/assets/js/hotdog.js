// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    // var eatenStatus = $(this).data("eaten")
    var newStatus = {
      eaten: $(this).data("eaten")
    };
    console.log(newStatus)

    // Send the PUT request.
    $.ajax("/api/hotdogs/" + id, {
      type: "PUT",
      data: newStatus
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("Clicked")
    event.preventDefault();
    var newDog = {
      kindof: $("#dog").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/hotdogs", {
      type: "POST",
      data: newDog
    }).then(
      function() {
        console.log("created new dog");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});