import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  readonly blockNumber =  Array(50).fill(1).map((x,i)=>i);

  constructor(){

  }
  experiences = [
    {
      title: 'Software Developer',
      group: 'WaterDMD',
      subHeading: 'Arizona State University',
      url:'/assets/nmde_logo.jpeg',
      description: "In our software development team, I've led the creation of a Geo Visualization tool with Angular, enhanced predictive analytics with an LSTM-based mental modeler, and contributed to a TensorFlow-powered fitness app. I've also addressed NLP model biases and enriched social network analysis, consistently focusing on user-centric design and collaborative product development."
    },

    {
      title: 'Software Developer Intern',
      group: 'T1 Mapping',
      subHeading: 'UAI Imaging Intelligence',
      url:'/assets/uai_logo.jpeg',
      description: "Spearheaded the development of a T1 mapping Dicom Image dashboard leveraging Vue.js to expedite cardiac anomaly detection."
    },

    {
      title: 'Edison Software Developer',
      group: 'WaterDMD',
      subHeading: 'GE Healthcare',
      url:'/assets/ge_healthcare.jpeg',
      description: "In our software development team, I've led the creation of a Geo Visualization tool with Angular, enhanced predictive analytics with an LSTM-based mental modeler, and contributed to a TensorFlow-powered fitness app. I've also addressed NLP model biases and enriched social network analysis, consistently focusing on user-centric design and collaborative product development."
    },


  ];
  ngAfterViewInit(): void {
    this.animatedBlocks();
    setInterval(this.animatedBlocks,4000);
  }


  private animatedBlocks(){
      anime({
      targets:'.block',
      translateX: function(){
        return anime.random(-700,700);
      },
      translateY: function(){
        return anime.random(-500,500);
      },
      scale: function(){
        return anime.random(1,5);
      },
      easing: 'linear',
      duration: 3000,
      delay: anime.stagger(10),
    });
  }

}