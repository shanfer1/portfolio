  import { AfterViewInit, Component } from '@angular/core';
  import anime from 'animejs';

  interface Experience {
    title: string;
    group: string;
    subHeading: string;
    period: string;
    url: string;
    description: string;
    products?: { [key: string]: string }; // Define the products as an optional property with string keys and string values
    tech: string;
  }
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  })
  export class AppComponent implements AfterViewInit{
    readonly blockNumber =  Array(50).fill(1).map((x,i)=>i);

    constructor(){

    }

    objectKeys = Object.keys;

    openProduct(url: string) {
      window.open(url, '_blank');
    }
    experiences :Experience[]= [
      {
        title: 'Software Developer',
        group: 'WaterDMD',
        subHeading: 'Arizona State University',
        period: 'Jan 2023 - Present',
        url:'./assets/nmde_logo.jpeg',
        description: "Within the research team, I have played a pivotal role in developing key projects, including a Geo Visualization tool to map ecological data, an LSTM neural network for advanced predictive analytics, and a cross-platform fitness application that integrates machine learning for personalized training regimens.",
        products : {"Geo Visualisation Tool": "https://nmde.waterdmd.info/", "Mental Modeler": "http://aimm.waterdmd.info/"},
        tech: 'AWS EC2, Angular, React, Python, CNN, Tensorflow, MongoDB, Docker'
      },

      {
        title: 'Software Developer Intern',
        group: 'T1 Mapping',
        period: 'May 2023 - Aug 2023',
        tech: 'Vue.js, Python, Tensorflow, Docker, Kubernetes',
        subHeading: 'UAI Imaging Intelligence - Startup',
        url:'./assets/uai_logo.jpeg',
        description: "At this AI startup, I contributed to the development of a Vue.js-based DICOM Image dashboard for quicker cardiac anomaly detection, and innovated a data processing pipeline using Numpy, Python, and TensorFlow that improved MRI data efficiency by 10%. I also introduced microservice containerization with Docker & Kubernetes, enhancing MR post-processing operations by 40%, and implemented an ECV visualization infrastructure that increased cardiac assessment accuracy by 15%."
      },

      {
        title: 'Software Develoepr',
        group: 'Edison Engineering Leadership Program',
        subHeading: 'GE Healthcare',
        tech: 'Angular, Python, Java, Golang, NLP, Docker, Kubernetes, Helm, AWS EC2, S3, RabbitMQ',
        period: 'Aug 2020 - Aug 2022',
        url:'./assets/ge_healthcare.jpeg',
        description: "At GE Healthcare, I developed a role-based access control system to bolster cybersecurity, streamlined user interfaces for MR and CT machines, and created an AI-driven Brain Segmentation infrastructure for improved Neuro MRI analysis. I also engineered a Spark NLP pipeline for patient scan recommendations and a security dashboard that reduced product delivery times and enhanced security response. My full-stack integration work on Edison hardware facilitated better patient data visualization. My efforts contributed to web application advancements recognized at Innovate 2021."
      },


    ];

    education = [
      {
        school: 'Arizona State University',
        degree: 'Master of Science in Computer Science',
        period: '2022 - 2023',
        url: './assets/asu_image.webp',
        description: "Focused on advanced algorithms, data structures, and software engineering principles.",
        transcriptUrl: './assets/transcript_asu.pdf' 

      },
      {
        school: 'National Institute of Technology Calicut',
        degree: 'Bachelor of Technology in Computer Science',
        period: '2016 - 2020',
        url: './assets/nitc_calcicut image.jpeg',
        description: "Specialized in web development, networking, and database management.",
        transcriptUrl: './assets/transcript_undergrad.pdf' 

      }
    ];
    downloadTranscript(url: string) {
      const a = document.createElement('a');
      a.href = url;
      a.download = ''; // Optionally, you can set a filename here
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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