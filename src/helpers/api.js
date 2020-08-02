const url = require('url');
const API_URL = "https://localhost:5001";

export const postJson = (urlStr, data) => {
    return fetch(url.resolve(API_URL, urlStr), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(handleResponse);
}


const handleResponse = async response => {
    var responseObj = await response.json();
    if (response.ok) {
        return responseObj;
    }
    else {
        return {
            error: responseObj
        }
    }
}

export const postPersonWithRecaptchV3 = (data) => postJson("person/recaptcha-v3", data);
export const postPersonWithRecaptchV2 = (data) => postJson("person/recaptcha-v2", data);

export const postPersonWithRecaptchV2Invisible = (data) => postJson("person/recaptcha-v2-invisible", data);