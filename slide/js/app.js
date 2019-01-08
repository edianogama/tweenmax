const sliderItems = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__arrows--right');
const btnPrev = document.querySelector('.slider__arrows--left');

const SlideShow = {
    currentItem: 0,
    
    init: () => {
        SlideShow.in(SlideShow.currentItem);
    }, 
    in: (index) =>  {
        const item = sliderItems[index];
        const texts = item.querySelectorAll('p');
      
        TweenMax.set(item, {scale: .9});
        TweenMax.set(item, {left: '-100vw'});

        const tl = new TimelineMax();
        tl
        .to( item, .5, { left: 0, delay: 1} )
        .to( item, .3, {scale: 1,  ease: Power0.easeInOut } )
        .staggerFrom(texts, .4, { y: 300, autoAlpha: 0, ease: Back.easeOut }, .4 );
    },
    out: (index, nextItem) => {
        const item = sliderItems[index];
        const texts = item.querySelectorAll('p');
        
        const tl = new TimelineMax();
        tl
        .staggerTo(texts, .4, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-.5')
        .to( item, .3, {scale: .9,  ease: Power0.easeInOut } )
        .to( item, .5, { left: '100vw'} )
        .call(SlideShow.in, [nextItem], this, '-=1.5')
        .set(texts, { clearProps: 'all' });
    },
    next: () => {
        const next = SlideShow.currentItem !== sliderItems.length -1 ? SlideShow.currentItem +1 : 0;
        SlideShow.out(SlideShow.currentItem, next);
        SlideShow.currentItem = next;
    },
    prev: () => {
        const prev = SlideShow.currentItem > 0 ? SlideShow.currentItem -1 : sliderItems.length -1;
        SlideShow.out(SlideShow.currentItem, prev);
        SlideShow.currentItem = prev;

    }
}

SlideShow.init();
btnNext.addEventListener('click', SlideShow.next);
btnPrev.addEventListener('click', SlideShow.prev);
