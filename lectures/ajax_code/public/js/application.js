$(document).ready(function() {

$('form.new-trip').on('submit', function(e){
    e.preventDefault()

     console.log('submit')
     form_data = $('form.new-trip').serialize();
     console.log(form_data)
     $.ajax({
      type:  this.method,
      url: this.action,
      data: form_data
     }).done(function(server_data){
      console.log('done '+ server_data)
       $('.trips').append(server_data)
     }).fail(function(jqHXR, textStatus, errorThrown){
      console.log('fail ' + errorThrown)
     })


  })

});













// // window.ready(function(){
// document.getElementById('new-trip').onSubmit = function(event){
//     console.log('submit')
// // pj_reqest()

// }
// // })

// var pj_reqest = function(){
//  var xhreq = createxmlhttprequest();
//    xhreq.open("post", "/trips", true);
//    xhReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//    xhreq.onreadystatechange = function() {
//      if (xhreq.readystate != 4) { return; }
//      var serverresponse = xhreq.responsetext;
//     console.log(serverresponse)
//    };
//   xhreq.send("this is data");
// }
