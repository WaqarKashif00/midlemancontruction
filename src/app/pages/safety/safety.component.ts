import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './safety.component.html',
  styleUrl: './safety.component.css'
})
export class SafetyComponent {}
