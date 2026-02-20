import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Feature{
  name: string;
  descr: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  styleUrl: './features.css',
  standalone: true,
  imports: [CommonModule]
})

export class Features {
  features: Feature[] = [
    {name: '100K+', descr: 'Students'},
    {name: '500+', descr: 'Mentors'},
    {name: '24/7', descr: 'Support'},
    {name: '100%', descr: 'Inclusive'},
  ]
}
