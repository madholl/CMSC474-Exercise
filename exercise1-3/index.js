$(document).ready(function(){        
  $("#go").click(function() {     
      $("#nameform").submit(function (e) {
        e.preventDefault();
        addFirstLast();
      }); // Submit the form
  });
  return false;
});

function addFirstLast() {
  $('#jumbotron').text(document.getElementById('fname').value + " " + document.getElementById('lname').value);
}