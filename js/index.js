window.sr = ScrollReveal();

sr.reveal('.navbar',{
    duration: 2500,
    origin: 'top',
    distance: '100px',
});

sr.reveal('.carousel', {
    duration: 2000,
    distance: '0px',
    opacity: 0.4
});

sr.reveal('.birthday', {
    duration: 3500,
    origin: 'bottom',
    distance: '200px',
});

sr.reveal('.item-birthday', {
    duration: 1000,
    delay: 500,
    distance: '200px',
    scale: 0.5
});

sr.reveal('.txt', {
    duration: 1600,
    delay: 1000,
    origin: 'right',
    distance: '100px',
    // scale: 0.2,
});

sr.reveal('.games', {
    distance: '0px',
    opacity: 0.8,
    duration: 1850,
});