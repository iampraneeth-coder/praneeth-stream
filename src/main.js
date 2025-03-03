// Mock auth state
let isLoggedIn = false;

// Dark mode toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Show/hide auth modal
document.querySelector('.navbar').addEventListener('click', (e) => {
  if (e.target.textContent === 'Sign In') {
    document.querySelector('.auth-modal').style.display = 'flex';
  }
});

// Fake login
document.querySelector('.auth-modal').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  
  // Check against mock data
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    isLoggedIn = true;
    document.querySelector('.auth-modal').style.display = 'none';
    // Update UI (e.g., show user menu)
  }
});
