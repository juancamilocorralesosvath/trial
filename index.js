const hamb = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");


if (hamb) {
    hamb.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove("active")
    })
}