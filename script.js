// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = 'lightgreen';
  });
  
  document.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById('secretBox').addEventListener('dblclick', () => {
    alert('Secret action unlocked!');
  });
  
  // Interactive Elements
  document.getElementById('colorChanger').addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  // Simple Slideshow
  let current = 0;
  setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    slides[current].style.display = 'none';
    current = (current + 1) % slides.length;
    slides[current].style.display = 'block';
  }, 3000);
  
  // Tabs
  function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('feedback');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if (!email.value.includes('@')) {
      feedback.textContent = 'Please enter a valid email.';
      feedback.style.color = 'red';
    } else if (password.value.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters.';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Form submitted successfully!';
      feedback.style.color = 'green';
    }
  });
  
  password.addEventListener('input', () => {
    if (password.value.length < 8) {
      feedback.textContent = 'Too short!';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Looking good!';
      feedback.style.color = 'green';
    }
  });
  
