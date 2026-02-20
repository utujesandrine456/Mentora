import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero {
  title = "Learning Without Limits";
  subtitle = "Missed a seat at the physical camp? Join our digital ecosystem. Access curriculum, mentors, and community from anywhere in the country.";

  getStarted() {
    alert("Button clicked!");
  }
}
