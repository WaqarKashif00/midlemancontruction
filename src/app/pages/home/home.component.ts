import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSec!: ElementRef;

  ngAfterViewInit() {
    // Perform standard smooth entry animations for components using GSAP
    if (this.heroSec && this.heroSec.nativeElement) {
      gsap.from(this.heroSec.nativeElement.querySelector('h1'), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.from(this.heroSec.nativeElement.querySelector('p'), {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4
      });

      gsap.from(this.heroSec.nativeElement.querySelector('.inline-flex'), {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.1
      });

      gsap.from(this.heroSec.nativeElement.querySelectorAll('.flex-col, .grid'), {
        opacity: 0,
        y: 15,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
    }
  }
}
