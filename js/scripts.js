$(document).ready(function() {
  var age = parseInt(prompt("Please enter your age..."));
  console.log(age);
  if (age >= 18) {
    $("#oldEnough").show();
  } else {
    location.replace("http://www.cnn.com/2016/10/21/health/too-young-to-vote-teens-hopeful-after-presidential-campaign/index.html");
  };
});
