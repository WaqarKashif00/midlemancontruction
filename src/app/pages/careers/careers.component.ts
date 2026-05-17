import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  showModal = false;
  selectedJob = '';
  applySuccess = false;

  openApplicationModal(jobTitle: string) {
    this.selectedJob = jobTitle;
    this.showModal = true;
    this.applySuccess = false;
  }

  closeModal() {
    this.showModal = false;
  }

  submitApplication(event: Event) {
    event.preventDefault();
    this.applySuccess = true;
  }
}
