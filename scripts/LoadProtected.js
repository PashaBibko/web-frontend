import { CallAPI } from "./ApiCall.js"

export async function LoadProtected(filename) {
    const res = await CallAPI("protectedfile");
    
    return res;
}
