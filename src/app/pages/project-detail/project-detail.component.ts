import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project, PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0); // Reset scroll position when loading a new project
    
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.project = PROJECTS.find(p => p.slug === slug);
      }
    });
  }
}
