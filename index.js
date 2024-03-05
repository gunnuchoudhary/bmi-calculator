const buttons = document.querySelectorAll("button");
document.getElementById("innerpart").style.display = "none";
document.getElementById("select").style.display = "block";

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("select").style.display = "none";

    if (button.id === "USunits") {
      document.getElementById("innerpart").style.display = "block";
      document.getElementById("USunits").style.backgroundColor = "#e6b0a9";
      document.getElementById("MetricUnits").style.backgroundColor = "white";
      document.getElementById("note").style.display = "block";
      document.getElementById("feet").style.display = "inline-block";
      document.getElementById("inch").style.display = "inline-block";
      document.getElementById("cm").style.display = "none";

      document.getElementById("weight").placeholder = "pound";
    } else if (button.id === "MetricUnits") {
      document.getElementById("innerpart").style.display = "block";
      document.getElementById("USunits").style.backgroundColor = "white";
      document.getElementById("MetricUnits").style.backgroundColor = "#e6b0a9";
      document.getElementById("note").style.display = "none";
      document.getElementById("cm").style.display = "inline-block";
      document.getElementById("feet").style.display = "none";
      document.getElementById("inch").style.display = "none";
      document.getElementById("weight").placeholder = "kg";
    }
  });
});

document.getElementById("bmiForm").onsubmit = function () {
  calculateBMI();
  return false;
};

function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var cm = parseInt(document.getElementById("cm").value) || 0;
  var feet = parseInt(document.getElementById("feet").value) || 0;
  var inch = parseInt(document.getElementById("inch").value) || 0;

  // Convert cm to inches
  var inchesFromCm = cm / 2.54;
  var totalInches = feet * 12 + inch + inchesFromCm; // Convert feet and inches to total inches

  var bmi = (weight / (totalInches * totalInches)) * 703; // BMI calculation using US units

  var result = "Your BMI is: " + bmi.toFixed(2);

  if (bmi < 18.5) {
    result += " (Underweight)";
  } else if (bmi >= 18.5 && bmi < 25) {
    result += " (Normal weight)";
  } else if (bmi >= 25 && bmi < 30) {
    result += " (Overweight)";
  } else {
    result += " (Obese)";
  }

  document.getElementById("result").innerHTML = result;
}
