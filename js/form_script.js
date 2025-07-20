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
  
  // Helper for Indian mobile validation
  function isValidIndianMobile(number) {
    // Accepts: 9876543210, 09876543210, +91 9876543210, +919876543210, 91-9876543210, etc.
    const cleaned = number.replace(/\s|-/g, "");
    return (
      /^\+91[6-9]\d{9}$/.test(cleaned) ||
      /^91[6-9]\d{9}$/.test(cleaned) ||
      /^0[6-9]\d{9}$/.test(cleaned) ||
      /^[6-9]\d{9}$/.test(cleaned)
    );
  }

  function isAlphaOrSpace(str) {
    // Allow common Indian name characters, spaces, dots, hyphens, apostrophes
    return /^[a-zA-Z .'-]+$/.test(str.trim());
  }

  function isValidAddress(str) {
    return str.trim().length >= 10;
  }

  function isValidSchoolName(str) {
    return str.trim().length >= 3;
  }

  function isValidImageFile(input) {
    if (!input.files || !input.files[0]) return false;
    const file = input.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/bmp", "image/svg+xml"];
    return validTypes.includes(file.type) && file.size <= 5 * 1024 * 1024; // 5MB
  }

  function isValidDateTodayOrFuture(dateStr) {
    if (!dateStr) return false;
    const today = new Date();
    today.setHours(0,0,0,0);
    const inputDate = new Date(dateStr);
    return inputDate >= today;
  }

  function isValidEmail(str) {
    return /^\S+@\S+\.\S+$/.test(str.trim());
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
    if (!isAlphaOrSpace(studentNameInput.value)) {
      return "Student name should only contain letters and spaces.";
    }
    if (!guardianNameInput.value.trim()) {
      return "Please enter parent/guardian's name.";
    }
    if (!isAlphaOrSpace(guardianNameInput.value)) {
      return "Parent/Guardian's name should only contain letters and spaces.";
    }
    if (!addressInput.value.trim() || !isValidAddress(addressInput.value)) {
      return "Please enter a valid address (at least 10 characters).";
    }
    if (!schoolNameInput.value.trim() || !isValidSchoolName(schoolNameInput.value)) {
      return "Please enter a valid school/college name (at least 3 characters).";
    }
    if (!contactNumberInput.value.trim() || !isValidIndianMobile(contactNumberInput.value.trim())) {
      return "Please enter a valid Indian student contact number (e.g. +91 9876543210, 9876543210, 09876543210).";
    }
    if (!parentContactInput.value.trim() || !isValidIndianMobile(parentContactInput.value.trim())) {
      return "Please enter a valid Indian parent/guardian contact number (e.g. +91 9876543210, 9876543210, 09876543210).";
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
    if (boardInput.value === "Other" && (!otherBoardInput.value.trim() || otherBoardInput.value.trim().length < 3)) {
      return "Please specify your board (at least 3 characters).";
    }
    if (!photoInput.value || !isValidImageFile(photoInput)) {
      return "Please upload a valid student photo (image, max 5MB).";
    }
    if (parentEmailInput.value && !isValidEmail(parentEmailInput.value)) {
      return "Please enter a valid parent/guardian email address.";
    }
    if (!joiningDateInput.value || !isValidDateTodayOrFuture(joiningDateInput.value)) {
      return "Please select a valid joining date (today or future).";
    }
    var genderSelected = Array.from(genderInputs).some(radio => radio.checked);
    if (!genderSelected) {
      return "Please select gender.";
    }
    return null;
  }

  // Notyf toast setup
  var notyf = window.Notyf ? new Notyf() : null;

  // Live validation helpers
  let lastLiveError = null;
  function showLiveError(msg) {
    if (msg && notyf) {
      if (lastLiveError !== msg) {
        notyf.dismissAll();
        notyf.error(msg);
        lastLiveError = msg;
      }
    } else if (notyf) {
      notyf.dismissAll();
      lastLiveError = null;
    }
  }

  // Live validation for each field
  function addLiveValidation() {
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

    if (studentNameInput) studentNameInput.addEventListener("input", function() {
      showLiveError(!studentNameInput.value.trim() ? "Please enter student name."
        : (!isAlphaOrSpace(studentNameInput.value) ? "Student name should only contain letters and spaces." : null));
    });
    if (guardianNameInput) guardianNameInput.addEventListener("input", function() {
      showLiveError(!guardianNameInput.value.trim() ? "Please enter parent/guardian's name."
        : (!isAlphaOrSpace(guardianNameInput.value) ? "Parent/Guardian's name should only contain letters and spaces." : null));
    });
    if (addressInput) addressInput.addEventListener("input", function() {
      showLiveError(!addressInput.value.trim() || !isValidAddress(addressInput.value) ? "Please enter a valid address (at least 10 characters)." : null);
    });
    if (schoolNameInput) schoolNameInput.addEventListener("input", function() {
      showLiveError(!schoolNameInput.value.trim() || !isValidSchoolName(schoolNameInput.value) ? "Please enter a valid school/college name (at least 3 characters)." : null);
    });
    if (contactNumberInput) contactNumberInput.addEventListener("input", function() {
      showLiveError(!contactNumberInput.value.trim() || !isValidIndianMobile(contactNumberInput.value.trim()) ? "Please enter a valid Indian student contact number (e.g. +91 9876543210, 9876543210, 09876543210)." : null);
    });
    if (parentContactInput) parentContactInput.addEventListener("input", function() {
      showLiveError(!parentContactInput.value.trim() || !isValidIndianMobile(parentContactInput.value.trim()) ? "Please enter a valid Indian parent/guardian contact number (e.g. +91 9876543210, 9876543210, 09876543210)." : null);
    });
    if (classInput) classInput.addEventListener("change", function() {
      showLiveError(!classInput.value ? "Please select class/course." : null);
    });
    if (mediumInput) mediumInput.addEventListener("change", function() {
      showLiveError(!mediumInput.value ? "Please select medium of instruction." : null);
    });
    if (boardInput) boardInput.addEventListener("change", function() {
      showLiveError(!boardInput.value ? "Please select board."
        : (boardInput.value === "Other" && (!otherBoardInput.value.trim() || otherBoardInput.value.trim().length < 3) ? "Please specify your board (at least 3 characters)." : null));
    });
    if (otherBoardInput) otherBoardInput.addEventListener("input", function() {
      if (boardInput.value === "Other") {
        showLiveError(!otherBoardInput.value.trim() || otherBoardInput.value.trim().length < 3 ? "Please specify your board (at least 3 characters)." : null);
      } else {
        showLiveError(null);
      }
    });
    if (photoInput) photoInput.addEventListener("change", function() {
      showLiveError(!photoInput.value || !isValidImageFile(photoInput) ? "Please upload a valid student photo (image, max 5MB)." : null);
    });
    if (joiningDateInput) joiningDateInput.addEventListener("change", function() {
      showLiveError(!joiningDateInput.value || !isValidDateTodayOrFuture(joiningDateInput.value) ? "Please select a valid joining date (today or future)." : null);
    });
    if (parentEmailInput) parentEmailInput.addEventListener("input", function() {
      showLiveError(parentEmailInput.value && !isValidEmail(parentEmailInput.value) ? "Please enter a valid parent/guardian email address." : null);
    });
    if (genderInputs.length) {
      genderInputs.forEach(function(radio) {
        radio.addEventListener("change", function() {
          var genderSelected = Array.from(genderInputs).some(r => r.checked);
          showLiveError(!genderSelected ? "Please select gender." : null);
        });
      });
    }
    if (subjectCheckboxes.length) {
      subjectCheckboxes.forEach(function(cb) {
        cb.addEventListener("change", function() {
          if (subjectCheckboxesDiv && subjectCheckboxesDiv.style.display !== "none") {
            var checked = Array.from(subjectCheckboxes).some(c => c.checked);
            showLiveError(!checked ? "Please select at least one subject." : null);
          } else {
            showLiveError(null);
          }
        });
      });
    }
  }

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
        // --- PDF GENERATION ---
        if (window.jspdf || window.jspdf_umd || window.jspdf) {
          const { jsPDF } = window.jspdf || window.jspdf_umd || window.jspdf;
          const doc = new jsPDF();
          // Header
          doc.setFillColor(15, 23, 42); // #0f172a
          doc.rect(0, 0, 210, 20, 'F');
          doc.setTextColor(34, 211, 238); // #22d3ee
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(18);
          doc.text('RD Learning Planet', 105, 12, { align: 'center' });
          doc.setFontSize(12);
          doc.setTextColor(0,0,0);
          // Gather data
          const get = id => document.getElementById(id);
          let data = [
            ['Student Name', get('username').value],
            ["Parent/Guardian's Name", get('guardianname').value],
            ['Address', get('address').value],
            ['School/College Name', get('schoolname').value],
            ['Contact Number', get('contactno').value],
            ["Parent/Guardian's Contact Number", get('parent_contactno').value],
            ['Class/Course', get('class').options[get('class').selectedIndex].text],
          ];
          // Subjects
          let subjects = [];
          [
            'allSubjectsLabel', 'mathLabel', 'scienceLabel', 'physicsLabel',
            'chemistryLabel', 'bioLabel', 'economicsLabel'
          ].forEach(id => {
            const label = get(id);
            if (label && label.style.display !== 'none') {
              const input = label.querySelector('input[type=checkbox]');
              if (input && input.checked) subjects.push(label.textContent.trim());
            }
          });
          data.push(['Subjects', subjects.length ? subjects.join(', ') : '']);
          data.push(['Medium of Instruction', get('medium').options[get('medium').selectedIndex].text]);
          let board = get('board').options[get('board').selectedIndex].text;
          if (get('board').value === 'Other') board += ' (' + get('otherBoard').value + ')';
          data.push(['Board', board]);
          data.push(['Parent/Guardian Email', get('parent_email').value]);
          data.push(['Joining Date', get('date').value]);
          // Gender
          let gender = '';
          const genderInputs = document.querySelectorAll('input[name="gender"]');
          genderInputs.forEach(r => { if (r.checked) gender = r.value; });
          data.push(['Gender', gender.charAt(0).toUpperCase() + gender.slice(1)]);
          // Photo: just show filename for now, image will be added below
          let photoFile = get('photo').files[0];
          data.push(['Student Photo', photoFile ? photoFile.name : '']);
          // Table
          doc.autoTable({
            head: [['Field', 'Value']],
            body: data,
            startY: 26,
            styles: { font: 'helvetica', fontSize: 11, cellPadding: 2 },
            headStyles: { fillColor: [34, 211, 238], textColor: 15, fontStyle: 'bold' },
            columnStyles: { 0: { fontStyle: 'bold', cellWidth: 60 }, 1: { cellWidth: 120 } },
            margin: { left: 14, right: 14 },
          });
          let y = doc.lastAutoTable.finalY + 10;
          // Embed photo if available
          if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
              const imgData = e.target.result;
              // Fit image to width 40mm, keep aspect ratio
              let imgProps = doc.getImageProperties(imgData);
              let pdfWidth = 40;
              let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              doc.setFontSize(12);
              doc.setTextColor(0,0,0);
              doc.text('Student Photo:', 14, y);
              doc.addImage(imgData, 'JPEG', 60, y - 5, pdfWidth, pdfHeight);
              y += pdfHeight + 10;
              // Footer
              doc.setDrawColor(34, 211, 238);
              doc.line(14, y, 196, y);
              doc.setFontSize(10);
              doc.setTextColor(120,120,120);
              doc.text('Generated by RD Learning Planet Registration', 14, y+7);
              doc.save('registration_details.pdf');
            };
            reader.readAsDataURL(photoFile);
          } else {
            // Footer
            doc.setDrawColor(34, 211, 238);
            doc.line(14, y, 196, y);
            doc.setFontSize(10);
            doc.setTextColor(120,120,120);
            doc.text('Generated by RD Learning Planet Registration', 14, y+7);
            doc.save('registration_details.pdf');
          }
        }
        // --- END PDF GENERATION ---
        form.reset();
        toggleSubjectCheckboxes();
      }
    });
  }
  
    document.querySelector("[name='reset']").addEventListener("click", function () {
    form.reset();
    toggleSubjectCheckboxes();
  });
  addLiveValidation();
  });