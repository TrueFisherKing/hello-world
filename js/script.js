$(document).ready(function() {
  $(".googleFormRegister").validate({
    submitHandler: function(form) {
      $(".confirmationBox").show();
      $(".googleFormRegister").hide();
            form.submit();
    }
  });
  $(".googleFormRegisterShort").validate({
    submitHandler: function(form) {
      $(".confirmationBoxShort").show();
      $(".googleFormRegisterShort").hide();
      form.submit();
    }
  });
  $("#register").click(function() {
    gtag_report_conversion();
  });
});
