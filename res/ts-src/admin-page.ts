import { LoadProtected } from "./helpers/LoadProtected.js"

/* Default (error) page */
const defaultPage = `
<div id="protected-content-error">
    <link rel="stylesheet" href="../res/styles/admin-page.css">

    <h1 id="ProtectedContentTitle">This page is blocked</h1>
    <p>
        Sorry you do not have the ability to view this page.
        Please login
        <a href="https://pashabibko.uk/login/login.html">here</a>.
    </p>
</div>`;

/* Finds URL params for correct control flow */

const query = window.location.search;
const params = new URLSearchParams(query);

const page = params.get('page');
const redirect = params.get('checklogin');

/* Gets the div to insert the content into */
const protectedContentDiv = document.getElementById("protected-content");
if (!(protectedContentDiv instanceof HTMLDivElement)) {
    alert("Could not find location to put content");
}

/* Else inserts error page if no page was provided */
else if (page == null) {
    protectedContentDiv.innerHTML = defaultPage;
}

/* Else attempts to load the page from the API */
else {
    try {
        /* Fetches the file from the API */
        const res = await LoadProtected(page);
        if (res == null) {
            throw new Error("API did not repsond");
        }

        /* 403 means the user did not have access so it is handleded accordingly */
        if (res.status == 403) {
            if (redirect != null && redirect == "1") {
                window.location.href = "login.html";
            } else {
                throw new Error("403 - Forbidden");
            }
        } else {
            /* Fetches the file from the API request */
            const txt = await res.text();
            if (txt == null) {
                throw new Error("No file was found");
            }

            /* Places the file contents in the content div */
            protectedContentDiv.innerHTML = txt;
        }
    } catch (err) {
        console.error(err);
        protectedContentDiv.innerHTML = defaultPage;
    }
}
