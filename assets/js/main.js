/*==================================================
        RSM AYURVEDA
        MAIN JAVASCRIPT
==================================================*/


/*=============================
        PRELOADER
=============================*/

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},800);

});


/*=============================
        AOS
=============================*/

AOS.init({

duration:1000,

once:true,

offset:100

});


/*=============================
        STICKY HEADER
=============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*=============================
        ACTIVE MENU
=============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar-nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*=============================
        BACK TO TOP
=============================*/

const backTop=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=============================
        SMOOTH SCROLL
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*=============================
        COUNTER
=============================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,10);

}else{

counter.innerText=target;

}

};

update();

});


/*=============================
        REVEAL
=============================*/

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let revealTop=reveals[i].getBoundingClientRect().top;

let revealPoint=120;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();


/*=============================
        BUTTON RIPPLE
=============================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.classList.add("pulse");

});

btn.addEventListener("mouseleave",()=>{

btn.classList.remove("pulse");

});

});

/*==================================================
            MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".navbar-toggler");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.add("active");

    });

}

if(closeMenu && mobileMenu){

    closeMenu.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(mobileMenu){

            mobileMenu.classList.remove("active");

        }

    });

});


/*==================================================
        SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.querySelector(".progress-bar-top");

if(progressBar){

window.addEventListener("scroll",()=>{

let totalHeight=document.body.scrollHeight-window.innerHeight;

let progress=(window.pageYOffset/totalHeight)*100;

progressBar.style.width=progress+"%";

});

}


/*==================================================
            FLOATING LEAVES
==================================================*/

const hero=document.querySelector(".hero-section");

if(hero){

for(let i=0;i<12;i++){

const leaf=document.createElement("div");

leaf.className="leaf";

leaf.innerHTML="🍃";

leaf.style.left=Math.random()*100+"%";

leaf.style.animationDuration=(6+Math.random()*8)+"s";

leaf.style.animationDelay=Math.random()*5+"s";

leaf.style.fontSize=(20+Math.random()*20)+"px";

hero.appendChild(leaf);

}

}


/*==================================================
        LAZY IMAGE LOADING
==================================================*/

const lazyImages=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

observer.unobserve(entry.target);

}

});

});

lazyImages.forEach(img=>{

observer.observe(img);

});


/*==================================================
            ACTIVE BUTTON
==================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(){

this.classList.add("clicked");

setTimeout(()=>{

this.classList.remove("clicked");

},300);

});

});


/*==================================================
        NUMBER COUNTER ON SCROLL
==================================================*/

const numberCounters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter=entry.target;

let target=+counter.dataset.target;

let count=0;

let speed=target/150;

let update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

numberCounters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==================================================
            HEADER SHADOW
==================================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(header){

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="none";

}

}

});


/*==================================================
        CONSOLE MESSAGE
==================================================*/

console.log("%c🌿 RSM Ayurveda Website Loaded Successfully","color:green;font-size:18px;font-weight:bold;");