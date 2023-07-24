// Get the theme toggle button element
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Check the user's preferred theme (dark or light) on page load
const userPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the initial theme based on user preference
document.body.classList.toggle('dark-mode', userPreferredTheme === 'dark');

// Toggle the theme when the button is clicked
themeToggleBtn.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');

	const themeToggleBtn = document.getElementById("themeToggleBtn");
  themeToggleBtn.textContent = "Light Mode";

  });

// Save user preference for the next visit
function saveThemePreference() {
  const themePreference = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', themePreference);
}

// Load user preference from localStorage on subsequent visits
const savedThemePreference = localStorage.getItem('theme');
if (savedThemePreference) {
  document.body.classList.toggle('dark-mode', savedThemePreference === 'dark');
}

// Listen for changes in system theme preference (e.g., when OS settings change)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {



  const systemPreference = event.matches ? 'dark' : 'light';
  if (!savedThemePreference) {
    // Only change the theme if the user hasn't explicitly set a preference
    document.body.classList.toggle('dark-mode', systemPreference === 'dark');
    	
	const themeToggleBtn = document.getElementById("themeToggleBtn");
	themeToggleBtn.textContent = "dark Mode";
  }
});


