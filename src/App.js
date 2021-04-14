import React, {useRef, useEffect} from 'react';
import './App.scss';
import {TweenMax, TimelineLite, Power3} from 'gsap';



import ImageGlove from './images/glove.jpg';
import ImageGlove1 from './images/glove-2.jpg';
import ImageGlove2 from './images/glove-3.jpg';

function App() {

  let app = useRef(null);
  let images = useRef(null);

  let content = useRef(null);

  let tl = new TimelineLite({delay: .6});
  

  useEffect(() => {

    const gloveImg = images.firstElementChild;
    const gloveImg1 = document.querySelector('.glove-1');
    const gloveImg2 = images.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];


    TweenMax.to(app, 0, {css: {visibility: 'visible'}});

    tl.from(gloveImg, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
      .from(gloveImg.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

      tl.from(gloveImg1, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(gloveImg1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2);  
    
    tl.from(gloveImg2, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(gloveImg2.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .6
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    
    
  }, [tl])

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Classically tailored</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Modernly designed</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Built tough...</div>
                </div>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc velit, ultricies ac condimentum pretium, semper ut libero. Donec rutrum nulla arcu, quis fringilla elit sollicitudin a. Sed vitae leo gravida, aliquet dolor vestibulum, malesuada tortor. Proin semper lorem at lobortis maximus.</p>
              <div className="btn-row">
                <button className="explore-btn">
                  Explore
                  <div className="arrow-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="-3 -10 30 44" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
                <div className="hero-images-inner" ref={el => images = el}>
                  <div className="hero-image glove">
                    <img src={ImageGlove} alt="Black Glove"/>
                  </div>
                  <div className="hero-image glove-1">
                    <img src={ImageGlove1} alt="Black Glove"/>
                  </div>
                  <div className="hero-image glove-2">
                    <img src={ImageGlove2} alt="Black Glove"/>
                  </div> 
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
