import { Component, OnInit } from '@angular/core';
import { NgxSwiperConfig } from 'ngx-image-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  swiperConfig: NgxSwiperConfig = {
    navigationPlacement: 'inside',
    pagination: true,
    loop:true,
    paginationPlacement: 'outside'
  };

  images = [
    'https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg',
    'https://images.pexels.com/photos/29267512/pexels-photo-29267512/free-photo-of-diverse-team-collaboration-in-modern-workspace.jpeg',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
