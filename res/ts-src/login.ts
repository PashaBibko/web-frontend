import { CallAPI } from "./helpers/ApiCall";

/* Adds event listener to the login button */
const loginButton = document.getElementById("LoginPasswordInput");
if (loginButton instanceof HTMLButtonElement) {
    loginButton.addEventListener('click', async () => {
        /* Fetches the password input */
        const pwdElement = document.getElementById("LoginPasswordInput");
        
        if (!(pwdElement instanceof HTMLInputElement)) {
            alert("Could not get password input field");
            return;
        }
        const pwd = pwdElement.value;

        /*
         * Calls the API with the password to get a session ID
         * TODO: hash the password with the time for additional security
         */
        const res = await CallAPI("login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: pwd })
        });

        /* Fowards to the admin pannel if it is the correct password */
        if (res.ok) {
            /* Fetches the JSON from the API reply */
            const data = await res.json();

            /* Stores the session ID within session storage (deleted when the tab closes) */
            const session = data.session;
            if (session == null) {
                alert("Could not find session ID in API JSON reply");
                return;
            }
            sessionStorage.setItem("sessionID", session);

            /* Fowards to the given URL */
            window.location.href = data.redirect;
        } else {
            /* Else alerts the user that they inputted the incorrect password */
            alert("Invalid password");
        }
    });
} else {
    alert("Could not find login button")
}
