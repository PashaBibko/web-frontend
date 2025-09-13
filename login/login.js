/* Adds event listener to the log in button */

document.getElementById("LoginButton").addEventListener('click', async () => {
    /* Fetches the password input */
    const pwd = document.getElementById("LoginPasswordInput").textContent;

    /* Calls the API */
    fetch("https://api.pashabibko.uk/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: pwd })
    });
});