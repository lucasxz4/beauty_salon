let btn = document.querySelector("#icone");
let btn2 = document.querySelector(".list-menu");

btn.addEventListener('click', function() {
    if (btn2.style.display == 'block') {
        btn2.style.display = 'none';
    } else {
        btn2.style.display = 'block';
    }
})