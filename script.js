document.addEventListener("DOMContentLoaded", () => {
    const dashboard = document.getElementById("dashboard");
    const profile = document.getElementById("profile");
    const loginSection = document.getElementById("login-section");

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        loginSection.classList.add("hidden");
        dashboard.classList.remove("hidden");
    });

    document.querySelector('a[href="profile.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        dashboard.classList.add("hidden");
        profile.classList.remove("hidden");
    });

    document.getElementById("logout").addEventListener("click", function() {
        location.reload();
    });
});
















const toggleTheme = document.getElementById('theme-toggle');

// Apply saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle theme on button click
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the theme to localStorage
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
