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

  function toggleOtherBoardField() {
    var boardSelect = document.getElementById("board");
    var otherBoardDiv = document.getElementById("otherBoardDiv");
    var otherBoardInput = document.getElementById("otherBoard");
    if (boardSelect && otherBoardDiv) {
      if (boardSelect.value === "Other") {
        otherBoardDiv.style.display = "block";
      } else {
        otherBoardDiv.style.display = "none";
        if (otherBoardInput) otherBoardInput.value = "";
      }
    }
  }

  var classSelect = document.getElementById("class");
  if (classSelect) {
    classSelect.addEventListener("change", toggleSubjectCheckboxes);
    toggleSubjectCheckboxes();
  }

  var boardSelect = document.getElementById("board");
  if (boardSelect) {
    boardSelect.addEventListener("change", toggleOtherBoardField);
    toggleOtherBoardField();
  }

  function validateForm() {
    var studentNameInput = document.getElementById("username");
    var guardianNameInput = document.getElementById("guardianname");
    var addressInput = document.getElementById("address");
    var schoolNameInput = document.getElementById("schoolname");
    var contactNumberInput = document.getElementById("contactno");
    var parentContactInput = document.getElementById("parent_contactno");
    var classInput = document.getElementById("class");
    var mediumInput = document.getElementById("medium");
    var boardInput = document.getElementById("board");
    var otherBoardInput = document.getElementById("otherBoard");
    var photoInput = document.getElementById("photo");
    var joiningDateInput = document.querySelector("input[name='date']");
    var genderInputs = document.querySelectorAll("input[name='gender']");
    var parentEmailInput = document.getElementById("parent_email");
    var subjectCheckboxesDiv = document.getElementById("subjectCheckboxes");
    var subjectCheckboxes = subjectCheckboxesDiv ? subjectCheckboxesDiv.querySelectorAll("input[type='checkbox']") : [];

    if (!studentNameInput.value.trim()) {
      return "Please enter student name.";
    }
    if (!guardianNameInput.value.trim()) {
      return "Please enter parent/guardian's name.";
    }
    if (!addressInput.value.trim()) {
      return "Please enter address.";
    }
    if (!schoolNameInput.value.trim()) {
      return "Please enter school/college name.";
    }
    if (!contactNumberInput.value.trim() || !/^\d{10}$/.test(contactNumberInput.value.trim())) {
      return "Please enter a valid 10-digit student contact number.";
    }
    if (!parentContactInput.value.trim() || !/^\d{10}$/.test(parentContactInput.value.trim())) {
      return "Please enter a valid 10-digit parent/guardian contact number.";
    }
    if (!classInput.value) {
      return "Please select class/course.";
    }
    // Subject validation: at least one subject if visible
    if (subjectCheckboxesDiv && subjectCheckboxesDiv.style.display !== "none") {
      var checked = Array.from(subjectCheckboxes).some(cb => cb.checked);
      if (!checked) {
        return "Please select at least one subject.";
      }
    }
    if (!mediumInput.value) {
      return "Please select medium of instruction.";
    }
    if (!boardInput.value) {
      return "Please select board.";
    }
    if (boardInput.value === "Other" && (!otherBoardInput.value.trim())) {
      return "Please specify your board.";
    }
    if (!photoInput.value) {
      return "Please upload a student photo.";
    }
    if (parentEmailInput.value && !/^\S+@\S+\.\S+$/.test(parentEmailInput.value)) {
      return "Please enter a valid parent/guardian email address.";
    }
    if (!joiningDateInput.value) {
      return "Please select joining date.";
    }
    var genderSelected = Array.from(genderInputs).some(radio => radio.checked);
    if (!genderSelected) {
      return "Please select gender.";
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