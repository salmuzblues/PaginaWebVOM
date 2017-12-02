import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {

	particleStyles: object = {};
  myParams: object = {};
  width = 200;
  height = 300;

  ngOnInit() {
    this.particleStyles = {
      'background': 'linear-gradient(to right, #6819e8 0%,#7437d0 35%,#615fde 68%,#6980f2 100%)'
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
      }
    };

	  this.carouselBanner = {
		  grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		  slide: 4,
		  speed: 500,
		  interval: 5000,
		  point: {
			  visible: true,
			  pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
		  },
		  load: 2,
		  custom: 'banner',
		  touch: true,
		  loop: true,
		  easing: 'cubic-bezier(0, 0, 0.2, 1)'
	  };


	  this.carouselBannerLoad();
  }

	public imageSources: string[] = [
		'assets/images/defense.jpg',
		'assets/images/macbook.png',
		'assets/images/fruits.jpg'
	];
	public carouselBannerItems: Array<any> = [];
	public carouselBanner: NgxCarousel;
	public carouselBannerLoad() {
		const len = this.carouselBannerItems.length;
		if (len <= 3) {
			for (let i = len; i < len + 5; i++) {
				this.carouselBannerItems.push(
					this.imageSources[Math.floor(Math.random() * this.imageSources.length)]
				);
			}
		}
	}


}

