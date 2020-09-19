$(document).ready(function() {
    $.get('/api/userinfo_data').then(function(data) {
      console.log(data)
     $(".member-firstName").text(data.firstName);
    });
  });