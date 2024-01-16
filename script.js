var tl = gsap.timeline()

tl.from(".hero",{
    y:"100vh",
    rotation:20,
    delay:0.5,
    duration:1,
    stagger:0.2
})

gsap.from(".animate",{
    opacity:0,
    scrollTrigger:{
        trigger:".animate",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        duration:1,
        scrub:true
    }
})

tl.from("nav img",{
    scale:0,
    duration:0.5
})

tl.from(".sponsorGallery .row .col",{
    opacity:0,
    y:"50%",
    scale:1,
    stagger:0.1,
    scrollTrigger: {
        trigger: '.sponsorGallery .row .col',
        start: 'top start%',
        end: 'bottom center', 
        scrub: 1,
    }
})

gsap.from(".benifits .card2,.benifits .card3",{
    opacity:0,
    y:"5vh",
    duration:0.5,
    rotationX:-50,
    scrub:true,
    stagger:0.2,
    scrollTrigger:{
        trigger:".benifits .card2,.benifits .card3",
        scroller:"body",
        start:"top 60%",
        end:"top 70%"
    }
})
gsap.from(".benifits .card4",{
    opacity:0,
    y:"5vh",
    duration:0.5,
    rotationX:-50,
    scrub:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:".benifits .card4",
        scroller:"body",
        start:"top 70%"
    }
})


gsap.from(".card5",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    scrollTrigger:{
        trigger:".card5",
        scroller:"body",
        start:"top 85%"
    }
})

gsap.from(".card6",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".card5",
        scroller:"body",
        start:"top 85%"
    }
})

gsap.from(".card7",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    scrollTrigger:{
        trigger:".card7",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from(".card8",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:".card7",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".card9",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    delay:0.6,
    scrollTrigger:{
        trigger:".card9",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from(".card10",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    scrollTrigger:{
        trigger:".card10",
        scroller:"body",
        start:"top 75%"
    }
})

gsap.from(".card11",{
    rotationX:-90,
    rotationY:10,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:".card10",
        scroller:"body",
        start:"top 75%"
    }
})


const accordian = document.getElementsByClassName("contentBx");
for (i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",function(){
        this.classList.toggle('active');
    })
}