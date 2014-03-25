$(document).ready(function() {
  $('#strava').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url : '/strava',
      type : 'get'
    }).done(function(serverdata){
      debugger;
      $('#strava-data').html("Your name is: "+ serverdata.firstname + " <br> You Have " + serverdata.friend_count + " Friends!")
    }).fail(function(){console.log('fail')})
  })  
});
