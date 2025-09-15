import { LoadProtected } from "./scripts/LoadProtected.js";

/* Default (error) page */
const defaultPage = `
<div id="protected-content-error">
    <link rel="stylesheet" href="admin-page.css">

    <h1 id="ProtectedContentTitle">This page is blocked</h1>
    <p>
        Sorry, you do not have the ability to view this page.
        Please login
        <a href="https://pashabibko.uk/login/login.html">here</a>.
    </p>
</div>`;

/* Checks to see if a URL was passed as part of the URL */

const query = window.location.search;
const params = new URLSearchParams(query);

const page = params.get('page');

/* Gets the div to emplace the content in */
const protectedContentDiv = document.getElementById("protected-content");

/* Sets the default page if there was none provided */
console.log(`Page to load: [${page}]`);
if (page == null) {
    protectedContentDiv.innerHTML = defaultPage;
}

/* Else loads the page from the API (if able) */
else {
    try {
        const res = await LoadProtected("");
        const txt = await res.text();
        
        if (res.status === 403) {
            throw new Error("403 - Forbidden");
        }
        
        protectedContentDiv.innerHTML = txt;

    } catch (err) {
        console.error(err);
        protectedContentDiv.innerHTML = defaultPage;
    }
}
