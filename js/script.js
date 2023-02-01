

// Redirecting individual blogs to their respective contents (inside Latest blog section)

let newsPost1 = document.getElementById("newsPost1");
let newsPost2 = document.getElementById("newsPost2");
let newsPost3 = document.getElementById("newsPost3");
let newsPost4 = document.getElementById("newsPost4");
let newsPost5 = document.getElementById("newsPost5");
let newsPost6 = document.getElementById("newsPost6");
let newsPost7 = document.getElementById("newsPost7");
let newsPost8 = document.getElementById("newsPost8");

let trending1 = document.getElementById("trending1");
let trending2 = document.getElementById("trending2");
let trending3 = document.getElementById("trending3");
let trending4 = document.getElementById("trending4");

let hotPick1 = document.getElementById("hotPick1");
let hotPick2 = document.getElementById("hotPick2");


newsPost1.addEventListener('click',()=>{
    window.location.href = "/news1.html";
});

newsPost2.addEventListener('click',()=>{
    window.location.href = "/news2.html";
});

newsPost3.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news3.html";
});

newsPost4.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news4.html";;
});

newsPost5.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news5.html";
});

newsPost6.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news6.html";
});

newsPost7.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news7.html";
});

newsPost8.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/news8.html";
});


// Redirecting individual blogs to their respective contents (inside Trending blog section)

trending1.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/trending1.html";
});

trending2.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/trending2.html";
});

trending3.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/trending3.html";
});

trending4.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/trending4.html";
});


// Redirecting individual blogs to their respective contents (inside hot-picks blog section)

hotPick1.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/hotpick1.html";
});

hotPick2.addEventListener('click',()=>{
    window.location.href = "http://127.0.0.1:5500/hotpick2.html";
});



