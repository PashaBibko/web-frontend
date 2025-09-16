import { CallAPI } from "./ApiCall.js";

export async function LoadProtected(filename: string): Promise<Response> {
    const _ = filename;
    filename = _;

    const result = await CallAPI("protectedfile", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/octet-stream'
        },
        body: JSON.stringify({
            sessionID: sessionStorage.getItem("sessionID")
        })
    });

    return result;
}