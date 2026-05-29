import { Component, Input } from '@angular/core';

export interface CarouselProject {
  title: string;
  company: string;
  stack: string;
  color: string;
}

@Component({
  selector: 'app-project-carousel',
  imports: [],
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.css'],
})
export class ProjectCarouselComponent {
  @Input() projects: CarouselProject[] = [];
}
