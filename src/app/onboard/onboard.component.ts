import { Component, OnInit } from '@angular/core';
import {Reveal} from '../shared/index.js'

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {
  title = 'revealjs';
  ngOnInit(){ 
    console.log(Reveal)

    Reveal.initialize({
      controls: true,
      progress: true,
      controlsLayout: 'edges',
      center: true,
      autoSlide: 4500,
      transition: 'convex',
      dependencies: []
  })
  let backgrounds = document.querySelectorAll('.slide-background');
  console.log(backgrounds.length);
  let background = [
      './first.png',
      './second_image.jpg',
      './beautiful-contact-form-designs-you-can-steal.jpg'
  ];
  let index = 0;
  backgrounds.forEach(slide =>{
      console.log(slide)
      slide.setAttribute("background-image",`url(${background[index]})`)
      // slide.style.setProperty("background-image",`url(${background[index]})`,'important');
      // slide.style.backgroundSize = `cover`;
      // slide.style.backgroundRepeat = 'no-repeat';
      index++;
  })
  console.log(backgrounds)
  }
  
}
