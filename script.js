// #navbar funtionality using GSAP 


var a = gsap.timeline()

a.to("#nav-part1 #m-content", {
    opacity: 0,
    transform: "translatey(0%)",
    scale: 0,
    scrollTrigger:
    {
        trigger: "#nav-part2",
        scroller: "body",
        // markers:true,
        start: "top 125px",
        end: "top 126px",
        scrub: 1,
    }
})

a.to("#nav-part2 #box h3", {
    display: "none",
    opacity: 0,
    scrollTrigger:
    {
        trigger: "#nav-part2",
        scroller: "body",
        // markers:true,
        start: "top 110px",
        end: "top 111px",
        scrub: true,
    }
});


a.to("#nav-part2 #box p", {
    display: "none",
    opacity: 0,
    scrollTrigger:
    {
        trigger: "#nav-part2",
        scroller: "body",
        // markers:true,
        start: "top 110px",
        end: "top 111px",
        scrub: true,
    }
});

a.to("#nav-part2 h4", {
    display: "block",
    scrollTrigger:
    {
        trigger: "#nav-part2",
        scroller: "body",
        // markers:true,
        start: "top 110px",
        end: "top 111px",
        scrub: true,
    }
});


a.to("#nav-part2", {
    y: "-105%",
    width: "570px",
    scale: 0.7,
    scrollTrigger:
    {
        trigger: "#nav-part2",
        scroller: "body",
        // markers:true,
        start: "top 110px",
        end: "top 120px",
        scrub: true,
    }
})
a.to("#nav-part3", {
    y: "-80%",
    scrollTrigger:
    {
        trigger: "#nav-part3",
        scroller: "body",
        // markers:true,
        start: "top 195px",
        end: "top 180px",
        scrub:true
    }
});

a.to("#navbar", {
    position: "fixed",
    top: "0%",
    scrollTrigger:
    {
        trigger: "#navbar",
        scroller: "body",
        // markers:true,
        start: "top 5px",
        end: "top 20px",
        scrub: true,
    }
});

a.to("#page2", {
    paddingTop:"40px",
    scrollTrigger:
    {
        trigger: "#page2",
        scroller: "body",
        // markers:true,
        start: "top 205px",
        end: "top 206px",
        scrub:true
    }
});



gsap.to(".card", {
    position: "fixed",
    top: "11vh",
    right: "12vh",
    scrollTrigger:
    {
        trigger: "main",
        scroller: "body",
        // markers:true,
        start: "top -100px",
        end: "top 100000px",
        scrub: 1
    }
});


// menu-button functionality

var aa = document.querySelector("#menu-button")
var bb = document.querySelector(".card")
var flag = 0
aa.addEventListener("click", function () {
    if (flag == 0) {
        bb.style.display = "block"
        flag = 1
    }
    else {
        bb.style.display = "none"
        flag = 0
    }
})



// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: false,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        869: {
            slidesPerView: 9,
            slidesPerGroup: 2,
        },
        769: {
            slidesPerView: 8,
            slidesPerGroup: 2,
        },
        669: {
            slidesPerView: 7,
            slidesPerGroup: 2,
        },
        569: {
            slidesPerView: 6,
            slidesPerGroup: 2,
        },
        469: {
            slidesPerView: 5,
            slidesPerGroup: 2,
        },
        369: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
        269: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
    },
    navigation: {
        nextEl: ".next img",
        prevEl: ".prev img",
    },
});

let h = document.querySelector(".filter-box");
let f = document.querySelector("#fixed-box");
let d = document.querySelector(".fm-box i");
let j = document.querySelector("#main")
var flag = 0
h.addEventListener("click", function () {
    if (flag == 0) { 
        f.style.top = "11%"
        f.style.position = "fixed"
        f.style.Zindex = "100"
        f.style.left = "25%"
        f.style.display = "block"
        flag = 1
    }
    else {
        f.style.top = "1000%"
        flag = 0
    }


})
d.addEventListener("click", function () {
    f.style.top = "1000%"
})
