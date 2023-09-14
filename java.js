<script>
function validateForm() {
    var full name = document.getElementById("fullname").value;
    var user name = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (fullname === "") {
        alert("Please enter your full name.");
        return false; // Prevent form submission
    }

    if (username === "") {
        alert("Please enter your username.");
        return false; // Prevent form submission
    }

    if (password === "") {
        alert("Please enter your password.");
        return false; // Prevent form submission
    }

    // You can add more advanced validation here if needed.

    return true; // Allow form submission
}
</script>