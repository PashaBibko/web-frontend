/* Helper function to connect to the correct backend */
export async function CallAPI(request, init) {
    /* Builds full API URL request */
    let url;
    if (window.location.hostname == "localhost") {
        url = new URL(request, "http://localhost:23117");
    } else {
        url = new URL(request, "https://api.pashabibko.uk");
    }

    console.log(`Polling API at ${url.toString()}`);

    /* Calls the API */
    const res = await fetch(url.toString(), init);
    return res;
}
