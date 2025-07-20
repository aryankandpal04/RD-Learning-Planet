document.addEventListener("DOMContentLoaded", function () {
  function toggleSubjectCheckboxes() {
    var classSelect = document.getElementById("class");
    var selectedClass = classSelect.options[classSelect.selectedIndex].value;
    var checkboxesDiv = document.getElementById("subjectCheckboxes");
    var mathLabel = document.getElementById("mathLabel");
    var physicsLabel = document.getElementById("physicsLabel");
    var chemistryLabel = document.getElementById("chemistryLabel");
    var scienceLabel = document.getElementById("scienceLabel");
    var otherSection = document.getElementById("otherSection");

    if (selectedClass === "9th" || selectedClass === "10th") {
      checkboxesDiv.style.display = "block";
      mathLabel.style.display = "block";
      scienceLabel.style.display = "block";
      physicsLabel.style.display = "none";
      chemistryLabel.style.display = "none";
      otherSection.style.display = "none";
    } else if (selectedClass === "11th" || selectedClass === "12th") {
      checkboxesDiv.style.display = "block";
      mathLabel.style.display = "block";
      physicsLabel.style.display = "block";
      chemistryLabel.style.display = "block";
      scienceLabel.style.display = "none";
      otherSection.style.display = "none";
    } else if (selectedClass === "5th" || selectedClass === "8th") {
      checkboxesDiv.style.display = "none";
      otherSection.style.display = "block";
    } else {
      checkboxesDiv.style.display = "none";
      otherSection.style.display = "none";
    }
  }

  document.getElementById("class").addEventListener("change", toggleSubjectCheckboxes);
  toggleSubjectCheckboxes();

  function validateForm() {
    var studentNameInput = document.getElementById("username");
    var guardianNameInput = document.getElementById("guardianname");
    var addressInput = document.getElementById("address");
    var contactNumberInput = document.getElementById("contactno");

    if (studentNameInput.value.trim() === "") {
      return "Please enter student name.";
    }
    if (guardianNameInput.value.trim() === "") {
      return "Please enter guardian's name.";
    }
    if (addressInput.value.trim() === "") {
      return "Please enter address.";
    }
    if (contactNumberInput.value.trim() === "") {
      return "Please enter contact number.";
    }
    return null;
  }

  // Notyf toast setup
  var notyf = window.Notyf ? new Notyf() : null;

  var form = document.getElementById("registration-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      var error = validateForm();
      if (error) {
        event.preventDefault();
        if (notyf) notyf.error(error);
        else alert(error);
      } else {
        event.preventDefault(); // Remove this if you want real submission
        if (notyf) notyf.success("Registration submitted successfully!");
        else alert("Registration submitted successfully!");
        form.reset();
        toggleSubjectCheckboxes();
      }
    });
  }

  document.querySelector("[name='reset']").addEventListener("click", function () {
    form.reset();
    toggleSubjectCheckboxes();
  });
});