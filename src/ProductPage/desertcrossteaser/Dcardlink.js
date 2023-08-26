// Card Animation
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y:-150,
    stagger: 0.2,
    delay: 0.2,
});


