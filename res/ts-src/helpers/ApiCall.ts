/* Helper function to call the correct backend for an API call */
export async function CallAPI(request: string, init?: RequestInit): Promise<Response> {
    /* Creates full API URL request */
    let url;
    if (window.location.hostname == "localhost") {
        url = new URL(request, "http://localhost:23117");
    } else {
        url = new URL(request, "https://api.pashabibko.uk");
    }

    /* Returns the response of the API call */
    const result = await fetch(url.toString(), init);
    return result;
}