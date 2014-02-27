$.validator.setDefaults({
  submitHandler: function() { alert("submitted!"); }
});

$(function(){
  $('form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      user: {
        required: true,
        minlength: 5
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      phone: {
        required: true,
        phoneUS: true
      }
    },
    messages: {
      email: "Yo give me your real email.",
      phone: "Sorry Quentin just U. S. phone numbers.",
      user: "Is your name really that short... Tim?",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be 5 characters."
      },
      confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be 5 characters.",
        equalTo: "This doesn't equal the password entered above."
      }
    }
  });

});