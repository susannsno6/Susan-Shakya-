// Function to handle the login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Define the correct username and password
    const correctUsername = "stationhub";
    const correctPassword = "susan";

    // Check if the entered username and password match
    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "well.html"; // Redirect to another page (you can create a welcome page)
    } else {
        document.getElementById("errorMessage").style.display = "block"; // Show error message
    }
});
