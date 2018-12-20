const tl = new TimelineMax();


const sliderItems = document.querySelectorAll('.slider__item');
const texts = sliderItems[0].querySelectorAll('p');

TweenMax.set(sliderItems[0], {scale: .9});

tl
.to( sliderItems[0], .5, { left: 0, delay: 1} )
.to( sliderItems[0], .3, {scale: 1,  ease: Power0.easeInOut } )
.staggerFrom(texts, .4, { y: 300, autoAlpha: 0, ease: Back.easeInOut }, .4 );

