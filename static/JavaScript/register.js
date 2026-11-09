document.getElementById("registerForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName: fullName,
                rollNumber: rollNumber,
                email: email,
                password: password
            })
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {
            document.getElementById("registerForm").reset();
            window.location.href = "/login";
        }

    } catch (error) {
        alert("Unable to connect to the server. Please try again.");
        console.error(error);
    }

});