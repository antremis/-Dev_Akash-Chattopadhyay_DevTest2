let t = 5;
const button = document.querySelector("button");

setInterval(() => {
    button.innerText = `Click to Redirect | Redirecting in ${--t}s`
}, 1000)

const redirect = () => {
    window.location.pathname = '/'
}

setTimeout(redirect, 5000)

button.addEventListener("click", redirect)