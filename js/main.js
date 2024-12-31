const themeToggleBtn = document.getElementById('theme-toggle-btn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});