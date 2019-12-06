export function getSession(key) {
    return window.sessionStorage.getItem(key)
}

export function setSession(key, val) {
    window.sessionStorage.setItem(key, val)
}