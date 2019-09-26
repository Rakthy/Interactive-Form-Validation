$("#name").focus();

$("#other-title").hide();

//display input for other option//
$("#title").change(() => {
  if ($("#title").val() === "other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
});

$("#design option")
  .eq(0)
  .hide();

$("#color").hide();

// $("#color").prepend("<option>Please select a T-shirt theme</option>");

$("#design").change(() => {
  if ($("#design").val() === "js puns") {
    $("#color").show();
    $("#color option")
      .eq(0)
      .show();
    $("#color option")
      .eq(1)
      .show();
    $("#color option")
      .eq(2)
      .show();
    $("#color option")
      .eq(3)
      .hide();
    $("#color option")
      .eq(4)
      .hide();
    $("#color option")
      .eq(5)
      .hide();
  } else if ($("#design").val() === "heart js") {
    $("#color").show();
    $("#color option")
      .eq(5)
      .show();
    $("#color option")
      .eq(4)
      .show();
    $("#color option")
      .eq(3)
      .show();
    $("#color option")
      .eq(2)
      .hide();
    $("#color option")
      .eq(1)
      .hide();
    $("#color option")
      .eq(0)
      .hide();
  }
});

// $('#color option').eq(5).hide();
