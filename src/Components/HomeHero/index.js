import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next'

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {

  const cover = useRef(null);
  const main = useRef(null);
  const scrollDist = useRef(null);
  const content = useRef(null)
  const {t} = useTranslation()

  useEffect(() => {

    gsap.set(main.current, {position:'fixed', background:'#fff', width:'100%', maxWidth:'1900px', height:'100%', top:0, left:'50%', x:'-50%'})
    gsap.set(scrollDist.current, {width:'100%', height:'150vh'})
    gsap.timeline({
        scrollTrigger:{
        trigger:scrollDist.current, 
        start:'top top', 
        end:'bottom bottom', 
        scrub:1,
      }
    })
        .fromTo('.sky', {y:0},{y:-200}, 0)
        .fromTo('.cloud1', {y:100},{y:-800}, 0)
        .fromTo('.cloud2', {y:-150},{y:-500}, 0)
        .fromTo('.cloud3', {y:-50},{y:-650}, 0)
        .fromTo('.mountBg', {y:-10},{y:-100}, 0)
        .fromTo('.mountMg', {y:-30},{y:-250}, 0)
        .fromTo('.mountFg', {y:-50},{y:-600}, 0)
        .fromTo('.txt2', {opacity:1},{opacity:-1, scrollTrigger: {
          trigger: '.txt2',
          endTrigger: '.main',
          start: "bottom top",
          scrub: 1,
          toggleActions: "play none reset reset"
        }}, "+=1")
        
  }, [])


  

  return(
    <Container ref={cover}>
      <div className="scrollDist" ref={scrollDist}></div>
      <div className="main" ref={main}>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
            </g>
          </mask>
          
          <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg"  width="1200" height="590" />
          <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800"/>    
          <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800"/>    
          <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800"/>    
          <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800"/>
          <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800"/>
          <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800"/>
          <Text fill="#fff" x="50%" y="200" alignmentBaseline="middle" textAnchor="middle" className="txt1">{t("baseconsulting")}</Text>
          <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <Text x="50%" y="200" fill="#162a43" alignmentBaseline="middle" textAnchor="middle" className="txt2">{t("welcome")}</Text>
          </g>
          
          <rect id="arrowBtn" width="100" height="100" opacity="0" x="550" y="220" />
        </svg>
      </div>
    </Container>
  )

}

const Container = styled.div`
  width: 100%;
  background-image: url(/assets/images/tree.webp);
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  transition: all 1s linear;
  position: absolute;
`

const Text = styled.text`
  font-size: 50px;
  font-family: "Cabin";
  font-weight: 700;
`

export default HomeHero