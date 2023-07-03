import './index.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const splitLines = new SplitType('[animate-lines]', {
  types: 'lines',
  tagName: 'span',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const splitWords = new SplitType('[animate-words]', {
  types: 'words',
  tagName: 'span',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const splitChars = new SplitType('[animate-chars]', {
  types: 'chars',
  tagName: 'span',
});

// hero section animation

gsap.from('.hero .hero_heading .word', {
  x: '10%',
  opacity: 0,
  duration: 1,
  filter: 'blur(5px)',

  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
});

gsap.from('.hero .hero_mid_span .char', {
  x: '-100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
});

gsap.from('.hero .hero_top-tag .char', {
  y: '-10%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
});

gsap.from('.hero .icon-link', {
  y: '-10%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
});

// end  hero section animation

gsap.from('.section.is-intro .paragraph .line', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 0.4,
  ease: 'Power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-intro',
    start: 'top 70%',
    end: 'center 50%',
    scrub: true,
  },
});

gsap.from('.section.is-intro .about_p .line', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-intro .about_p',
    start: 'center 70%',
    end: 'center 20%',
    scrub: true,
  },
});

const introImage = document.querySelector('.section.is-intro img');
gsap.from(introImage, {
  y: '200%',
  x: '-50%',
  opacity: 0,
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section.is-intro',
    start: 'top 70%',
    end: 'center 50%',
    scrub: 0.5,
  },
});

gsap.from('.section.is-intro .about_title .char', {
  color: '#fff',
  // y: '100%',
  rotateX: 90,
  filter: 'blur(5px)',

  // skewY: 10,
  // opacity: 0,
  duration: 1,
  ease: 'Second.out',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section.is-intro .about_title',
    start: 'top bottom',
    end: 'bottom 50%',
    markers: false,
    scrub: 1,
  },
});

gsap.from('.section.is-tech .section-title_heading .char', {
  x: '-100%',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-tech .section-subtitle .char', {
  x: '-100%',
  opacity: 0,
  duration: 1,
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-tech .section-title_desc-wrapper .word', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section-title_wrapper',
    start: 'center 70%',
    end: 'center 30%',
    scrub: true,
  },
});

gsap.from('.section.is-tech .section-title_line', {
  scaleX: 0,
  transformOrigin: 'left',
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-tech .icon-link', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  scrollTrigger: {
    trigger: '.section-title_wrapper',
    start: 'top 30%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-tech ul li', {
  opacity: 0,

  ease: 'Power2.out',
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-tech',
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',
  },
});

// design section

gsap.from('.section.is-design .section-title_heading .char', {
  x: '100%',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-design .alternate-section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-design .alternate-section-subtitle .char', {
  x: '-100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-design .alternate-section-title_wrapper',
    start: 'center 70%',
    end: 'center 30%',
    scrub: true,
  },
});

gsap.from('.section.is-design .alternate-section-title_line', {
  scaleX: 0,
  transformOrigin: 'left',
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section.is-design .alternate-section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-design ul li', {
  opacity: 0,
  ease: 'Power2.out',
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-design',
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.section.is-design .icon-link', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  scrollTrigger: {
    trigger: '.section.is-design',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
});

// soft skils section

gsap.from('.section.is-soft  .alternate-section-subtitle .char', {
  rotateX: 90,
  filter: 'blur(5px)',

  duration: 1,
  ease: 'Second.out',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section.is-soft .section-title_container',
    start: 'top bottom',
    end: 'bottom 50%',
    markers: false,
    scrub: 1,
  },
});

gsap.from('.section.is-soft .section-title_heading .char', {
  x: '-100%',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-soft .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-soft .alternate-section-title_line', {
  scaleX: 0,
  transformOrigin: 'left',
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section.is-soft .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 3,
  },
});

gsap.from('.section.is-soft ul li', {
  opacity: 0,
  ease: 'Power2.out',
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-soft',
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.section.is-soft .icon-link', {
  y: '100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  scrollTrigger: {
    trigger: '.section.is-soft',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
});

// professional experience section

gsap.from('.section.is-prof .section-title_heading .char', {
  x: '100%',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-prof .alternate-section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-prof .alternate-section-subtitle .char', {
  x: '-100%',
  filter: 'blur(5px)',
  opacity: 0,
  duration: 1,
  ease: 'Power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.section.is-prof .alternate-section-title_wrapper',
    start: 'center 70%',
    end: 'center 30%',
    scrub: true,
  },
});

gsap.from('.section.is-prof .alternate-section-title_line', {
  scaleX: 0,
  transformOrigin: 'left',
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section.is-prof .alternate-section-title_wrapper',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

// last section

gsap.from('.section.is-last .alternate-section-subtitle .char', {
  rotateX: 90,
  filter: 'blur(5px)',

  duration: 1,
  ease: 'Second.out',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.section.is-last .section-title_container',
    start: 'top bottom',
    end: 'bottom 50%',
    markers: false,
    scrub: 1,
  },
});

gsap.from('.section.is-last .section-title_heading .char', {
  x: '-100%',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-last .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('.section.is-last .alternate-section-title_line', {
  scaleX: 0,
  transformOrigin: 'left',
  duration: 1,
  ease: 'Second.out',
  scrollTrigger: {
    trigger: '.section.is-last .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 3,
  },
});

gsap.from('section.is-last .contact_row > *', {
  x: '-50',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-last .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});

gsap.from('section.is-last .icon-link', {
  x: '50',
  opacity: 0,
  duration: 1,
  color: '#fff',
  ease: 'Second.out',
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: '.section.is-last .section-title_container',
    start: 'top 80%',
    end: 'bottom 50%',
    scrub: 1,
  },
});
