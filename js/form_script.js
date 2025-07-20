document.addEventListener("DOMContentLoaded", function () {
  function toggleSubjectCheckboxes() {
    var classSelect = document.getElementById("class");
    if (!classSelect) return;
    var selectedClass = classSelect.options[classSelect.selectedIndex].value;
    var checkboxesDiv = document.getElementById("subjectCheckboxes");
    var mathLabel = document.getElementById("mathLabel");
    var physicsLabel = document.getElementById("physicsLabel");
    var chemistryLabel = document.getElementById("chemistryLabel");
    var scienceLabel = document.getElementById("scienceLabel");
    var bioLabel = document.getElementById("bioLabel");
    var economicsLabel = document.getElementById("economicsLabel");
    var allSubjectsLabel = document.getElementById("allSubjectsLabel");

    // Hide all by default
    [mathLabel, physicsLabel, chemistryLabel, scienceLabel, bioLabel, economicsLabel, allSubjectsLabel].forEach(function(label) {
      if (label) label.style.display = "none";
    });
    checkboxesDiv.style.display = "none";

    // Show relevant checkboxes based on class/course
    if (["1","2","3","4","5"].includes(selectedClass)) {
      checkboxesDiv.style.display = "block";
      if (allSubjectsLabel) allSubjectsLabel.style.display = "block";
      if (mathLabel) mathLabel.style.display = "block";
      if (scienceLabel) scienceLabel.style.display = "block";
    } else if (["6","7","8"].includes(selectedClass)) {
      checkboxesDiv.style.display = "block";
      if (allSubjectsLabel) allSubjectsLabel.style.display = "block";
      if (scienceLabel) scienceLabel.style.display = "block";
      if (mathLabel) mathLabel.style.display = "block";
    } else if (["9","10"].includes(selectedClass)) {
      checkboxesDiv.style.display = "block";
      if (mathLabel) mathLabel.style.display = "block";
      if (scienceLabel) scienceLabel.style.display = "block";
    } else if (["11","12"].includes(selectedClass)) {
      checkboxesDiv.style.display = "block";
      if (physicsLabel) physicsLabel.style.display = "block";
      if (chemistryLabel) chemistryLabel.style.display = "block";
      if (bioLabel) bioLabel.style.display = "block";
      if (mathLabel) mathLabel.style.display = "block";
      if (economicsLabel) economicsLabel.style.display = "block";
    } else if (selectedClass === "BCA/BSc mathematics" || selectedClass === "BSc CS/IT") {
      checkboxesDiv.style.display = "block";
      if (mathLabel) mathLabel.style.display = "block";
    } else if (selectedClass === "BBA") {
      checkboxesDiv.style.display = "block";
      if (economicsLabel) economicsLabel.style.display = "block";
    } else if (selectedClass === "B.Pharma") {
      checkboxesDiv.style.display = "block";
      if (bioLabel) bioLabel.style.display = "block";
      if (chemistryLabel) chemistryLabel.style.display = "block";
    }
  }

  var classSelect = document.getElementById("class");
  if (classSelect) {
    classSelect.addEventListener("change", toggleSubjectCheckboxes);
    toggleSubjectCheckboxes();
  }

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