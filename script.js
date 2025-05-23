document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const username = document.getElementById("username");
  
    form.addEventListener("submit", function (event) {
      // Password match check
      if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match.");
        confirmPassword.focus();
        return;
      }
  
      // Simulated username check (replace with API call in production)
      const unavailableUsernames = ["admin", "test", "user123"];
      if (unavailableUsernames.includes(username.value.toLowerCase())) {
        event.preventDefault();
        alert("Username is already taken. Please choose another one.");
        username.focus();
        return;
      }
  
      alert("Sign up successful!");
    });
  });
  