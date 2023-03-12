let section = document.querySelector("section");
let btn = document.getElementById("btnn");
let close1 = document.getElementById("span");
let save = document.getElementById("btn1");

btn.addEventListener('click', function() {
    section.classList.toggle("active");
    btn.classList.toggle("active");
    setTimeout(function() {
        section.classList.toggle("active");
        btn.classList.toggle("active");
    },2000);
});

close1.addEventListener('click', function(){
    section.classList.toggle("active");
});

save.addEventListener('click', function(){
    section.classList.toggle("active");
});