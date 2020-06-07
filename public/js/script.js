$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var icecream_id = $(this).children(".icecream_id").val();
      console.log(icecream_id);
      $.ajax ({
        method: "PUT",
        url: "/icecream/" + icecream_id
      }).then(function(data) {
        // reload page to display devoured icecream 
        location.reload();
      });
  
    });
  });