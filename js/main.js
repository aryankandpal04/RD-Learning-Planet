// Custom Typing Animation (No Typed.js)
const phrases = [
  '1st–12th Classes',
  'BCA, BSc, BBA, B.Pharma',
  'Sainik School Exam Preparation',
  'Navodaya Vidyala Exam Preparation',
  'Hindi and English Medium',
  'CBSE and UK Boards',
  'Mathematics',
  'Science',
  'Economics',
  'Chemistry',
  'Physics',
  'All Subjects'
];
const el = document.getElementById('typed-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let cursor;

function typeLoop() {
  if (!el) return;
  // Add cursor if not present
  if (!cursor) {
    cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    cursor.textContent = '|';
    el.appendChild(cursor);
  }
  // Remove cursor for typing
  el.childNodes[0] && el.removeChild(el.childNodes[0]);
  const currentPhrase = phrases[phraseIndex];
  let displayText = currentPhrase.substring(0, charIndex);
  el.textContent = displayText;
  el.appendChild(cursor);

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(typeLoop, 55);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 30);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1200);
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 500);
    }
  }
}
typeLoop();