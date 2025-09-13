/* Adds event listener to the log in button */

document.getElementById("LoginButton").addEventListener('click', async () => {
    /* Fetches the password input */
    const pwd = document.getElementById("LoginPasswordInput").value;

    /* Calls the API */
    const res = await fetch("https://api.pashabibko.uk/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: pwd })
    });

    /* Fowards to admin pannel if correct password */
    if (res.ok) {
        const data = await res.json();
        window.location.href = data.redirect;
    } else {
        alert("Invalid password");
    }
});
