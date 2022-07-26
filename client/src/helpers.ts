export const setCookie = (name: string, value: string): void => {
    document.cookie = `${name}=${value}`
}

export const getCookie = (name: string): string => {
    let cookieName = name+"=";
    let allCookies = document.cookie.split('; ');
    for (let i=0; i<allCookies.length; i++) {
        let currCookie = allCookies[i];
        if (currCookie.indexOf(cookieName) === 0) {
            return currCookie.substring(cookieName.length, currCookie.length)
        }
    }
    return "";
}