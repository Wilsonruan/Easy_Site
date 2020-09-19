$(document).ready(function() {
  var toMainPage = $("form")
  var userNameInput = $("input#fullName");

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  toMainPage.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      firstName: userNameInput.val().trim(),
    };
    towardMainPage(userData.firstName);
  })

  function towardMainPage (firstName) {
    $.post("/api/username", {
      firstName: firstName
    })
      window.location.replace("/mainpage");
  }
});
