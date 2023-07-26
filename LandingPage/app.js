//Animations 
gsap.registerPlugin(ScrollTrigger)

gsap.from('.hero_animation', {
    duration: 0.6,
    opacity: 0,
    y:-150,
    stagger: 0.3
});

gsap.from('.beneficios_animation', {
    scrollTrigger: '.beneficios_animation',
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y:-150,
    stagger: 0.3,
    delay: 0.2
});
