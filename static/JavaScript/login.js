document.getElementById("loginForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("/api/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {
            window.location.href = "/student-dashboard";
        }

    } catch (error) {

        alert("Unable to connect to the server!");
        console.error(error);

    }

});