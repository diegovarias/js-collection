var dataType = document.getElementById("data-type");
var validateButton = document.getElementById("validate-button");
var data = document.getElementById("data");

function validate(regexp) {
  var result = regexp.test(data.value);
  if (result == true) {
    alert("Correct format ✅");
  } else {
    alert("Incorrect format ❌");
  }
}

validateButton.onclick = function () {
  if (dataType.value == "dui") {
    validate(/^[0-9]{8}-[0-9]$/);
  } else if (dataType.value == "nit") {
    validate(/^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/);
  } else if (dataType.value == "telefono") {
    validate(/^[267][0-9]{3}-[0-9]{4}$/);
  } else if (dataType.value == "carnet") {
    validate(/^[A-Z]{2}[0-9]{6}$/i);
  }
}
